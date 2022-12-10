import Range from "../Range";

export default class RangePair {

  #ranges: Range[];

  constructor(ranges: Range[]) {
    this.#ranges = ranges;
  }

  get isEitherFullyContained() {
    const [rangeA, rangeB] = this.#ranges;
    return rangeA.fullyContains(rangeB) || rangeB.fullyContains(rangeA);
  }

  get isOverlapping() {
    const [rangeA, rangeB] = this.#ranges;
    return (
      (rangeA.end >= rangeB.start && rangeA.start <= rangeB.end) 
      || (rangeB.end >= rangeA.start && rangeB.start <= rangeA.end)
    );
  }
}