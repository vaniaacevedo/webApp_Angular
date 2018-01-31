import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import  { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

 constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
      this.user.subscribe(
         (user) => {
           console.log(user);
           if (user) {
             this.userDetails = user;
             console.log(this.userDetails);
           }
           else {
             console.log("not logged in");
             this.userDetails = null;
           }
         }
       );
   }

   signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInRegular(email, password) {
   const credential = firebase.auth.EmailAuthProvider.credential( email, password );
   return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
}

signIn(email, password) {
 const credential = firebase.auth.EmailAuthProvider.credential( email, password );
 return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
}


isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    console.log("logging out");
    this._firebaseAuth.auth.signOut()
    .catch(err=>{console.log(err)})
    .then((res) => this.router.navigate(['/']));
  }

}
