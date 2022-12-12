import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Addx implements IInstruction {
  _x: number;

  constructor(x: number) {
    this._x = x;
  }

  public execute(
    currentX: number,
    currentCycle: number,
    nextCycleInterval: number
  ): InstructionOutput {
    return {
      X: currentX + this._x,
      cycle: currentCycle + 2,
      signalStrength: this.updateSignalStrengthIfInterval(
        currentX,
        currentCycle,
        nextCycleInterval
      ),
    };
  }

  private updateSignalStrengthIfInterval(
    x: number,
    cycle: number,
    interval: number
  ): undefined | number {
    if (cycle + 1 === interval || cycle + 2 === interval) {
      return x * interval;
    }
  }
}
