import InputLoader from "../InputLoader";

export default class Day8 {

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
    const grid = loader.load(this.#path);
    return grid.visibleCount;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const grid = loader.load(this.#path);
    return grid.highestScenicScore;
  }
}
