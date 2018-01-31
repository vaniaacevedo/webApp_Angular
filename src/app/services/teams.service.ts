import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {

  private teams:Team[]= [

        {
            "name" : "U1",
            "position" : "1",
            "goals_score" : "24",
            "goals_taken" : "8",
            "years_in_league" : "5",
            "home_stadium" : "AJ Katzenmaier",
            "wins" : "8",
            "loses" : "3",
            "img":"assets/img/team1.png",
            "points" : "25"
        },

        {
            "name" : "U2",
            "position" : "2",
            "goals_score" : "22",
            "goals_taken" : "10",
            "years_in_league" : "3",
            "home_stadium" : "Greenbay",
            "wins" : "7",
            "loses" : "4",
            "img":"assets/img/team2.png",
            "points" : "22"
        },

        {
            "name" : "U3",
            "position" : "3",
            "goals_score" : "20",
            "goals_taken" : "12",
            "years_in_league" : "9",
            "home_stadium" : "Howard A Yeager",
            "wins" : "6",
            "loses" : "5",
            "img":"assets/img/team3.png",
            "points" : "19"
        },

        {
            "name" : "U4",
            "position" : "4",
            "goals_score" : "18",
            "goals_taken" : "14",
            "years_in_league" : "7",
            "home_stadium" : "Marjorie P Hart",
            "wins" : "5",
            "loses" : "6",
            "img":"assets/img/team4.jpg",
            "points" : "16"
        },

        {
            "name" : "U5",
            "position" : "5",
            "goals_score" : "16",
            "goals_taken" : "16",
            "years_in_league" : "8",
            "home_stadium" : "North",
            "wins" : "4",
            "loses" : "7",
            "img":"assets/img/team5.png",
            "points" : "13"
        },

        {
            "name" : "U6",
            "position" : "6",
            "goals_score" : "16",
            "goals_taken" : "16",
            "years_in_league" : "11",
            "home_stadium" : "South",
            "wins" : "3",
            "loses" : "8",
            "img":"assets/img/team6.jpg",
            "points" : "10"
        }

  ];

  constructor() {
    console.log("servicio listo para usarse")
   }

   getTeams(){
    return this.teams;
  }

  getTeam(i:string){
   return this.teams[i];
 }

}

export interface Team {
   name: string,
   position: string,
   goals_score:string,
   goals_taken:string,
   years_in_league:string,
   home_stadium:string,
   wins:string,
   loses:string,
   img: string,
   points:string
}
