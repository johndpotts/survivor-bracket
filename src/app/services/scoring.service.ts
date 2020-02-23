import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  public scores: Observable<Score[]>;

  constructor(private firestore: AngularFirestore) {
    this.scores = <Observable<Score[]>>firestore.collection('scores').valueChanges({idField: 'scoreId'});
  }
  getTribeScoreTypes(): Score[] {
    return [
      {
      type: 'tribe reward',
      value: 1,
      survivorId: null,
      episode: null
    },
    {
      type: 'tribe immunity',
      value: 1,
      survivorId: null,
      episode: null
    }
  ];
  }
  getIndividualScoreTypes(): Score[] {
    return [
      {
        type: 'first boot',
        value: -3,
        survivorId: null,
        episode: null
      },
      {
        type: 'individual immunity',
        value: 1,
        survivorId: null,
        episode: null
      },
      {
        type: 'individual reward',
        value: 1,
        survivorId: null,
        episode: null
      },
      {
        type: 'found idol',
        value: 2,
        survivorId: null,
        episode: null
      },
      {
        type: 'found advantage',
        value: 2,
        survivorId: null,
        episode: null
      },
      {
        type: 'correctly played idol',
        value: 2,
        survivorId: null,
        episode: null
      },
      {
        type: 'correctly played advantage',
        value: 2,
        survivorId: null,
        episode: null
      },
      {
        type: 'incorrectly played idol',
        value: -1,
        survivorId: null,
        episode: null
      },
      {
        type: 'incorrectly played advantage',
        value: -1,
        survivorId: null,
        episode: null
      },
      {
        type: 'made merge',
        value: 1,
        survivorId: null,
        episode: null
      },
      {
        type: 'recieved FTC vote',
        value: 1,
        survivorId: null,
        episode: null
      },
      {
        type: 'came in second',
        value: 3,
        survivorId: null,
        episode: null
      },
      {
        type: 'came in third',
        value: 5,
        survivorId: null,
        episode: null
      },
      {
        type: 'won season',
        value: 10,
        survivorId: null,
        episode: null
      },
    ];
  }

  saveScore(score: Score){
    const scores = this.firestore.collection<Score>('scores');
    scores.add(score);
  }
  saveScores(scores: Score[]){
    scores.forEach((score) => this.saveScore(score));
  }
  deleteSingleScore(scoreId: string): void {
    this.firestore.collection('scores').doc(scoreId).delete();
  }

}