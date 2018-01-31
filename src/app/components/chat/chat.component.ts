import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

 message:string = "";
 element: any;

  constructor( public _cs: ChatService) {

  this._cs.loadMessages().subscribe(() =>{

    setTimeout( () =>{

      this.element.scrollTop= this.element.scrollHeight;
    },20)
  });
}

ngOnInit(){
  this.element=document.getElementById('app-messages')
}

  sendMessage(){
   console.log (this.message);

   if( this.message.length === 0){
     return;
   }

   this._cs.addMessage(this.message).then( () => this.message="")
   .catch( (err) => console.error('error al enviar', err) );

  }

}
