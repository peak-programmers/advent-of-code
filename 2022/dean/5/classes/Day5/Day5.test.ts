import Day5 from "./Day5";

test('example 1 part 1 evaluates correctly', () => {
  const day5 = new Day5('2022/5/examples/1.txt');
  expect(day5.part1).toBe('CMZ');
});

test('example 1 part 2 evaluates to the correct answer', () => {
  const day5 = new Day5('2022/5/examples/1.txt');
  expect(day5.part2).toBe('MCD');
});

test('day5 part 1 evaluates to the correct answer', () => {
  const day5 = new Day5('2022/5/input.txt');
  expect(day5.part1).toBe('FWNSHLDNZ');
});

test('day5 part 2 evaluates to the correct answer', () => {
  const day5 = new Day5('2022/5/input.txt');
  expect(day5.part2).toBe('RNRGDNFQG');
});