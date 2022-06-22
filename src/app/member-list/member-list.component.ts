import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Member} from "./Member";
import {DataService} from "../DataService";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {

  @Input() memberList: Member[] = [];
  @Input() dragList: Member[] = [];
  @Output() deleteMember = new EventEmitter<number>();

  constructor(private dataService: DataService) { }

  startDrag(member: Member) {
    console.log(member);
    this.dataService.draggedMember = member;
  }

  dropped(event: any) {
    console.log(event);
    event.item.dropContainer.data.push(this.dataService.draggedMember);
  }
}
