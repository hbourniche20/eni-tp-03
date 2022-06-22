import {Personne} from "../personnes/Personne";
import {Utils} from "../Utils";

export class Equipe {
  public id: number;
  public nom: string;
  public membres: Personne[];

  constructor(nom: string = "") {
    this.id = Utils.generateId();
    this.nom = nom;
    this.membres = [];
  }

  private fetchMemberPosition(personneId: number): number {
    let position = -1;
    for (let i = 0; i < this.membres.length; i++) {
      if (this.membres[i].id === personneId) {
        position = i;
      }
    }
    return position;
  }
  public ajouterMembre(membre: Personne) {
    this.membres.push(membre);
  }

  public retirerMembre(personneId: number) {
    const position = this.fetchMemberPosition(personneId);
    if (position > -1) {
      this.membres.splice(position, 1);
    }
  }
}
