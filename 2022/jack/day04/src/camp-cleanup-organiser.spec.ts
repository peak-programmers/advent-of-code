import CampCleanupOrganiser from './camp-cleaner-organiser';

describe('CampCleanupOrganiser()', () => {
  it.each([
    {
      input: [
        {
          a: [2, 3, 4],
          b: [6, 7, 8],
        },
      ],
      expected: 0,
    },
    {
      input: [
        {
          a: [2, 3],
          b: [4, 5],
        },
      ],
      expected: 0,
    },
    {
      input: [
        {
          a: [5, 6, 7],
          b: [7, 8, 9],
        },
      ],
      expected: 0,
    },
    {
      input: [
        {
          a: [2, 3, 4, 5, 6, 7, 8],
          b: [3, 4, 5, 6, 7],
        },
      ],
      expected: 1,
    },
    {
      input: [
        {
          a: [6],
          b: [4, 5, 6],
        },
      ],
      expected: 1,
    },
    {
      input: [
        {
          a: [2, 3, 4, 5, 6],
          b: [4, 5, 6, 7, 8],
        },
      ],
      expected: 0,
    },
  ])(
    `should return the priority $expected of the item type shared between two rucksack compartments`,
    ({ input, expected }) => {
      expect(
        CampCleanupOrganiser.calculateTotalFullWorkDuplication(input)
      ).toBe(expected);
    }
  );
});
