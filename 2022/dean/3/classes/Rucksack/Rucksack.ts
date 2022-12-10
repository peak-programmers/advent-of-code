import Item from "../Item";

export default class Rucksack {

  #items: Item[] = [];

  get items() {
    return this.#items;
  }

  get compartments() {
    const firstCompartment = this.#items.slice(0, this.#items.length / 2);
    const secondCompartment = this.#items.slice(this.#items.length / 2, this.#items.length);
    return [firstCompartment, secondCompartment];
  }

  get duplicate() {
    const [firstCompartment, secondCompartment] = this.compartments;
    return firstCompartment.filter((itemA) => secondCompartment.some((itemB) => itemB.equals(itemA)))[0];
  }

  add(items: Item[]) {
    this.#items.push(...items);
  }
}