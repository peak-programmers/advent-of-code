import AssignmentPair from './assignment-pair';
import CampCleanupOrganiser from './camp-cleaner-organiser';

describe('CampCleanupOrganiser()', () => {
  it.each([
    {
      input: [
        new AssignmentPair(
          { firstSection: 2, lastSection: 4 },
          { firstSection: 6, lastSection: 8 }
        ),
      ],
      expected: 0,
    },
    {
      input: [
        new AssignmentPair(
          { firstSection: 2, lastSection: 3 },
          { firstSection: 5, lastSection: 7 }
        ),
      ],
      expected: 0,
    },
    {
      input: [
        new AssignmentPair(
          { firstSection: 5, lastSection: 7 },
          { firstSection: 7, lastSection: 9 }
        ),
      ],
      expected: 0,
    },
    {
      input: [
        new AssignmentPair(
          { firstSection: 2, lastSection: 8 },
          { firstSection: 3, lastSection: 7 }
        ),
      ],
      expected: 1,
    },
    {
      input: [
        new AssignmentPair(
          { firstSection: 6, lastSection: 6 },
          { firstSection: 4, lastSection: 6 }
        ),
      ],
      expected: 1,
    },
    {
      input: [
        new AssignmentPair(
          { firstSection: 2, lastSection: 6 },
          { firstSection: 4, lastSection: 8 }
        ),
      ],
      expected: 0,
    },
  ])(
    `should return the priority $expected of the item type shared between two rucksack compartments`,
    ({ input, expected }) => {
      expect(CampCleanupOrganiser.calculateTotalSectionDuplication(input)).toBe(
        expected
      );
    }
  );
});
