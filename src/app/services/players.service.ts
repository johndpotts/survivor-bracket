import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  public players: Observable<Player[]>;

  constructor(firestore: AngularFirestore) { 
   this.players =  <Observable<Player[]>>firestore.collection('players').valueChanges();
  }


}
