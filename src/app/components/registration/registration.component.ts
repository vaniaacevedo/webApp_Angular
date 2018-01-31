import { Component } from '@angular/core';
import { LoginService} from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user={
    email:'',
    password:''
  };

  error=null;

  constructor( private _ls:LoginService, private router:Router) { }

  signUp() {
     this._ls.signIn(this.user.email, this.user.password)
        .then((res) => {
           console.log(res);
           this.user.email='';
           this.user.password='';
          this.router.navigate(['profile']);
        }).catch((err) => {
          this.error = err.message;
        });

}
}
