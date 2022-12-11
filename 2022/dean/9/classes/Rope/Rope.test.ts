import Rope from './Rope';
import Vector from '../Vector';

test('can pull the head of the rope', () => {
  const rope = new Rope(2);
  rope.pull(new Vector(3, 2));
  expect(rope.head.x).toBe(3);
  expect(rope.head.y).toBe(2);
});

test('can correctly determine when the head is touching the tail', () => {
  const rope = new Rope(2);
  rope.head.move(new Vector(2, 2));
  expect(rope.head.isTouching(rope.tail)).toBeFalsy();
  rope.head.move(new Vector(-1, -1));
  expect(rope.head.isTouching(rope.tail)).toBeTruthy();
});

test('the tail moves in the correct direction if no longer touching the head', () => {
  const rope = new Rope(2);
  rope.pull(new Vector(1, 0));
  expect(rope.tail.x).toBe(0);
  expect(rope.tail.y).toBe(0);
  rope.pull(new Vector(0, 1));
  expect(rope.tail.x).toBe(0);
  expect(rope.tail.y).toBe(0);
  rope.pull(new Vector(1, 0));
  expect(rope.tail.x).toBe(1);
  expect(rope.tail.y).toBe(1);
});