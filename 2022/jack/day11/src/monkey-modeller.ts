import Monkey from './monkey';

export default class MonkeyModeller {
  static model(monkeys: Monkey[], rounds: number) {
    for (let i = 0; i < rounds; i++) {
      monkeys.forEach((monkey) => {
        monkey.takeTurn();
        const thrownItems = monkey.throwItems();

        thrownItems.forEach((monkeyItem) => {
          monkeys[monkeyItem.monkey].receiveItem(monkeyItem.item);
        });
      });
    }
  }
}
