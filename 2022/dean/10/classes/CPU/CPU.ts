import Observable from "../Observable";

interface Registers {
  x: number,
}

export default class CPU extends Observable {

  #ticks: number = 0;
  #registers: Registers = {
    x: 1
  }

  get registers() {
    return this.#registers;
  }

  get cycle() {
    return this.#ticks;
  }

  execute(opcode: string) {
    const [type, value] = opcode.split(' ');
    switch (type) {
      case 'addx':
        this.#tick(2);
        this.#registers.x += +value;
        break;
      case 'noop':
        this.#tick(1);
        break;
    } 
  }

  #tick(cycles: number) {
    for (let i = 0; i < cycles; i += 1) {
      this.#ticks += 1;
      this.notifyObservers(this.#ticks);
    }
  }
}