import { Injectable } from '@angular/core';
import { Survivor } from '../models/survivor.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SurvivorsService {

  public survivors: Observable<Survivor[]>;

  constructor(private firestore: AngularFirestore) {
    this.survivors = <Observable<Survivor[]>>firestore.collection('survivors').valueChanges();
  }
updateSurvivorTribe(survivor: Survivor){
this.firestore.collection('survivors').doc(survivor.survivorId.toString()).update({
formerTribes: survivor.formerTribes,
tribe: survivor.tribe
})}
  
}
