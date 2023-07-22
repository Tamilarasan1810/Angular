export class File {
  public file: any | undefined;
  public name: string;
  public id: number | undefined;
  public pages: number | undefined;
  public layout: string | undefined;
  public color: string | undefined;
  public pps: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
}
