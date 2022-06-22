import {Utils} from "../Utils";

export class Personne {
  public id: number;
  public nom: string;
  public prenom: string;

  constructor(nom: string, prenom: string) {
    this.id = Utils.generateId();
    this.nom = nom;
    this.prenom = prenom;
  }
}
