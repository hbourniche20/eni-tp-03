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

  public ajouterEquipe(input: any) {
    const e = new Equipe(input.value);
    this.entreprise.addEquipe(e);
    input.value = "";
  }

  public enleverEquipe(id: number) {
    this.entreprise.deleteEquipe(id);
  }

}
