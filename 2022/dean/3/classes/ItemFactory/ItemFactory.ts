import Item from "../Item";

export default class ItemFactory {

  create(type: string) {
    return new Item(type);
  }
}
