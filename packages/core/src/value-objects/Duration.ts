export class Duration {
  private readonly seconds: number;
  private constructor(seconds: number) {
    this.seconds = seconds
  }


  static fromSeconds(s: number): Duration {
    if (s < 0) throw new Error("Duration cant be negative")
    return new Duration(s)
  }
  static zero() { return new Duration(0); }
  get minutes() { return Math.floor(this.seconds / 60); }
  get hours() { return Math.floor(this.seconds / 3600) }
  format(): string {
    const h = this.hours
    const m = this.minutes
  }
}
