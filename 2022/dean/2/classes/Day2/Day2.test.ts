import Day2 from "./Day2";

test('example1 total score is correct', () => {
    const day2 = new Day2('2022/2/examples/1.txt');
    expect(day2.part1).toBe(15);
});