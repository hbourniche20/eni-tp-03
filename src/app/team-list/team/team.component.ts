import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Team} from "../Team";
import {DataService} from "../../DataService";
import {Member} from "../../member-list/Member";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() team: Team = new Team();

  @Output() delete = new EventEmitter<number>();

  availableMembers: Member[] = [];
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.availableMembers = this.dataService.memberList;
  }

  onDeleteMemberFromTeam(memberId: number) {
    this.team.deleteMemberFromTeam(memberId);
  }

}
