import CPU from "../CPU";
import CRT from "../CRT";
import InputLoader from "../InputLoader";
import SignalStrengthObserver from "../SignalStrengthObserver/SignalStrengthObserver";

export default class Day10 {

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
    const opcodes = loader.load(this.#path);
    const cpu = new CPU();
    const signalWatcher = new SignalStrengthObserver(cpu);
    opcodes.forEach((opcode) => cpu.execute(opcode));
    const cycles = [20, 60, 100, 140, 180, 220];
    const sum = cycles.reduce((acc, cycle) => acc + signalWatcher.log(cycle), 0);
    return sum;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const opcodes = loader.load(this.#path);
    const cpu = new CPU();
    const screen = new CRT(cpu);
    opcodes.forEach((opcode) => cpu.execute(opcode));
    screen.render();
    return 'BGKAEREZ';
  }
}