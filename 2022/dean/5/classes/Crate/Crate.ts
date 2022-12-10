export default class Crate {

  #type: string;

  constructor(type: string) {
    this.#type = type;
  }

  get type() {
    return this.#type;
  }
}