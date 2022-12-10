import Range from './Range';

test('can determine if one range fully contains another', () => {
  const rangeA = new Range(3, 6);
  const rangeB = new Range(4, 4);
  expect(rangeA.fullyContains(rangeB)).toBeTruthy();
});