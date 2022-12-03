import * as fs from 'fs';
import Rucksack from './rucksack';

export default class FileProcessor {
  public static processInputIntoRucksacks(inputPath: string): Rucksack[] {
    return fs
      .readFileSync(inputPath)
      .toString()
      .split('\n')
      .map((itemType: string) => new Rucksack(itemType));
  }
}
