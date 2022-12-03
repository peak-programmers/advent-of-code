export default class Rucksack {
  private readonly rucksackContents: string;
  private readonly leftCompartment: string[];
  private readonly rightCompartment: string[];

  constructor(rucksackContents: string) {
    this.rucksackContents = rucksackContents;

    const midIndex = Math.floor(rucksackContents.length / 2);
    this.leftCompartment = rucksackContents.slice(0, midIndex).split('');
    this.rightCompartment = rucksackContents.slice(midIndex).split('');
  }

  get contents() {
    return this.rucksackContents;
  }

  public calculateSharedPriority(): number {
    const sharedItemType = this.findSharedItemType();
    if (!sharedItemType) throw new Error('Compartments must share an item');

    return this.calculatePriority(sharedItemType);
  }

  private findSharedItemType(): string | undefined {
    return this.leftCompartment.find((itemType: string) =>
      this.rightCompartment.includes(itemType)
    );
  }

  private calculatePriority(itemType: string): number {
    const asciiUppercaseOffset = 38;
    const asciiLowercaseOffset = 96;

    return itemType.toUpperCase() === itemType
      ? itemType.charCodeAt(0) - asciiUppercaseOffset
      : itemType.charCodeAt(0) - asciiLowercaseOffset;
  }
}
