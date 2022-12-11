import { Direction, TailMoveDirection } from '../enum';
import { GridIndex, MotionData } from '../types';

export default class Motion {
  public readonly direction: Direction;
  public readonly distance: number;

  constructor(direction: Direction, distance: number) {
    this.direction = direction;
    this.distance = distance;
  }

  public execute(knots: GridIndex[]): MotionData {
    const headVisitedIndexes = this.calculateVisitedHeadIndexes(knots[0]);

    let currentKnotIndex = 1;
    const allKnotsVisitedIndexes = this.recursivelyChartKnots(
      [headVisitedIndexes],
      knots,
      currentKnotIndex
    );

    return {
      knotPositions: allKnotsVisitedIndexes.map(
        (visitedPositions) => visitedPositions[visitedPositions.length - 1]
      ),
      tailVisitedPositions:
        allKnotsVisitedIndexes[allKnotsVisitedIndexes.length - 1],
    };
  }

  private calculateVisitedHeadIndexes(
    initialHeadIndex: GridIndex
  ): GridIndex[] {
    return Array.from(Array(this.distance + 1).keys()).map((i) => {
      return {
        [Direction.Up]: {
          row: initialHeadIndex.row + i,
          col: initialHeadIndex.col,
        },
        [Direction.Right]: {
          row: initialHeadIndex.row,
          col: initialHeadIndex.col + i,
        },
        [Direction.Down]: {
          row: initialHeadIndex.row - i,
          col: initialHeadIndex.col,
        },
        [Direction.Left]: {
          row: initialHeadIndex.row,
          col: initialHeadIndex.col - i,
        },
      }[this.direction];
    });
  }

  private recursivelyChartKnots(
    allKnotsVisitedIndexes: GridIndex[][],
    knots: GridIndex[],
    currentKnotIndex: number
  ) {
    allKnotsVisitedIndexes.push(
      this.addNextKnotVisitedIndexes(
        allKnotsVisitedIndexes,
        knots,
        currentKnotIndex
      )
    );

    if (allKnotsVisitedIndexes.length < knots.length)
      this.recursivelyChartKnots(
        allKnotsVisitedIndexes,
        knots,
        currentKnotIndex + 1
      );

    return allKnotsVisitedIndexes;
  }

  private addNextKnotVisitedIndexes(
    allKnotsVisitedIndexes: GridIndex[][],
    knots: GridIndex[],
    currentKnotIndex: number
  ) {
    const prevKnotPositions =
      allKnotsVisitedIndexes[allKnotsVisitedIndexes.length - 1];
    return this.calculateNextKnotVisitedIndexes(
      knots,
      currentKnotIndex,
      prevKnotPositions
    );
  }

  private calculateNextKnotVisitedIndexes(
    knots: GridIndex[],
    currentKnotIndex: number,
    prevKnotPositions: GridIndex[]
  ): GridIndex[] {
    let currentKnot = {
      ...knots[currentKnotIndex],
    };
    return prevKnotPositions.map((prevKnot) => {
      currentKnot = this.calculateVisitedIndex(prevKnot, currentKnot);
      return this.calculateVisitedIndex(prevKnot, currentKnot);
    });
  }

  private calculateVisitedIndex(prevKnot: GridIndex, currentKnot: GridIndex) {
    const tailMoveDirection = this.calculateTailMoveDirection(
      prevKnot,
      currentKnot
    );
    return this.calculateNextTailPosition(tailMoveDirection, currentKnot);
  }

  private calculateTailMoveDirection(
    headIndex: GridIndex,
    currentTailIndex: GridIndex
  ): TailMoveDirection {
    const rowColDiffKey = `${headIndex.row - currentTailIndex.row},${
      headIndex.col - currentTailIndex.col
    }`;

    return (
      {
        ['1,-2']: TailMoveDirection.UpLeft,
        ['2,-2']: TailMoveDirection.UpLeft,
        ['2,-1']: TailMoveDirection.UpLeft,
        ['2,0']: TailMoveDirection.Up,
        ['2,1']: TailMoveDirection.UpRight,
        ['2,2']: TailMoveDirection.UpRight,
        ['1,2']: TailMoveDirection.UpRight,
        ['0,2']: TailMoveDirection.Right,
        ['-1,2']: TailMoveDirection.DownRight,
        ['-2,2']: TailMoveDirection.DownRight,
        ['-2,1']: TailMoveDirection.DownRight,
        ['-2,0']: TailMoveDirection.Down,
        ['-2,-1']: TailMoveDirection.DownLeft,
        ['-2,-2']: TailMoveDirection.UpLeft,
        ['-1,-2']: TailMoveDirection.DownLeft,
        ['0,-2']: TailMoveDirection.Left,
      }[rowColDiffKey] ?? TailMoveDirection.None
    );
  }

  private calculateNextTailPosition(
    tailMoveDirection: TailMoveDirection,
    currentTailPosition: GridIndex
  ): GridIndex {
    return {
      [TailMoveDirection.None]: currentTailPosition,
      [TailMoveDirection.UpLeft]: {
        row: currentTailPosition.row + 1,
        col: currentTailPosition.col - 1,
      },
      [TailMoveDirection.Up]: {
        row: currentTailPosition.row + 1,
        col: currentTailPosition.col,
      },
      [TailMoveDirection.UpRight]: {
        row: currentTailPosition.row + 1,
        col: currentTailPosition.col + 1,
      },
      [TailMoveDirection.Right]: {
        row: currentTailPosition.row,
        col: currentTailPosition.col + 1,
      },
      [TailMoveDirection.DownRight]: {
        row: currentTailPosition.row - 1,
        col: currentTailPosition.col + 1,
      },
      [TailMoveDirection.Down]: {
        row: currentTailPosition.row - 1,
        col: currentTailPosition.col,
      },
      [TailMoveDirection.DownLeft]: {
        row: currentTailPosition.row - 1,
        col: currentTailPosition.col - 1,
      },
      [TailMoveDirection.Left]: {
        row: currentTailPosition.row,
        col: currentTailPosition.col - 1,
      },
    }[tailMoveDirection];
  }
}
