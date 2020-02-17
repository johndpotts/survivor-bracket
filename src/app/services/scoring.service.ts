import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Score } from '../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  public scores: Observable<Score[]>;

  constructor(firestore: AngularFirestore) {
    this.scores = <Observable<Score[]>>firestore.collection('scores').valueChanges();
    //this.scores.subscribe(score=>{console.log(score)})
  }

 
}