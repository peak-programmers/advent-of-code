import InputLoader from "@shared/InputLoader";
import Day from "@shared/Day";
import config from '../../config';
import RockPaperScissors from "../RockPaperScissors";

export default class Day2 extends Day {

  constructor(path: string) {
    super(path);
  }

  override solvePart1() {
    const loader = new InputLoader(config.part1);
    const strategyGuide: RockPaperScissors[] = loader.load(this.inputPath);
    const total = strategyGuide.reduce((acc, round) => acc + round.score, 0);
    return total;
  }

  override solvePart2() {
    const loader = new InputLoader(config.part2);
    const strategyGuide: RockPaperScissors[] = loader.load(this.inputPath);
    const total = strategyGuide.reduce((acc, round) => acc + round.score, 0);
    return total;
  }
}
