import FileProcessor from './file-processor';

const { cargo, moveOrders } =
  FileProcessor.processInputIntoCargoData('src/input.txt');

cargo.executeMoveOrders(moveOrders);

const part1Result: string = cargo.getTopCrates();
// const part2Result: number =

console.log('Part 1 result: ', part1Result);
// console.log('Part 2 result: ', part2Result);
