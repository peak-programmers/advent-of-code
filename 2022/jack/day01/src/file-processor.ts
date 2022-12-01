import * as fs from 'fs';

export default class FileProcessor {
  public static processInputIntoInventories(inputPath: string): number[][] {
    const data = fs.readFileSync(inputPath).toString().split('\n');

    const inventories: number[][] = [];
    let inventory: number[] = [];
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
