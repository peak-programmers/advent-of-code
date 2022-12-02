import FileProcessor from './file-processor';
import RpsStrategyGuide from './rps-strategy-guide';

const games: string[] =
  FileProcessor.processInputIntoInventories('src/input.txt');

console.log(games);

const part1Result = RpsStrategyGuide.calculateTotalScore(games);
// const part2Result = CalorieCounter.calculateSumOfTopThree(data);

console.log('Part 1 result: ', part1Result);
// console.log('Part 2 result: ', part2Result);
