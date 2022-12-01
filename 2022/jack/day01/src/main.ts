import CalorieCounter from './calorie-counter';
import FileProcessor from './file-processor';

const data = FileProcessor.processInputIntoInventories('src/input.txt');
const part1Result = CalorieCounter.getMaxInventoryValue(data);

console.log(part1Result);
