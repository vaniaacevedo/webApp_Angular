import { Component, OnInit } from '@angular/core';
import { TeamsService,Team } from '../../services/teams.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

 teams:Team[]=[];

  constructor(private _teamsService: TeamsService) { }

  ngOnInit() {

    this.teams = this._teamsService.getTeams();
    //console.log(this.teams);
  }

}
