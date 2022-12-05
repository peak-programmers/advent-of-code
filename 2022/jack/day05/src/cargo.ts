import MoveOrder from './types/move-order';

export default class Cargo {
  public readonly cargo: string[][];

  constructor(cargo: string[][]) {
    this.cargo = [...cargo];
  }

  public getCargo() {
    return this.cargo;
  }

  public getTopCrates() {
    return this.cargo.reduce(this.getTopCrateReducer, '');
  }

  private getTopCrateReducer(acc: string, stack: string[]) {
    return `${acc}${stack[stack.length - 1] ?? ' '}`;
  }

  public executeMoveOrders(moveOrders: MoveOrder[]): void {
    moveOrders.map((moveOrder) => {
      this.executeMoveOrder(moveOrder);
    });
  }

  private executeMoveOrder(moveOrder: MoveOrder): void {
    const inTransit: string[] = this.cargo[moveOrder.from].splice(
      -moveOrder.quantity,
      moveOrder.quantity
    );
    this.cargo[moveOrder.to].push(...inTransit.reverse());
  }
}
