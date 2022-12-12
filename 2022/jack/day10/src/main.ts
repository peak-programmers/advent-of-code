import FileProcessor from './file-processor';
import SignalStrengthAnalyser from './signal-strength-analyser';

const instructions =
  FileProcessor.processInputIntoInstructions('src/input.txt');
const part1Result: number = SignalStrengthAnalyser.calculateSignalStrengthSum(
  instructions,
  [20, 60, 100, 140, 180, 220]
);
// const part2Result: number = RopePhysicsModeller.calculateVisitedPositions(
//   motions,
//   10
// );

console.log('Part 1 result: ', part1Result);
// console.log('Part 2 result: ', part2Result);
