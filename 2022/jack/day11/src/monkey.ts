import { MonkeyState, ThrownItem } from './types';

export default class Monkey {
  private _items: number[];
  private _itemInspectionCount: number = 0;

  private readonly operation: (oldWorry: number) => number;
  private readonly test: (worry: number) => number;

  constructor(state: MonkeyState) {
    this._items = state.items;
    this.operation = state.operation;
    this.test = state.test;
  }

  get items() {
    return this._items;
  }

  get itemInspectionCount() {
    return this._itemInspectionCount;
  }

  public takeTurn() {
    this._items = this._items.map((item: number) => {
      this._itemInspectionCount++;
      return Math.floor(this.operation(item) / 3);
    });
  }

  public throwItems(): ThrownItem[] {
    const toThrow = this._items.map((item) =>
      this.calculateToThrowLocation(item)
    );

    this._items = [];
    return toThrow;
  }

  private calculateToThrowLocation(item: number) {
    return {
      monkey: this.test(item),
      item,
    };
  }

  public receiveItem(item: number): void {
    this._items.push(item);
  }
}
