import {Component, OnInit} from '@angular/core';
import {DataService} from "./DataService";
import {Member} from "./member-list/Member";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  memberList: Member[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.memberList = this.dataService.memberList;
  }

  onDeleteMember(id: number) {
    this.dataService.deleteMember(id);
  }

}
