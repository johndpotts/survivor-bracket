import { Component } from '@angular/core';
import { SurvivorsService } from '../services/survivors.service';
import { Survivor } from '../models/survivor.model';
import { Player } from '../models/player.model';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  survivors: Survivor[];
  players: Player[];

  constructor(private survivorsService: SurvivorsService, private playersService: PlayersService) {
  }

  ngOnInit(): void{
    this.playersService.players.subscribe(
      players => this.players = players
    );
    this.survivorsService.survivors.subscribe(
      survivors => this.survivors = survivors
    );
  }

  getPlayerSurvivors(playerId: number){
    return this.survivors.filter(
      survivor => survivor.playerId === playerId
    )
  }

}
