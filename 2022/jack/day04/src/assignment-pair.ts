type Assigment = {
  firstSection: number;
  lastSection: number;
};

export default class AssignmentPair {
  private readonly assignmentA: Assigment;
  private readonly assignmentB: Assigment;

  constructor(assignmentA: Assigment, assignmentB: Assigment) {
    this.assignmentA = assignmentA;
    this.assignmentB = assignmentB;
  }

  public get largestAssignment() {
    return this.calculateLargestAssignment();
  }

  public get smallestAssignment() {
    return this.largestAssignment === this.assignmentA
      ? this.assignmentB
      : this.assignmentA;
  }

  private calculateLargestAssignment(): Assigment {
    const aSize = this.calculateAssignmentSize(this.assignmentA);
    const bSize = this.calculateAssignmentSize(this.assignmentB);

    return Math.max(aSize, bSize) === aSize
      ? this.assignmentA
      : this.assignmentB;
  }

  private calculateAssignmentSize(assignment: Assigment): number {
    return assignment.lastSection - assignment.firstSection;
  }

  public incrementIfSectionDuplicated(): number {
    return this.largestAssignment.firstSection <=
      this.smallestAssignment.firstSection &&
      this.largestAssignment.lastSection >= this.smallestAssignment.lastSection
      ? 1
      : 0;
  }
}
