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

  ajouterPersonne(nomInput: any, prenomInput: any, equipeSelector: any) {
    this.entreprise.addMemberToTeam(nomInput.value, prenomInput.value, parseInt(equipeSelector.value));
    nomInput.value = "";
    prenomInput.value = "";
    equipeSelector.value = "-1";
  }

  enleverPersonne(id: number) {
    this.entreprise.deletePersonne(id);
  }

}
