interface InstructionValues {
  amount: number,
  from: number,
  to: number, 
}

export default class Instruction {

  #amount: number;
  #from: number;
  #to: number;

  constructor({ amount, from, to }: InstructionValues) {
    this.#amount = amount;
    this.#from = from;
    this.#to = to;
  }

  get amount() {
    return this.#amount;
  }

  get from() {
    return this.#from;
  }

  get to() {
    return this.#to;
  }
}