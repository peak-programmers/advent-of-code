import InputLoader from "../InputLoader";
import Elf from "../Elf";

export default class Day1 {

  #path: string;

  constructor(path: string) {
    this.#path = path;
  }

  get part1() {
    return this.#solvePartOne();
  }

  get part2() {
    return this.#solvePartTwo();
  }

  #solvePartOne() {
    const loader = new InputLoader();
    const elves: Elf[] = loader.load(this.#path);
    const orderedElves = elves.sort((elfA, elfB) => elfB.caloriesHeld - elfA.caloriesHeld);
    const elfWithMostCalories = orderedElves[0];
    return elfWithMostCalories.caloriesHeld;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const elves: Elf[] = loader.load(this.#path);
    const orderedElves = elves.sort((elfA, elfB) => elfB.caloriesHeld - elfA.caloriesHeld);
    const topThreeMostCalories = orderedElves.slice(0, 3);
    const sumTopThreeCalories = topThreeMostCalories.reduce((acc, elf) => acc + elf.caloriesHeld, 0);
    return sumTopThreeCalories;
  }
}
