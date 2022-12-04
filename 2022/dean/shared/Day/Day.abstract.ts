import Path from 'path';


export default class Day {

  inputPath: string;

  constructor(path: string) {
    this.inputPath = Path.resolve(path);
  }

  get part1() {
    return this.solvePart1();
  }

  get part2() {
    return this.solvePart2();
  }

  solvePart1() {}

  solvePart2() {}
}