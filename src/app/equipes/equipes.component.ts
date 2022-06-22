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

  equipeName = "";

  constructor() {
    this.entreprise = new Entreprise();
  }

  ngOnInit(): void {
  }

  public ajouterEquipe() {
    const e = new Equipe(this.equipeName);
    this.entreprise.addEquipe(e);
    this.equipeName = "";
  }

  public enleverEquipe(id: number) {
    this.entreprise.deleteEquipe(id);
  }

}
