import CalorieCounter from './calorie-counter';

describe('CalorieCounter()', () => {
  it('should count the total calories in the food items an elf is carrying', () => {
    const result = CalorieCounter.getTotalCalories([1000, 2000, 3000]);
    const expected = 6000;

    expect(result).toBe(expected);
  });
});
