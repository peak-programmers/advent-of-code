type GridIndex = {
  row: number;
  col: number;
};

export default class TreePatchAnalyser {
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
    gridIndex: GridIndex
  ): boolean {
    const visibleLeft = this.visibleFromDirection(
      treeRow,
      tree,
      (index) => index < gridIndex.col
    );
    const visibleRight = this.visibleFromDirection(
      treeRow,
      tree,
      (index) => index > gridIndex.col
    );

    const treeCol = this.transposeRow(gridIndex.col, treePatch);
    const visibleAbove = this.visibleFromDirection(
      treeCol,
      tree,
      (index) => index < gridIndex.row
    );
    const visibleBelow = this.visibleFromDirection(
      treeCol,
      tree,
      (index) => index > gridIndex.row
    );

    return visibleLeft || visibleRight || visibleAbove || visibleBelow;
  }

  private static visibleFromDirection(
    treeSubsection: number[],
    tree: number,
    treeSubsectionPredicate: (index: number) => boolean
  ): boolean {
    return treeSubsection
      .filter((_, index) => treeSubsectionPredicate(index))
      .every((adjacentTree) => tree > adjacentTree);
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
