import { Component } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayersService } from '../services/players.service';
import { SurvivorsService } from '../services/survivors.service';
import { Survivor } from '../models/survivor.model';
import { Score } from '../models/score.model';
import { ScoringService } from '../services/scoring.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss']
})
export class LeaderboardPage {
  players: Player[] = [];
  survivors: Survivor[] = [];
  scores: Score[] = [];

  constructor(private playersService: PlayersService,
    private survivorsService: SurvivorsService,
    private scoringService: ScoringService) {
  }

  ngOnInit() {
    this.playersService.players.subscribe(
      players => this.players = players
    );
    this.survivorsService.survivors.subscribe(
      survivors => this.survivors = survivors
    );
    this.scoringService.scores.subscribe(
      scores => {
        console.log(scores)
        this.scores = scores;
        this.players.sort((player1, player2) => this.getPlayerScore(player2.playerId) - this.getPlayerScore(player1.playerId))
      }
    );
  }

  getPlayerSurvivors(playerId: number) {
    return this.survivors.filter(
      survivor => survivor.playerId === playerId
    )
  }

  getSurvivorScore(survivor: Survivor): number {
    return this.scores.filter(score => score.survivorId === survivor.survivorId).reduce((totalValue, score) => totalValue += score.value, 0);
  }

  getPlayerScore(playerId: number): number {
    return this.getPlayerSurvivors(playerId)
      .reduce((totalScore, survivor) => totalScore += this.getSurvivorScore(survivor), 0);
  }

}
