import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Team} from "../Team";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() team: Team = new Team();

  @Output() delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteMemberFromTeam(memberId: number) {
    this.team.deleteMemberFromTeam(memberId);
  }

}
