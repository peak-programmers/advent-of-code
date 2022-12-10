import InputLoader from "@shared/InputLoader";
import Day from "@shared/Day";
import config from "2022/4/config";
import RangePair from "../RangePair";

export default class Day4 extends Day {

  constructor(path: string) {
    super(path);
  }

  override solvePart1() {
    const loader = new InputLoader(config.part1);
    const rangePairs: RangePair[] = loader.load(this.inputPath);
    return rangePairs.reduce((acc, pair) => pair.isEitherFullyContained ? acc + 1 : acc, 0);
  }

  override solvePart2() {
    const loader = new InputLoader(config.part2);
    const rangePairs: RangePair[] = loader.load(this.inputPath);
    return rangePairs.reduce((acc, pair) => pair.isOverlapping ? acc + 1 : acc, 0);
  }
}
