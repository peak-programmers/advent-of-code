import Tree from "../Tree";

export default class TreeGrid {

  #trees: Tree[][];

  constructor(trees: Tree[][]) {
    this.#trees = trees;
  }

  get #height() {
    return this.#trees.length;
  }

  get #width() {
    return this.#trees[0].length;
  }

  get visibleCount() {
    this.#determineAllVisibilities();
    const count = this.#all.reduce((acc, tree) => (tree.isVisible) ? acc + 1 : acc, 0);
    return count;
  }

  get highestScenicScore() {
    this.#determineAllScenicScores();
    const highest = this.#all.reduce((max, tree) => (tree.scenicScore as number >= max) ? tree.scenicScore as number : max, 0);
    return highest;
  }

  get #all() {
    const all: Tree[] = [];
    this.#trees.forEach((row) => row.forEach((tree) => all.push(tree)));
    return all;
  }

  #determineAllVisibilities() {
    const rows = this.#rows();
    const columns = this.#columns();
    rows.forEach((row) => this.#updateLineVisibilities(row));
    columns.forEach((column) => this.#updateLineVisibilities(column));
    this.#all.forEach((tree) => (!tree.isVisible) ? tree.isVisible = false : null);
  }

  #determineAllScenicScores() {
    const rows = this.#rows();
    rows.forEach((row, i) => row.forEach((tree, j) => this.#determineScenicScore(i, j)));
  }

  #determineScenicScore(i: number, j: number) {
    const tree = this.#trees[i][j];
    const row = this.#row(i);
    const column = this.#column(j);
    const args: [Tree[], number, number][] = [[row, j, 1], [row, j, -1], [column, i, 1], [column, i, -1]];
    const distances = args.map((params) => this.#viewingDistance(...params));
    const score = distances.reduce((acc, distance) => acc * distance, 1);
    tree.scenicScore = score;
  }

  #viewingDistance(line: Tree[], startIndex: number, step: number) {
    if (startIndex === 0 && step === -1 || startIndex === line.length - 1 && step === 1) {
      return 0;
    }
    const tree = line[startIndex];
    let count = 1;
    let i = startIndex + step;
    while (!(i === 0 || i === line.length - 1)  && line[i].height < tree.height) {
      count += 1;
      i += step;
    }
    return count;
  }

  #rows() {
    const rows = [];
    for (let i = 0; i < this.#height; i += 1) {
      rows.push(this.#row(i))
    }
    return rows;
  }

  #columns() {
    const columns = [];
    for (let j = 0; j < this.#width; j += 1) {
      columns.push(this.#column(j));
    }
    return columns;
  }

  #row(i: number) {
    return this.#trees[i];
  }

  #column(j: number) {
    const column: Tree[] = [];
    for (let index = 0; index < this.#height; index += 1) {
      column.push(this.#trees[index][j]);
    }
    return column;
  }

  #updateLineVisibilities(trees: Tree[]) {
    const visibilityReducer = (line: Tree[], tree: Tree, index: number) => {
      if (index === 0 || line.every((prevTree) => tree.height > prevTree.height)) {
        tree.isVisible = true;
      }
      line.push(tree);
      return line;
    }
    trees.reduce(visibilityReducer, []);
    trees.reduceRight(visibilityReducer, []);
  }
}