import Monkey from './monkey';

export default class MonkeyBusinessAnalyser {
  static calculateMonkeyBusinessLevel(monkeys: Monkey[]) {
    return monkeys
      .sort((a, b) => b.itemInspectionCount - a.itemInspectionCount)
      .slice(0, 2)
      .reduce(
        (acc: number, monkey: Monkey) => acc * monkey.itemInspectionCount,
        1
      );
  }
}
