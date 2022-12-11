import FileProcessor from './file-processor';
import RopePhysicsModeller from './rope-physics-modeller';
import TreePatchAnalyser from './rope-physics-modeller';

const motions = FileProcessor.processInput('src/input.txt');
const part1Result: number =
  RopePhysicsModeller.calculateVisitedPositions(motions);
// const part2Result: number =
// TreePatchAnalyser.calculateMaxScenicScore(treePatch);

console.log('Part 1 result: ', part1Result);
// console.log('Part 2 result: ', part2Result);
