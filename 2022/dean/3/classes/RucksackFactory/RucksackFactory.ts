import Rucksack from "../Rucksack";
import Item from "../Item";

export default class RucksackFactory {

  create(items: Item[]) {
    const rucksack = new Rucksack();
    rucksack.add(items);
    return rucksack;
  }
}
