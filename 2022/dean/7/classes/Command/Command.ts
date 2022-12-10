interface CommandParams {
  type: string,
  argument?: string,
}

export default class Command {

  #type: string;
  #argument?: string;

  constructor({ type, argument }: CommandParams) {
    this.#type = type;
    this.#argument = argument;
  }

  get type() {
    return this.#type;
  }

  get argument() {
    return this.#argument;
  }
}