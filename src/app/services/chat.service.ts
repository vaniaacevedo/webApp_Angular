import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Message} from '../interface/message.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>;

  public chats: Message []= [];
  public user:any={};


  constructor(private afs: AngularFirestore) { }

  loadMessages(){
    this.itemsCollection =  this.afs.collection<Message>('chats', ref => ref.orderBy('date','desc'));
     return this.itemsCollection.valueChanges().map( (messages:Message[]) => {
       console.log(messages);
       this.chats= [];
       for (let message of messages ){
         this.chats.unshift(message);
       }
       return this.chats;
     })
  }

  addMessage( text:string){

    let message: Message = {

      name:this.user.name,
      message:text,
      date:new Date().getTime(),
      uid:this.user.uid
    }

    return this.itemsCollection.add(message);

  }

}
