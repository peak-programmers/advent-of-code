import Monkey from './monkey';
import { MonkeyState } from './types';

describe('Monkey Modeller', () => {
  it('should count 1 time for 1 monkey inspecting 1 item', () => {
    const startingState: MonkeyState = {
      items: [79],
      operation: (oldWorry: number) => oldWorry * 19,
      test: (worry: number) => (worry % 19 === 0 ? 2 : 0),
    };

    const monkey = new Monkey(startingState);

    monkey.takeTurn();

    expect(monkey.itemInspectionCount).toBe(1);
  });

  it('should apply worry operation onto items and inspection count be number of items', () => {
    const startingState: MonkeyState = {
      items: [79, 51],
      operation: (oldWorry: number) => oldWorry * 19,
      test: (worry: number) => (worry % 19 === 0 ? 2 : 0),
    };

    const monkey = new Monkey(startingState);

    monkey.takeTurn();

    expect(monkey.itemInspectionCount).toBe(2);
    expect(monkey.items).toStrictEqual([
      Math.floor((79 * 19) / 3),
      Math.floor((51 * 19) / 3),
    ]);
  });
});
