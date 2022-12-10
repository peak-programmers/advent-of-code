import Day7 from './Day7';

test('example 1 part 1 is correct', () => {
  const day7 = new Day7('2022/7/examples/1.txt');
  expect(day7.part1).toBe(95437);
});

test('example 1 part 2 is correct', () => {
  const day7 = new Day7('2022/7/examples/1.txt');
  expect(day7.part2).toBe(24933642);
});

test('part 1 is correct', () => {
  const day7 = new Day7('2022/7/input.txt');
  expect(day7.part1).toBe(1084134);
});

test('part 2 is correct', () => {
  const day7 = new Day7('2022/7/input.txt');
  expect(day7.part2).toBe(6183184);
});