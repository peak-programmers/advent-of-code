import * as fs from 'fs';
import * as readline from 'readline';

export default class FileProcessor {
  public static async processInputIntoInventories(
    inputPath: string
  ): Promise<number[][]> {
    const stream = fs.createReadStream(inputPath);
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

    const inventories: number[][] = [];
    let inventory: number[] = [];

    for await (const line of rl) {
      if (line === '') {
        inventories.push(inventory);
        inventory = [];
        continue;
      }

      inventory.push(parseInt(line));
    }

    inventories.push(inventory);

    return inventories;
  }
}
