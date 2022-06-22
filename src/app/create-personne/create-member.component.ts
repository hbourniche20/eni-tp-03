import {Component, OnInit} from '@angular/core';
import {DataService} from "../DataService";
import {Team} from "../team-list/Team";

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  teamList: Team[] = [];

  memberSurname = "";
  memberName = "";
  teamSelected = "-1";

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.teamList = this.service.teamList;
  }

  createMember() {
    this.service.addMemberToTeam(this.memberSurname, this.memberName, parseInt(this.teamSelected));
    this.memberSurname = "";
    this.memberName= "";
    this.teamSelected = "-1";
  }
}
