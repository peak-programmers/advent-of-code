import * as fs from 'fs';
import Rucksack from './rucksack';
import RucksackGroup from './rucksack-group';

export default class FileProcessor {
  public static processInputIntoRucksacks(inputPath: string): Rucksack[] {
    return fs
      .readFileSync(inputPath)
      .toString()
      .split('\n')
      .map((itemType: string) => new Rucksack(itemType));
  }

  public static processInputIntoRucksackGroups(
    inputPath: string
  ): RucksackGroup[] {
    return this.processInputIntoRucksacks(inputPath).reduce(
      FileProcessor.rucksackGroupReducer,
      []
    );
  }

  private static rucksackGroupReducer(
    acc: RucksackGroup[],
    rucksack: Rucksack,
    currentIndex: number
  ): RucksackGroup[] {
    if (currentIndex % 3 === 0) {
      return [...acc, new RucksackGroup()];
    }

    acc[acc.length - 1].appendRucksack(rucksack);
    return acc;
  }
}
