import { Component } from '@angular/core';
import { SurvivorsService } from '../services/survivors.service';
import { Survivor } from '../models/survivor.model';
import { ScoringService } from '../services/scoring.service';
import { Score } from '../models/score.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scoring',
  templateUrl: 'scoring.page.html',
  styleUrls: ['scoring.page.scss']
})
export class ScoringPage {
  scoreExplanationsExpanded: boolean;
  survivors: Survivor[] = [];
  tribeScore = false;
  selectedSurvivorId: number;
  selectedTribe: string;
  individualScore: Score;
  tribeScores: Score[];
  episode: number;
  allScores: Score[];


  constructor(
    private survivorService: SurvivorsService,
    private scoringService: ScoringService,
    public toastController: ToastController

  ) {
    this.survivorService.survivors.subscribe(
      survivors => this.survivors = survivors
    );
    this.scoringService.scores.subscribe(
      scores => this.allScores = scores
    )
  }
  getScoringToggleTitle(): string {
return !this.scoreExplanationsExpanded ? 'View Scoring Rules' : 'Hide Scoring Rules';
  }

  toggleScores(): void{
    this.scoreExplanationsExpanded = !this.scoreExplanationsExpanded;
  }

  getTribeScoreTypes(){
return this.scoringService.getTribeScoreTypes();
  }

  getIndividualScoreTypes(){
    return this.scoringService.getIndividualScoreTypes();
  }

  getTribes(): string[]{
    return this.survivors.reduce((namesArray: string[], survivor: Survivor) => {
       !namesArray.includes(survivor.tribe) ? namesArray.push(survivor.tribe) : null;
      return namesArray;}, [])
  }


chooseTribeOrInd(type: string){
  this.clearForm();
  this.tribeScore = (type === 'tribe') ? true : false;
}

chooseTribe(tribe: string){
  this.selectedTribe = tribe;
}

chooseEpisode(episode: string){
  this.clearForm();
  this.episode = Number(episode);
}

chooseSurvivor(survivorId: number){
  this.selectedSurvivorId = survivorId;
}

chooseTribeScore(score: Score){
  this.tribeScores = [];
  const survivorsOnTribe = this.survivors.filter(survivor => survivor.tribe === this.selectedTribe);
  survivorsOnTribe.forEach(
    survivor => {
      this.tribeScores.push(
        {...score, episode: this.episode, survivorId: survivor.survivorId}
      );
    }
  )
}

chooseIndividualScore(score: Score){
  const newScore: Score = {...score, episode: this.episode, survivorId: this.selectedSurvivorId};
  this.individualScore = newScore;
}
submitScore(){
  if (this.individualScore) {
    this.scoringService.saveScore(this.individualScore)
  } else if (this.tribeScores) {
    this.scoringService.saveScores(this.tribeScores)
  }
  this.clearForm();
  this.presentToast();
}

clearForm(){
  this.individualScore = null;
  this.tribeScores = null;
  this.selectedSurvivorId = null;
  this.selectedTribe = null;
  this.tribeScore = false;
}

getSurvivorName(survivorId: number): string {
  return this.survivors.find(survivor => survivor.survivorId===survivorId).firstName;
}
deleteSingleScore(scoreId: string):void {
  this.scoringService.deleteSingleScore(scoreId)
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Score Recorded Successfully!.',
    duration: 2000
  });
  toast.present();
}

}
