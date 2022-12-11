import { readFileSync } from 'fs';
import Vector from '../Vector';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    const motions = input.split('\n');
    const vectors = motions.flatMap((motion) => this.#createVectors(motion));
    return vectors as Vector[];
  }

  #createVectors(motion: string) {
    const [direction, magnitude] = motion.split(' ');
    const vectors = [];
    for (let i = 0; i < +magnitude; i += 1) {
      let vector;
      switch (direction) {
        case 'U': 
          vector = new Vector(0, 1);
          break;
        case 'D':
          vector = new Vector(0, -1);
          break;
        case 'L':
          vector = new Vector(-1, 0);
          break;
        case 'R':
          vector = new Vector(1, 0);
          break;
        default:
          vector = new Vector(0, 0);
      }
      vectors.push(vector);
    }
    return vectors;
  }
}