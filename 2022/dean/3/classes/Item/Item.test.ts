import Item from './Item';

test('can correctly evaluate the priority of an item', () => {
  const items = [new Item('t'), new Item('Y'), new Item('b')];
  const priorities = items.map((item) => item.priority);
  expect(priorities).toEqual([20, 51, 2]);
});