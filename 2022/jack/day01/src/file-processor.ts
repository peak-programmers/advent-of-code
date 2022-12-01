import * as fs from 'fs';
import * as readline from 'readline';

export default class FileProcessor {
  public static processInputIntoInventories(inputPath: string): number[][] {
    const inventories: number[][] = [];
    let inventory: number[] = [];

    const data = fs.readFileSync(inputPath).toString().split('\n');

    data.forEach((line) => {
      if (line === '') {
        inventories.push(inventory);
        inventory = [];
        return;
      }

      inventory.push(parseInt(line));
    });

    inventories.push(inventory);

    return inventories;
  }
}
