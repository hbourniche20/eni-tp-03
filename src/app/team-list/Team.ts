import {Member} from "../member-list/Member";
import {Utils} from "../Utils";

export class Team {
  public id: number;
  public memberList: Member[];

  constructor(public name: string = "") {
    this.id = Utils.generateId();
    this.memberList = [];
  }

  public addMember(member: Member) {
    this.memberList.push(member);
  }

  public deleteMemberFromTeam(memberId: number) {
    const position = this.fetchMemberPosition(memberId);
    if (position > -1) {
      this.memberList.splice(position, 1);
    }
  }

  private fetchMemberPosition(memberId: number): number {
    let position = -1;
    for (let i = 0; i < this.memberList.length; i++) {
      if (this.memberList[i].id === memberId) {
        position = i;
      }
    }
    return position;
  }

  public hasMember(memberId: number): boolean {
    return this.fetchMemberPosition(memberId) > -1;
  }
}
