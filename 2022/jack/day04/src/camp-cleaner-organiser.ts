import AssignmentPair from './assignment-pair';

export default class CampCleanupOrganiser {
  public static calculateTotalFullWorkDuplication(
    assignmentPairs: AssignmentPair[]
  ): number {
    return assignmentPairs.reduce(
      (acc: number, assignmentPair: AssignmentPair) =>
        acc + assignmentPair.incrementIfSectionDuplicated(),
      0
    );
  }
}
