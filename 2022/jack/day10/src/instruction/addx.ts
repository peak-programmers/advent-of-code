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
    cycleIntervals: number[]
  ): InstructionOutput {
    let signalStrength: undefined | number;
    if (
      currentCycle + 1 === cycleIntervals[0] ||
      currentCycle + 2 === cycleIntervals[0]
    ) {
      signalStrength = currentX * cycleIntervals[0];
    }

    return {
      X: currentX + this._x,
      cycle: currentCycle + 2,
      signalStrength,
    };
  }
}
