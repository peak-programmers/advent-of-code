export default class StrategyCode {

  #symbol: string;

  constructor(symbol: string) {
    this.#symbol = symbol;
  }

  get symbol() {
    return this.#symbol;
  }
}