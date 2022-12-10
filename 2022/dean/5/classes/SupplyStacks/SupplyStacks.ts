import Stack from "../Stack";

export default class SupplyStacks {

  #stacks: Stack[];

  constructor(stacks: Stack[]) {
    this.#stacks = stacks;
  }

  get tops() {
    return this.#stacks.map((stack) => stack.top).join('');
  }

  stack(index: number) {
    return this.#stacks[index - 1];
  }
}