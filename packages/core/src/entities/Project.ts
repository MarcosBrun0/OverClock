class Project {
  private name: string;
  private createAt: Date;
  private readonly id: string;
  private beginTime: Date
  private endTime: Date | null
  private duration: number | null

  constructor(id: string, name: string) {
    let date = new Date();
    this.beginTime = date
    this.createAt = date
    this.name = name;
    this.id = id;
    this.endTime = null
    this.duration = null
  }
}
