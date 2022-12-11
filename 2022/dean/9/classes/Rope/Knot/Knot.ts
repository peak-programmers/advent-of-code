import Vector from "../../Vector";

export default class Knot {

  #parent?: Knot;
  #x: number = 0;
  #y: number = 0;
  #visited: { x: number, y: number }[]  = [{ x: 0, y: 0 }];

  #MOTIONS: {[direction: string]: Vector} = {
    'up': new Vector(0, 1),
    'down': new Vector(0, -1),
    'left': new Vector(-1, 0),
    'right': new Vector(1, 0),
    'up-right': new Vector(1, 1),
    'up-left': new Vector(-1, 1),
    'down-right': new Vector(1, -1),
    'down-left': new Vector(-1, -1),
  }

  constructor(parent?: Knot) {
    this.#parent = parent;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get uniquePositionsCount() {
    const uniques = this.#visited.reduce((uniques: { x: number, y: number }[], curr) => {
      const duplicates = uniques.find((pos) => curr.x === pos.x && curr.y === pos.y);
      if (!duplicates) {
        uniques.push(curr);
      }
      return uniques;
    }, []);
    return uniques.length;
  }

  move(vector: Vector) {
    this.#x += vector.x;
    this.#y += vector.y;

    this.#visited.push({ x: this.#x, y: this.#y });
  }

  update() {
    if (!this.#parent || this.isTouching(this.#parent)) {
      return;
    }
    let direction;
    if (this.#parent.x === this.#x && this.#parent.y > this.#y) { direction = 'up'}
    else if (this.#parent.x === this.#x && this.#parent.y < this.#y) { direction = 'down'}
    else if (this.#parent.y === this.#y && this.#parent.x < this.#x) { direction = 'left'}
    else if (this.#parent.y === this.#y && this.#parent.x > this.#x) { direction = 'right'}
    else if (this.#parent.x > this.#x && this.#parent.y > this.#y) { direction = 'up-right'}
    else if (this.#parent.x < this.#x && this.#parent.y > this.#y) { direction = 'up-left'}
    else if (this.#parent.x > this.#x && this.#parent.y < this.#y) { direction = 'down-right'}
    else { direction = 'down-left'}
    this.move(this.#MOTIONS[direction]);
  }

  isTouching(knot: Knot) {
    const dx = this.#x - knot.x;
    const dy = this.#y - knot.y;
    return (Math.abs(dx) <= 1 && Math.abs(dy) <= 1);
  }
}