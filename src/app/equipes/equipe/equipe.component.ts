import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Equipe} from "../Equipe";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  @Input() equipe: Equipe;

  @Output() supprimer = new EventEmitter<number>();

  constructor() {
    this.equipe = new Equipe();
  }

  ngOnInit(): void {
  }

  enleverPersonneEquipe(personneID: number) {
    this.equipe.retirerMembre(personneID);
  }

}
