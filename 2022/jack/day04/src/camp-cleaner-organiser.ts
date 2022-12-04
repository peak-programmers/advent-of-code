type AssignmentPair = {
  a: number[];
  b: number[];
};

export default class CampCleanupOrganiser {
  public static calculateTotalFullWorkDuplication(
    assignmentPairs: AssignmentPair[]
  ): number {
    return assignmentPairs.reduce(
      (acc: number, assignmentPair: AssignmentPair) =>
        acc + this.incrementIfFullWorkDuplication(assignmentPair),
      0
    );
  }

  private static incrementIfFullWorkDuplication(
    assignmentPair: AssignmentPair
  ): number {
    const a = assignmentPair.a;
    const b = assignmentPair.b;

    const max = Math.max(a.length, b.length) === a.length ? a : b;
    const min = max === a ? b : a;

    return max[0] <= min[0] && max[max.length - 1] >= min[min.length - 1]
      ? 1
      : 0;
  }
}
