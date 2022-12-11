import Motion from './motion/motion';
import { GridIndex } from './types';

export default class RopePhysicsModeller {
  public static calculateVisitedPositions(motions: Motion[]): number {
    const tailVisitedPositions: GridIndex[] = [];
    let headIndex: GridIndex = { row: 0, col: 0 };
    let tailIndex: GridIndex = { row: 0, col: 0 };

    motions.map((motion) => {
      const movementData = motion.execute(headIndex, tailIndex);
      headIndex = { ...movementData.headEndPosition };
      tailIndex = { ...movementData.tailEndPosition };
      tailVisitedPositions.push(...movementData.tailVisitedPositions);
    });

    return new Set(
      tailVisitedPositions.map(
        (gridIndex) => `${gridIndex.row},${gridIndex.col}`
      )
    ).size;
  }
}
