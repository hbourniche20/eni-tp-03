import {Team} from "./team-list/Team";
import {Utils} from "./Utils";
import {Member} from "./member-list/Member";

export class DataService {
  public id: number;
  public teamList: Team[];
  public memberList: Member[];

  public draggedMember: Member = new Member();

  constructor() {
    this.id = Utils.generateId();
    this.teamList = [];
    this.memberList = [];

    const m1 = new Member("Fusée", "Adri1");
    const m2 = new Member("Larmoir", "OCAN");
    const m3 = new Member("Pertin", "JC");
    const m4 = new Member("Merian", "ACN");
    this.memberList.push(m1);
    this.memberList.push(m2);
    this.memberList.push(m3);
    this.memberList.push(m4);
    const t1 = new Team("Devs");
    t1.addMember(m1);
    t1.addMember(m2);
    const t2 = new Team("Designers")
    t2.addMember(m4);
    this.teamList.push(t1);
    this.teamList.push(t2);
  }

  // ************************************************************************
  // TEAMS
  // ************************************************************************

  public createTeam(team: Team): void {
    this.teamList.push(team);
  }

  public deleteTeam(teamId: number): boolean {
    let found = false;
    for (let i=0; i < this.teamList.length; i++) {
      const e = this.teamList[i];
      if (e.id === teamId) {
        found = true;
        this.teamList.splice(i, 1);
      }
    }
    return found;
  }

  public findTeam(teamId: number) {
    for (let i=0; i < this.teamList.length; i++) {
      const e = this.teamList[i];
      if (e.id === teamId) {
        return e;
      }
    }
    return null;
  }

  // ************************************************************************
  // MEMBERS
  // ************************************************************************

  public addMemberToTeam(memberSurname: string, memberName: string, teamId: number) {
    // Create or fetch member
    let member = this.findMemberByNames(memberSurname, memberName);
    if (member == null) {
      member = new Member(memberSurname, memberName);
      this.memberList.push(member);
    }
    // Add member to team
    const team = this.findTeam(teamId);
    if (team != null && !team.hasMember(member.id)) {
      team.addMember(member);
    }
  }

  public deleteMember(memberId: number) {
    const position = this.fetchMemberPosition(memberId);
    if (position > -1) {
      this.teamList.forEach( (team) => {
        team.deleteMemberFromTeam(memberId);
      });
      this.memberList.splice(position,1);
    }
  }

  public findMemberByNames(surname: string, name: string) {
    for (let i=0; i < this.memberList.length; i++) {
      const member = this.memberList[i];
      if (member.surname === surname && member.name === name) {
        return member;
      }
    }
    return null;
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

}
