import Rucksack from "../Rucksack";
import Item from "../Item";

export default class ElfGroup {

  #rucksacks: Rucksack[];

  constructor(rucksacks: Rucksack[]) {
    this.#rucksacks = rucksacks;
  }

  get badge() {
    return this.#rucksacks.reduce((duplicates, rucksack) => this.#duplicates(duplicates, rucksack.items), this.#rucksacks[0].items)[0];
  }

  #duplicates(a: Item[], b: Item[]) {
    return a.filter((itemA) => b.some((itemB) => itemB.equals(itemA)));
  }

}