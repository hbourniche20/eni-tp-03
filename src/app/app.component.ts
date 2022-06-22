import {Component} from '@angular/core';
import {Entreprise} from "./Entreprise";
import {Equipe} from "./Equipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-03';

  entreprise = new Entreprise("Cosling");

  public ajouterEquipe(nom: string) {
    const e = new Equipe(nom);
    this.entreprise.addEquipe(e);
  }

  public enleverEquipe(id: number) {
    this.entreprise.deleteEquipe(id);
  }

  enleverPersonneEquipe(equipeId: number, personneID: number) {
    this.entreprise.deletePersonneEquipe(personneID, equipeId);
  }

  ajouterPersonne(nom: string, prenom: string, equipeId: string) {
    this.entreprise.addMemberToTeam(nom, prenom, parseInt(equipeId));
  }

  enleverPersonne(id: number) {
    this.entreprise.deletePersonne(id);
  }

}
