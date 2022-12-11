import Day8 from ".";

test('example 1 part 1 is correct', () => {
  const day8 = new Day8('2022/8/examples/1.txt');
  expect(day8.part1).toBe(21);
});

test('part 1 is correct', () => {
  const day8 = new Day8('2022/8/input.txt');
  expect(day8.part1).toBe(1840);
});

test('example 1 part 2 is correct', () => {
  const day8 = new Day8('2022/8/examples/1.txt');
  expect(day8.part2).toBe(8);
});

test('part 2 is correct', () => {
  const day8 = new Day8('2022/8/input.txt');
  expect(day8.part2).toBe(405769);
});
