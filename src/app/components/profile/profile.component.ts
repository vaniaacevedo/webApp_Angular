import { Component } from '@angular/core';
import { LoginService} from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user={
    email:'',
    password:''
  };

  error=null;

  constructor(private _ls:LoginService, private router:Router) {}

  signInWithFacebook() {
        this._ls.signInWithFacebook()
        .then((res) => {
            this.router.navigate(['home'])
          })
        .catch((err) => console.log(err));
      }

  signInWithGoogle() {
            this._ls.signInWithGoogle()
            .then((res) => {
                this.router.navigate(['home'])
              })
            .catch((err) => console.log(err));
          }

  signInWithTwitter() {
                this._ls.signInWithTwitter()
                .then((res) => {
                    this.router.navigate(['home'])
                  })
                .catch((err) => console.log(err));
              }

  signInWithEmail() {
     this._ls.signInRegular(this.user.email, this.user.password)
        .then((res) => {
           console.log(res);
           this.user.email='';
           this.user.password='';
          this.router.navigate(['home']);
        })
        // .catch((err) =>this.myalert(err.message));
        .catch((err) => {
          this.error = err.message;
        });
  }


  // myalert(msg){
  //   $("#passwordError .modal-body").text(msg)
  //   $("#passwordError").modal()
  // }

}
