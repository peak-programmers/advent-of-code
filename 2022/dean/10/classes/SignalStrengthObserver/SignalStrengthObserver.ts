import CPU from "../CPU";
import Observer from "../Observer";

export default class SignalStrengthObserver implements Observer {

  #logs: number[] = [];

  #cpu: CPU;

  constructor(cpu: CPU) {
    this.#cpu = cpu;
    this.#cpu.registerObserver(this);
  }

  log(cycle: number) {
    return this.#logs[cycle - 1];
  }

  update(cycle: number) {
    const x = this.#cpu.registers.x;
    const signalStrength = x * cycle;
    this.#logs.push(signalStrength);
  }
}