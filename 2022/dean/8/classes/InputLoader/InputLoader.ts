import { readFileSync } from 'fs';
import Tree from '../Tree';
import TreeGrid from '../TreeGrid';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    const lines = input.split('\n');
    const trees = lines.map((line) => line.split('').flatMap((height) => new Tree(+height)));
    return new TreeGrid(trees);
  }
}