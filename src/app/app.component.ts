import {Component} from '@angular/core';
import {Entreprise} from "./Entreprise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-03';

  entreprise = new Entreprise("Cosling");

  personneNom = "";
  personnePrenom = "";
  equipeSelected = "-1";

  ajouterPersonne() {
    this.entreprise.addMemberToTeam(this.personneNom, this.personnePrenom, parseInt(this.equipeSelected));
    this.personneNom = "";
    this.personnePrenom= "";
    this.equipeSelected = "-1";
  }

  enleverPersonne(id: number) {
    this.entreprise.deletePersonne(id);
  }

}
