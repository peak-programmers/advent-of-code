export default class Tree {

  #height: number;
  #isVisible?: boolean = undefined; 
  #scenicScore?: number = undefined;

  constructor(height: number) {
    this.#height = height;
  }

  get height() {
    return this.#height;
  }

  get isVisible() {
    return this.#isVisible;
  }

  set isVisible(isVisible: boolean|undefined) {
    this.#isVisible = isVisible;
  }

  get scenicScore() {
    return this.#scenicScore;
  }

  set scenicScore(score: number|undefined) {
    this.#scenicScore = score;
  }
}