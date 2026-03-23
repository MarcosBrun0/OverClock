export class Tag {
  private constructor(readonly value: string) { }


  static create(raw: string): Tag {
    const cleaned = raw.startsWith('#') ? raw.slice(1) : raw;
    if (!cleaned || cleaned.length > 30)
      throw new Error('Tag inválida');
    return new Tag(cleaned);
  }
  toString() {
    return `#${this.value}`;
  }
  equals(other: Tag) {
    return this.value === other.value;
  }
}
