import Day6 from '../Day6';

test('example 1 part 1 is correct', () => {
  const day6 = new Day6('2022/6/examples/1.txt');
  expect(day6.part1).toBe(7);
});

test('example 2 part 1 is correct', () => {
  const day6 = new Day6('2022/6/examples/2.txt');
  expect(day6.part1).toBe(5);
});

test('example 3 part 1 is correct', () => {
  const day6 = new Day6('2022/6/examples/3.txt');
  expect(day6.part1).toBe(6);
});

test('example 4 part 1 is correct', () => {
  const day6 = new Day6('2022/6/examples/4.txt');
  expect(day6.part1).toBe(10);
});

test('example 5 part 1 is correct', () => {
  const day6 = new Day6('2022/6/examples/5.txt');
  expect(day6.part1).toBe(11);
});

test('part 1 is correct', () => {
  const day6 = new Day6('2022/6/input.txt');
  expect(day6.part1).toBe(1876);
});

test('example 1 part 2 is correct', () => {
  const day6 = new Day6('2022/6/examples/1.txt');
  expect(day6.part2).toBe(19);
});

test('example 2 part 2 is correct', () => {
  const day6 = new Day6('2022/6/examples/2.txt');
  expect(day6.part2).toBe(23);
});

test('example 3 part 2 is correct', () => {
  const day6 = new Day6('2022/6/examples/3.txt');
  expect(day6.part2).toBe(23);
});

test('example 4 part 2 is correct', () => {
  const day6 = new Day6('2022/6/examples/4.txt');
  expect(day6.part2).toBe(29);
});

test('example 5 part 2 is correct', () => {
  const day6 = new Day6('2022/6/examples/5.txt');
  expect(day6.part2).toBe(26);
});

test('part 2 is correct', () => {
  const day6 = new Day6('2022/6/input.txt');
  expect(day6.part2).toBe(2202);
});