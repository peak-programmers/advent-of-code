import Rucksack from './rucksack';

export default class RucksackReorganiser {
  public static calculateSharedPriorityTotal(rucksacks: Rucksack[]): number {
    return rucksacks.reduce(
      (acc: number, rucksack: Rucksack) =>
        acc + rucksack.calculateSharedPriority(),
      0
    );
  }
}
