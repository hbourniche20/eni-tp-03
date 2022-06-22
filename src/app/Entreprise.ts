import {Equipe} from "./equipes/Equipe";
import {Utils} from "./Utils";
import {Personne} from "./personnes/Personne";

export class Entreprise {
  public id: number;
  public nom: string;
  public equipes: Equipe[];
  public personnes: Personne[];

  constructor(nom: string = "") {
    this.id = Utils.generateId();
    this.nom = nom;
    this.equipes = [];
    this.personnes = [];

    const p1 = new Personne("Fusée", "Adri1");
    const p2 = new Personne("Larmoir", "O.C.AN");
    const p3 = new Personne("Pertin", "JC");
    const p4 = new Personne("Merian", "ACN");
    this.personnes.push(p1);
    this.personnes.push(p2);
    this.personnes.push(p3);
    this.personnes.push(p4);
    const e1 = new Equipe("Devs");
    e1.ajouterMembre(p1);
    e1.ajouterMembre(p2);
    const e2 = new Equipe("RigsF")
    e2.ajouterMembre(p4);
    this.equipes.push(e1);
    this.equipes.push(e2);
  }

  public addEquipe(equipe: Equipe): void {
    this.equipes.push(equipe);
  }

  public deleteEquipe(equipeId: number): boolean {
    let found = false;
    for (let i=0; i < this.equipes.length; i++) {
      const e = this.equipes[i];
      if (e.id === equipeId) {
        found = true;
        this.equipes.splice(i, 1);
      }
    }
    return found;
  }

  public findEquipe(equipeId: number) {
    for (let i=0; i < this.equipes.length; i++) {
      const e = this.equipes[i];
      if (e.id === equipeId) {
        return e;
      }
    }
    return null;
  }

  public findPersonneByNames(nom: string, prenom: string) {
    for (let i=0; i < this.equipes.length; i++) {
      const p = this.personnes[i];
      if (p.nom === nom && p.prenom === prenom) {
        return p;
      }
    }
    return null;
  }

  private fetchPersonnePosition(personneId: number): number {
    let position = -1;
    for (let i = 0; i < this.personnes.length; i++) {
      if (this.personnes[i].id === personneId) {
        position = i;
      }
    }
    return position;
  }

  public deletePersonne(personneId: number) {
    const position = this.fetchPersonnePosition(personneId);
    if (position > -1) {
      this.equipes.forEach( (equipe) => {
        equipe.retirerMembre(personneId);
      });
      this.personnes.splice(position,1);
    }
  }

  public deletePersonneEquipe(personneId: number, equipeId: number) {
    const equipe = this.findEquipe(equipeId);
    if (equipe != null) {
      equipe.retirerMembre(personneId);
    }
  }

  public addMemberToTeam(personneNom: string, personnePrenom: string, equipeId: number) {
    // Create or fetch member
    let personne = this.findPersonneByNames(personneNom, personnePrenom);
    if (personne == null) {
      personne = new Personne(personneNom, personnePrenom);
      this.personnes.push(personne);
    }

    // Add member to team
    const equipe = this.findEquipe(equipeId);
    if (equipe != null) {
      equipe.ajouterMembre(personne);
    }
  }


}
