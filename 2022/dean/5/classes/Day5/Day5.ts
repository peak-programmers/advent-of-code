import { CrateMover9000, CrateMover9001 } from "../Crane";
import InputLoader from "../InputLoader";
import Instruction from "../Instruction";
import SupplyStacks from "../SupplyStacks";

export default class Day5 {

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
    const [stacks, instructions]: [SupplyStacks, Instruction[]] = loader.load(this.#path);
    const crane = new CrateMover9000(stacks);
    instructions.forEach((instruction) => crane.lift(instruction));
    return stacks.tops;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const [stacks, instructions]: [SupplyStacks, Instruction[]] = loader.load(this.#path);
    const crane = new CrateMover9001(stacks);
    instructions.forEach((instruction) => crane.lift(instruction));
    return stacks.tops;
  }
}
