import CalorieCounter from './calorie-counter';

describe('CalorieCounter()', () => {
  it.each([
    { foodItems: [], expected: 0 },
    { foodItems: [1000, 2000, 3000], expected: 6000 },
    { foodItems: [4000], expected: 4000 },
  ])(
    'should return $expected as the total of the sum of the elements of $foodItems',
    ({ foodItems, expected }) => {
      expect(CalorieCounter.getTotalCalories(foodItems)).toBe(expected);
    }
  );
});
