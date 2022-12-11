import Day9 from './Day9';

test('example 1 part 1 is correct', () => {
  const day9 = new Day9('2022/9/examples/1.txt');
  expect(day9.part1).toBe(13);
});

test('part 1 is correct', () => {
  const day9 = new Day9('2022/9/input.txt');
  expect(day9.part1).toBe(6563);
});

test('example 1 part 2 is correct', () => {
  const day9 = new Day9('2022/9/examples/1.txt');
  expect(day9.part2).toBe(1);
});

test('example 2 part 2 is correct', () => {
  const day9 = new Day9('2022/9/examples/2.txt');
  expect(day9.part2).toBe(36);
});

test('part 2 is correct', () => {
  const day9 = new Day9('2022/9/input.txt');
  expect(day9.part2).toBe(2653);
});