import Day10 from './Day10';

test('example 1 part 1 is correct', () => {
  const day10 = new Day10('2022/10/examples/1.txt');
  expect(day10.part1).toBe(13140);
});

test('part 1 is correct', () => {
  const day10 = new Day10('2022/10/input.txt');
  expect(day10.part1).toBe(14360);
});

test('part 2 is correct', () => {
  const day10 = new Day10('2022/10/input.txt');
  expect(day10.part2).toBe('BGKAEREZ');
});