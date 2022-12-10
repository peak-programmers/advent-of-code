import { readFileSync } from 'fs';
import Command from '../Command/Command';
import { DeviceDirectory, DeviceFile } from '../DeviceFileObject';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    const lines = input.split('\n');
    const output = lines.map((line) => (line[0] === '$') ? this.#createCommand(line) : this.#createFile(line));
    return output;
  }

  #createCommand(line: string) {
    const [symbol, type, argument] = line.split(' ');
    return new Command({ type, argument });
  }

  #createFile(line: string) {
    const [size, name] = line.split(' ');
    if (size === 'dir') {
      return new DeviceDirectory({ name });
    }
    return new DeviceFile({ name, size: +size });
  }

}