export class ServerElements {
  static push(ele: any) {
    throw new Error('Method not implemented.');
  }
  public name: string;
  public type: string;
  public content: string;
  constructor(name: string, content: string, type: string) {
    this.name = name;
    this.content = content;
    this.type = type;
  }
}
