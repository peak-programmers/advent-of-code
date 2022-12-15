import FileProcessor from './file-processor';
import MonkeyBusinessAnalyser from './monkey-analyser';
import MonkeyModeller from './monkey-modeller';
import CathodRayTube from './monkey-modeller';

const monkeys = FileProcessor.processInput('src/input.txt');
MonkeyModeller.playRounds(monkeys, 20);

const part1Result =
  MonkeyBusinessAnalyser.calculateMonkeyBusinessLevel(monkeys);
// const part2Result =

console.log('Part 1 result: ', part1Result);
// console.log('Part 2 result: ', part2Result);
