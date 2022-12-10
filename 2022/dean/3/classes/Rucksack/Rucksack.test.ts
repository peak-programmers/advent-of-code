import Rucksack from './Rucksack';
import Item from '../Item';

test('a rucksack is sorted into two compartments correctly', () => {
  const rucksack = new Rucksack();
  const items = [new Item('s'), new Item('T'), new Item('v'), new Item('x')];
  rucksack.add(items);
  expect(rucksack.compartments).toEqual([items.slice(0, 2), items.slice(2, 4)]);
});

test('can find duplicate item across both compartments', () => {
  const rucksack = new Rucksack();
  const items = [new Item('s'), new Item('T'), new Item('v'), new Item('s')];
  rucksack.add(items);
  expect(rucksack.duplicate.equals(new Item('s'))).toBeTruthy();
});