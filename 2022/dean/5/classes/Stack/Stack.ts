import Crate from "../Crate";

export default class Stack {

  #crates: Crate[];

  constructor(crates: Crate[]) {
    this.#crates = crates;
  }

  get crates() {
    return this.#crates;
  }

  get top() {
    const topIndex = this.#crates.length - 1;
    return this.#crates[topIndex].type;
  }

  push(crate: Crate) {
    return this.#crates.push(crate);
  }

  pop() {
    return this.#crates.pop();
  }

  removeMultiple(count: number) {
    return this.#crates.splice(-count, count);
  }

  addMultiple(crates: Crate[]) {
    this.#crates = this.#crates.concat(crates);
  }
}