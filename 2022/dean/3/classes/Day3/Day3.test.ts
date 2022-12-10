import Day3 from './Day3';

test('example 1 of part 1 evaluates correctly', () => {
  const day3 = new Day3('2022/3/examples/1.txt');
  expect(day3.part1).toBe(157);
});

test('example 1 of part 2 evaluates correctly', () => {
  const day3 = new Day3('2022/3/examples/1.txt');
  expect(day3.part2).toBe(70);
});