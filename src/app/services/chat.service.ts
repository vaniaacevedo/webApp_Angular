import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;

  public chats: any []= [];
  public user:any={};


  constructor(private afs: AngularFirestore) { }

  loadMessages(){
    this.itemsCollection =  this.afs.collection<any>('chats');
     return this.itemsCollection.valueChanges().map( (messages:any[]) => {
       console.log(messages);
       this.chats= messages;

     });
  }

  addMessage( text:string){

    let message= {

      name:this.user.name,
      message:text,
      date:new Date().getTime(),
      uid:this.user.uid
    }

    return this.itemsCollection.add(message);

  }

}
