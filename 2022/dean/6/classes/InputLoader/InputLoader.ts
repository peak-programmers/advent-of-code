import { readFileSync } from 'fs';
import Signal from '../Signal';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    return new Signal(input);
  }

}