import InputLoader from "../InputLoader";

export default class Day6 {

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
    const signal = loader.load(this.#path);
    return signal.startOfPacketMarker;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const signal = loader.load(this.#path);
    return signal.startOfMessageMarker;
  }
}
