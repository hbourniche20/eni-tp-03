import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "./Personne";

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss']
})
export class PersonnesComponent implements OnInit {

  @Input() personneList: Personne[] = [];
  @Output() supprimerPersonne = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
