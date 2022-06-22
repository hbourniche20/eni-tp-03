import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team-list/team/team.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CreateMemberComponent } from './create-personne/create-member.component';
import {DataService} from "./DataService";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamComponent,
    MemberListComponent,
    CreateMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
