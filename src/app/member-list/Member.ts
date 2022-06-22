import {Utils} from "../Utils";

export class Member {
  public id: number;

  constructor(public surname: string, public name: string) {
    this.id = Utils.generateId();
  }
}
