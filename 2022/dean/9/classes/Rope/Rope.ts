import Knot from "./Knot";
import Vector from "../Vector";

export default class Rope {

  #head: Knot = new Knot();
  #knots: Knot[] = [this.#head];

  constructor(length: number) {
    this.#initRope(length);
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#knots[this.#knots.length - 1];
  }

  get length() {
    return this.#knots.length;
  }

  pull(vector: Vector) {
    this.#head.move(vector);
    this.#knots.forEach((knot) => knot.update());
  }

  #initRope(length: number) {
    if (length < 1) {
      throw Error('Rope must have length 1 or more');
    }
    for (let i = 1; i < length; i += 1) {
      this.#addKnot();
    }
  }

  #addKnot() {
    const knot = new Knot(this.tail);
    this.#knots.push(knot);
  }
}