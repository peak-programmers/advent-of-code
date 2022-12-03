import FileProcessor from './file-processor';
import RucksackReorganiser from './rucksack-reorganiser';

const data = FileProcessor.processInputIntoRucksacks('src/input.txt');
const part1Result = RucksackReorganiser.calculateSharedPriorityTotal(data);
// const part2Result = RucksackReorganiser.calculateSumOfTopThree(data);

console.log('Part 1 result: ', part1Result);
// console.log('Part 2 result: ', part2Result);
