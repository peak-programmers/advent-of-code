import RpsStrategyGuide from './rps-strategy-guide';

describe('RpsStrategyGuide()', () => {
  it.each([
    { input: 'A X', result: 4 },
    { input: 'A Y', result: 8 },
  ])('should return the score $result for game $input', ({ input, result }) => {
    expect(RpsStrategyGuide.calculateScore(input)).toBe(result);
  });
});
