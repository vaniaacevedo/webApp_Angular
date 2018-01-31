import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  team:any={};

  constructor( private activatedRoute:ActivatedRoute, private _teamsService: TeamsService) {

    this.activatedRoute.params.subscribe( params => {
      //console.log(params['id']);
      this.team=this._teamsService.getTeam(params['id']);
    })

  }


}
