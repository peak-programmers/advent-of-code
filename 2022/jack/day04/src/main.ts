import AssignmentPair from './assignment-pair';
import CampCleanupOrganiser from './camp-cleaner-organiser';
import FileProcessor from './file-processor';

const assignmentPairs: AssignmentPair[] =
  FileProcessor.processInputIntoAssignmentPairs('src/input.txt');

const part1Result: number =
  CampCleanupOrganiser.calculateTotalFullSectionDuplication(assignmentPairs);

console.log('Part 1 result: ', part1Result);
