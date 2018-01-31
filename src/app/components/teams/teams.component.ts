import { Component, OnInit } from '@angular/core';
import { TeamsService,Team } from '../../services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams:Team[]=[];

  constructor( private _teamsService: TeamsService, private router:Router) {
    //console.log("constructor");
   }

  ngOnInit() {
    //console.log("funciona ngOnInit")
    this.teams = this._teamsService.getTeams();
    //console.log(this.teams);
  }

  showTeam(i:number){
    //console.log(i);
    this.router.navigate( ['/team',i]);
  }

}
