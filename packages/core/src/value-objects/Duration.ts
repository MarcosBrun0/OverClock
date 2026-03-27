export class Duration {
  private readonly seconds: number;
  private constructor(seconds: number) {
    this.seconds = seconds
  }


  static fromSeconds(s: number): Duration {
    if (s < 0) throw new Error("Duration can't be negative")
    return new Duration(s)
  }

  static zero() {
    return new Duration(0)
  }
  get minutes() { return Math.floor(this.seconds / 60); }
  get hours() { return Math.floor(this.seconds / 3600); }

  format(): string {
    const h = this.hours;
    const m = this.minutes % 60; //isola minutos de horas 
    if (h > 0) { return `${h}h ${m}min` }
    return `${m}min`

  }
  add(other: Duration) {
    return Duration.fromSeconds(this.seconds + other.seconds);
  }
}
