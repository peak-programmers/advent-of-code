import RopePhysicsModeller from './rope-physics-modeller';
import Motion from './motion/motion';
import { Direction } from './enum';

describe('RopePhysicsModeller', () => {
  it('should count the number of positions the tail visited at least once', () => {
    const motions: Motion[] = [
      new Motion(Direction.Right, 4),
      new Motion(Direction.Up, 4),
      new Motion(Direction.Left, 3),
      new Motion(Direction.Down, 1),
      new Motion(Direction.Right, 4),
      new Motion(Direction.Down, 1),
      new Motion(Direction.Left, 5),
      new Motion(Direction.Right, 2),
    ];

    expect(RopePhysicsModeller.calculateVisitedPositions(motions)).toBe(13);
  });
});
