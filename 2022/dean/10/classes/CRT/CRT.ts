import CPU from "../CPU";
import Observer from "../Observer";

export default class CRT implements Observer {

  #SCREEN_WIDTH = 40;
  #SCREEN_HEIGHT = 6;
  
  #buffer: string[][] = [];

  #cpu: CPU;

  constructor(cpu: CPU) {
    this.#cpu = cpu;
    this.#cpu.registerObserver(this);
    this.#initBuffer();
  }

  get pixel() {
    return this.#cpu.cycle - 1;
  }

  get spriteCentre() {
    return this.#cpu.registers.x;
  }

  render() {
    const picture = this.#buffer.reduce((picture, row) => `${picture}${row.join('')}\n`, '');
    console.log(picture);
  }

  update() {
    if (this.#isSpriteVisible()) {
      this.#lightPixel();
    }
  }

  #isSpriteVisible() {
    return Math.abs((this.pixel % this.#SCREEN_WIDTH) - this.spriteCentre) <= 1;
  }

  #lightPixel() {
    const row = Math.floor(this.pixel / this.#SCREEN_WIDTH);
    const column = this.pixel % this.#SCREEN_WIDTH;
    this.#buffer[row][column] = '#';
  }

  #initBuffer() {
    const buffer = [];
    for (let i = 0; i < this.#SCREEN_HEIGHT; i += 1) {
      const row = Array(this.#SCREEN_WIDTH).fill('.');
      buffer.push(row);
    }
    this.#buffer = buffer;
  }
}