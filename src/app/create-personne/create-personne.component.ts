import {Component, Input, OnInit} from '@angular/core';
import {Entreprise} from "../Entreprise";

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.scss']
})
export class CreatePersonneComponent implements OnInit {

  @Input() entreprise: Entreprise = new Entreprise();

  personneNom = "";
  personnePrenom = "";
  equipeSelected = "-1";

  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne() {
    this.entreprise.addMemberToTeam(this.personneNom, this.personnePrenom, parseInt(this.equipeSelected));
    this.personneNom = "";
    this.personnePrenom= "";
    this.equipeSelected = "-1";
  }
}
