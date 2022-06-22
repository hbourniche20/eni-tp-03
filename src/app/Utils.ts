export class Utils {

  static id = 0;

  public static generateId(): number {
    return Utils.id++;
  }
}
