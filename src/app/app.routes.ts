import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamsComponent } from './components/teams/teams.component';
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
import { AuthGuardService } from './services/auth-guard.service';



const APP_ROUTES: Routes =[
  {path: 'home',component: HomeComponent},
  {path: 'firstNew', component: NewsFirstComponent},
  {path: 'secondNew', component: NewsSecondComponent},
  {path: 'thirdNew', component: NewsThirdComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'team/:id', component: TeamComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'table', component: TableComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'chat', component: ChatComponent,canActivate: [AuthGuardService]},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
