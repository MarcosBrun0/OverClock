class Habit {
  private readonly id: string
  private name: string
  private description: string
  private createdAt: Date
  private frequence: number[]
  private time: string
  constructor(id: string, name: string, frequence: number[], time: string) {
    this.id = id
    this.name = name
    this.createdAt = new Date()
    this.description = ""
    this.time = time
    this.frequence = frequence
  }

}
