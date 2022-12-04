import InputLoader from "@shared/InputLoader";
import Day from "@shared/Day";
import config from '../../config';

export default class Day1 extends Day {

  constructor(path: string) {
    super(path);
  }

  override solvePart1() {
    const loader = new InputLoader(config.part1);
    const elves = loader.load(this.inputPath);
    const orderedElves = elves.sort((elfA, elfB) => elfB.caloriesHeld - elfA.caloriesHeld);
    const elfWithMostCalories = orderedElves[0];
    return elfWithMostCalories.caloriesHeld;
  }

  override solvePart2() {
    const loader = new InputLoader(config.part2);
    const elves = loader.load(this.inputPath);
    const orderedElves = elves.sort((elfA, elfB) => elfB.caloriesHeld - elfA.caloriesHeld);
    const topThreeMostCalories = orderedElves.slice(0, 3);
    const sumTopThreeCalories = topThreeMostCalories.reduce((acc, elf) => acc + elf.caloriesHeld, 0);
    return sumTopThreeCalories;
  }
}
