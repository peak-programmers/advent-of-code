import Motion from './motion/motion';
import { GridIndex } from './types';

export default class RopePhysicsModeller {
  public static calculateVisitedPositions(
    motions: Motion[],
    knotCount: number = 2
  ): number {
    const tailVisitedPositions: GridIndex[] = [];
    let knots: GridIndex[] = [...new Array(knotCount)].map((value) => {
      return { row: 0, col: 0 };
    });

    motions.map((motion) => {
      const movementData = motion.execute(knots);
      knots = [...movementData.knotPositions];
      tailVisitedPositions.push(...movementData.tailVisitedPositions);
    });

    return new Set(
      tailVisitedPositions.map(
        (gridIndex) => `${gridIndex.row},${gridIndex.col}`
      )
    ).size;
  }
}
