import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';
//routes
import { APP_ROUTING } from './app.routes';

//servicios
import { TeamsService} from './services/teams.service';
import { LoginService} from './services/login.service';
import { ChatService} from './services/chat.service';

import { AuthGuardService} from './services/auth-guard.service';



//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TableComponent } from './components/table/table.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TeamComponent } from './components/team/team.component';
import { NewsFirstComponent } from './components/home/news-first.component';
import { NewsSecondComponent } from './components/home/news-second.component';
import { NewsThirdComponent } from './components/home/news-third.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamsComponent,
    AboutComponent,
    ContactComponent,
    MatchesComponent,
    TableComponent,
    ProfileComponent,
    TeamComponent,
    NewsFirstComponent,
    NewsSecondComponent,
    NewsThirdComponent,
    ChatComponent,
    RegistrationComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    APP_ROUTING
  ],
  providers: [
    TeamsService,
    LoginService,
    ChatService,
    AuthGuardService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
