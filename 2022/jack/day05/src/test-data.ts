import MovementOrder from './movement-order';
import Cargo from './cargo';

export default class TestData {
  public static readonly exampleCargoArray = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P'],
  ];
  public static readonly movementOrders: MovementOrder[] = [
    { quantity: 1, from: 1, to: 0 },
    { quantity: 3, from: 0, to: 2 },
    { quantity: 2, from: 1, to: 0 },
    { quantity: 1, from: 0, to: 1 },
  ];
}
