import FileProcessor from './file-processor';
import Rucksack from './rucksack';

describe('FileProcessor()', () => {
  it('should convert a text file of lines into an array of number arrays', () => {
    const result: Rucksack[] = FileProcessor.processInputIntoRucksacks(
      'src/example-input.txt'
    );

    const expected = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw',
    ];

    result.map((rucksack, index) =>
      expect(rucksack.contents).toBe(expected[index])
    );
  });
});
