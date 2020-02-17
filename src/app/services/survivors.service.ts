import { Injectable } from '@angular/core';
import { Survivor } from '../models/survivor.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SurvivorsService {

  public survivors: Observable<Survivor[]>;

  constructor(firestore: AngularFirestore) {
    this.survivors = <Observable<Survivor[]>>firestore.collection('survivors').valueChanges();
  }
}
