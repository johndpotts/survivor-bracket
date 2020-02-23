import { Component } from '@angular/core';
import { SurvivorsService } from '../services/survivors.service';
import { Survivor } from '../models/survivor.model';
import { Player } from '../models/player.model';
import { PlayersService } from '../services/players.service';
import { ScoringService } from '../services/scoring.service';
import { Score } from '../models/score.model';
import { SurvivorsPageModule } from './survivors.module';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-survivors',
  templateUrl: 'survivors.page.html',
  styleUrls: ['survivors.page.scss']
})
export class SurvivorsPage {

  survivors: Survivor[] = [];
  players: Player[] = [];
  scores: Score[];

  constructor(    public toastController: ToastController
,     private survivorsService: SurvivorsService, private playersService: PlayersService, private scoringService: ScoringService) {
  }

  ngOnInit(): void{
    this.playersService.players.subscribe(
      players => this.players = players
    );
    this.survivorsService.survivors.subscribe(
      survivors => this.survivors = survivors
    );
    this.scoringService.scores.subscribe(
      scores => this.scores = scores
    );
  }

  getPlayerSurvivors(playerId: number){
    return this.survivors.filter(
      survivor => survivor.playerId === playerId
    )
  }

  getTribeNames(): string[]{
    return this.survivors.reduce((namesArray: string[], survivor: Survivor) => {
       !namesArray.includes(survivor.tribe) ? namesArray.push(survivor.tribe) : null;
      return namesArray;}, [])
  }

  getSurvivorsOnTribe(tribeName: string): Survivor[]{
    return this.survivors.filter(survivor => survivor.tribe === tribeName);
  }

changeTribe(survivor: Survivor, tribeName: string):void{
  survivor.formerTribes.push(survivor.tribe);
  survivor.tribe = tribeName;
  this.survivorsService.updateSurvivorTribe(survivor);
  this.notifyOfSuccessfulTribeUpdate(survivor)
}

async notifyOfSuccessfulTribeUpdate(survivor: Survivor) {
  const toast = await this.toastController.create({
    message: `${survivor.firstName} moved from ${survivor.formerTribes[(survivor.formerTribes.length-1)]} to ${survivor.tribe}`,
    duration: 2000
  });
  toast.present();
}

}
