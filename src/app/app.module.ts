import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { EquipesComponent } from './equipes/equipes.component';
import { EquipeComponent } from './equipes/equipe/equipe.component';
import { PersonnesComponent } from './personnes/personnes.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipesComponent,
    EquipeComponent,
    PersonnesComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
