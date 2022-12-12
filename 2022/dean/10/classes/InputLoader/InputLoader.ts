import { readFileSync } from 'fs';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    const opcodes = input.split('\n');
    return opcodes;
  }
}