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

  public get printRaw() {
    const a = this.assignmentA;
    const b = this.assignmentB;

    return `${a.firstSection}-${a.lastSection},${b.firstSection}-${b.lastSection}`;
  }

  private get largestAssignment() {
    return this.calculateLargestAssignment();
  }

  private get smallestAssignment() {
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

  public incrementIfSectionFullyDuplicated(): number {
    return this.largestAssignment.firstSection <=
      this.smallestAssignment.firstSection &&
      this.largestAssignment.lastSection >= this.smallestAssignment.lastSection
      ? 1
      : 0;
  }

  public incrementIfSectionPartiallyDuplicated(): number {
    return this.valueInBounds(
      this.smallestAssignment.firstSection,
      this.largestAssignment.firstSection,
      this.largestAssignment.lastSection
    ) ||
      this.valueInBounds(
        this.smallestAssignment.lastSection,
        this.largestAssignment.firstSection,
        this.largestAssignment.lastSection
      )
      ? 1
      : 0;
  }

  private valueInBounds(value: number, lowerBound: number, upperBound: number) {
    return lowerBound <= value && value <= upperBound;
  }
}
