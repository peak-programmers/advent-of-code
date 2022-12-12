import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Noop implements IInstruction {
  public execute(
    currentX: number,
    currentCycle: number,
    cycleIntervals: number[]
  ): InstructionOutput {
    let signalStrength: undefined | number;
    if (currentCycle + 1 === cycleIntervals[0]) {
      signalStrength = currentX * cycleIntervals[0];
    }

    return {
      X: currentX,
      cycle: currentCycle + 1,
      signalStrength,
    };
  }
}
