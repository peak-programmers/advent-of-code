import RpsStrategyGuide from './rps-strategy-guide';

describe('RpsStrategyGuide()', () => {
  it.each([
    { input: ['A X'], result: 4 },
    { input: ['A Y'], result: 8 },
    { input: ['A Z'], result: 3 },
    { input: ['B X'], result: 1 },
    { input: ['B Y'], result: 5 },
    { input: ['B Z'], result: 9 },
    { input: ['C X'], result: 7 },
    { input: ['C Y'], result: 2 },
    { input: ['C Z'], result: 6 },
  ])('should return the score $result for game $input', ({ input, result }) => {
    expect(RpsStrategyGuide.calculateTotalScore(input)).toBe(result);
  });

  it('should calculate the total score', () => {
    const input = ['A Y', 'B X', 'C Z'];
    expect(RpsStrategyGuide.calculateTotalScore(input)).toBe(15);
  });
});
