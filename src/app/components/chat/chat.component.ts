import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

 message:string = "";

  constructor( public _cs: ChatService) {

  this._cs.loadMessages().subscribe();
}



  sendMessage(){
   console.log (this.message);

   // if( this.message.length === 0){
   //   return;
   // }
   //
   // this._cs.addMessage(this.message).then( () => this.message="")
   // .catch( (err) => console.error('error al enviar', err) );

  }

}
