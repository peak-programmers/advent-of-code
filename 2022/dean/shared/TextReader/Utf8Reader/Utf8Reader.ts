import { readFileSync } from 'fs';

import TextReader from '../TextReader.interface';

export default class Utf8Reader implements TextReader { 

  read(path: string): string {
    return readFileSync(path, 'utf-8');
  }
}