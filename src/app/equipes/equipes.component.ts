import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../Entreprise";
import {Equipe} from "./Equipe";

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {

  @Input() entreprise: Entreprise;

  constructor() {
    this.entreprise = new Entreprise();
  }

  ngOnInit(): void {
  }

  public ajouterEquipe(nom: string) {
    const e = new Equipe(nom);
    this.entreprise.addEquipe(e);
  }

  public enleverEquipe(id: number) {
    this.entreprise.deleteEquipe(id);
  }

}
