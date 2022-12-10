export default class Range {

  #start: number;
  #end: number;

  constructor(start: number, end: number) {
    this.#start = start;
    this.#end = end;
  }

  get start() {
    return this.#start;
  }

  get end() {
    return this.#end;
  }

  fullyContains(range: Range) {
    return ((this.start <= range.start) && (this.end >= range.end)); 
  }
}