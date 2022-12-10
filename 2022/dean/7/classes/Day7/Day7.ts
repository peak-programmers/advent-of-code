import Command from "../Command";
import DeviceFileSystem from "../DeviceFileSystem";
import InputLoader from "../InputLoader";

export default class Day7 {

  #path: string;

  constructor(path: string) {
    this.#path = path;
  }
  
  get part1() {
    return this.#solvePartOne();
  }

  get part2() {
    return this.#solvePartTwo();
  }

  #solvePartOne() {
    const loader = new InputLoader();
    const output = loader.load(this.#path);
    const fileSystem = new DeviceFileSystem();
    output.forEach((input) => (input instanceof Command) ? fileSystem.execute(input) : fileSystem.new(input));
    const directorySizes = fileSystem.directories.map((dir) => dir.size);
    const directorySizesAtMost100000 = directorySizes.filter((size) => size <= 100000);
    const sum = directorySizesAtMost100000.reduce((acc, size) => acc + size, 0);
    return sum;
  }

  #solvePartTwo() {
    const loader = new InputLoader();
    const output = loader.load(this.#path);
    const fileSystem = new DeviceFileSystem();
    const DISK_SPACE = 70000000;
    const NEEDED_SPACE = 30000000;
    output.forEach((input) => (input instanceof Command) ? fileSystem.execute(input) : fileSystem.new(input));
    const directorySizes = fileSystem.directories.map((dir) => dir.size);
    const orderedDirectorySizes = directorySizes.sort((a, b) => a - b);
    const totalUsedSpace = orderedDirectorySizes.pop() as number;
    const remainingSpace = DISK_SPACE - totalUsedSpace;
    const bestDeleteSize = orderedDirectorySizes.find((size) => remainingSpace + size >= NEEDED_SPACE);
    return bestDeleteSize;
  }
}
