type Index = {
  row: number;
  col: number;
};

enum Direction {
  Up = 'up',
  Right = 'right',
  Down = 'down',
  Left = 'left',
}

type Subsection = {
  direction: Direction;
  values: number[];
};

export default class TreePatchAnalyser {
  public static calculateMaxScenicScore(treePatch: number[][]): number {
    const scenicScoreMap = this.buildScenicScoreMap(treePatch);

    return scenicScoreMap.reduce((acc: number, scoreRow: number[]) => {
      return Math.max(acc, Math.max(...scoreRow));
    }, 0);
  }

  private static buildScenicScoreMap(treePatch: number[][]): number[][] {
    return treePatch.map((treeRow: number[], row: number) =>
      treeRow.map((tree: number, col: number) => {
        const subsections = this.getSubsections(treePatch, treeRow, {
          row,
          col,
        });

        return subsections.reduce(
          (acc: number, treeSubsection) =>
            acc * this.calculateViewingDistance(treeSubsection, tree),
          1
        );
      })
    );
  }

  private static calculateViewingDistance(
    treeSubsection: Subsection,
    tree: number
  ) {
    let values = treeSubsection.values;

    if (values.length === 0) return 0;

    if (
      treeSubsection.direction === Direction.Left ||
      treeSubsection.direction === Direction.Up
    ) {
      values = values.reverse();
    }

    const firstBlockingIndex = values.findIndex(
      (adjacentTree) => adjacentTree >= tree
    );
    return firstBlockingIndex === -1 ? values.length : firstBlockingIndex + 1;
  }

  public static visibleTreesCount(treePatch: number[][]): number {
    return this.countVisible(this.buildVisibiltyMap(treePatch));
  }

  private static buildVisibiltyMap(treePatch: number[][]): boolean[][] {
    return treePatch.map((treeRow: number[], row: number) =>
      treeRow.map((tree: number, col: number) =>
        this.visibleFromAnyDirection(treePatch, treeRow, tree, { col, row })
      )
    );
  }

  private static visibleFromAnyDirection(
    treePatch: number[][],
    treeRow: number[],
    tree: number,
    index: Index
  ): boolean {
    return this.getSubsections(treePatch, treeRow, index).reduce(
      (acc: boolean, treeSubsection: Subsection) =>
        acc ? acc : this.visibleFromDirection(treeSubsection.values, tree),
      false
    );
  }

  private static getSubsections(
    treePatch: number[][],
    treeRow: number[],
    index: Index
  ): Subsection[] {
    const left = this.getDirectionSubsection(treeRow, index, Direction.Left);
    const right = this.getDirectionSubsection(treeRow, index, Direction.Right);
    const treeCol = this.transposeRow(index.col, treePatch);
    const up = this.getDirectionSubsection(treeCol, index, Direction.Up);
    const down = this.getDirectionSubsection(treeCol, index, Direction.Down);

    return [up, right, down, left];
  }

  private static getDirectionSubsection(
    treeSubsection: number[],
    gridIndex: Index,
    direction: Direction
  ): Subsection {
    const directions = {
      [Direction.Up]: treeSubsection.filter(
        (_, index) => index < gridIndex.row
      ),
      [Direction.Right]: treeSubsection.filter(
        (_, index) => index > gridIndex.col
      ),
      [Direction.Down]: treeSubsection.filter(
        (_, index) => index > gridIndex.row
      ),
      [Direction.Left]: treeSubsection.filter(
        (_, index) => index < gridIndex.col
      ),
    };
    return { direction, values: directions[direction] };
  }

  private static visibleFromDirection(
    treeSubsection: number[],
    tree: number
  ): boolean {
    return treeSubsection.every((adjacentTree) => tree > adjacentTree);
  }

  private static transposeRow(
    rowIndex: number,
    treePatch: number[][]
  ): number[] {
    return treePatch[rowIndex].map(
      (_, colIndex) => treePatch[colIndex][rowIndex]
    );
  }

  private static countVisible(visibilityMap: boolean[][]): number {
    return visibilityMap.reduce(TreePatchAnalyser.countRowVisibleReducer, 0);
  }

  private static countRowVisibleReducer(
    acc: number,
    visibleTreeRow: boolean[]
  ) {
    return (
      acc + visibleTreeRow.reduce(TreePatchAnalyser.incrementIfTrueReducer, 0)
    );
  }

  private static incrementIfTrueReducer(acc: number, treeVisible: boolean) {
    return acc + (treeVisible ? 1 : 0);
  }
}
