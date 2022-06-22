import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Member} from "./Member";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {

  @Input() memberList: Member[] = [];
  @Output() deleteMember = new EventEmitter<number>();

  constructor() { }

}
