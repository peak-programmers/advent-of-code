import InputLoader from "../InputLoader";
import Rope from "../Rope";
import Vector from "../Vector";

export default class Day9 {

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
    const rope = new Rope(2);
    const vectors: Vector[] = loader.load(this.#path);
    vectors.forEach((vector) => rope.pull(vector));
    return rope.tail.uniquePositionsCount;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const rope = new Rope(10);
    const vectors: Vector[] = loader.load(this.#path);
    vectors.forEach((vector) => rope.pull(vector));
    return rope.tail.uniquePositionsCount;
  }
}