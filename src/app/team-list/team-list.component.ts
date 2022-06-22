import {Component, OnInit} from '@angular/core';
import {DataService} from "../DataService";
import {Team} from "./Team";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teamName = "";
  teamList: Team[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.teamList = this.dataService.teamList;
  }

  public onCreateTeam() {
    const e = new Team(this.teamName);
    this.dataService.createTeam(e);
    this.teamName = "";
  }

  public onDeleteTeam(id: number) {
    this.dataService.deleteTeam(id);
  }

}
