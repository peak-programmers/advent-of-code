import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Noop implements IInstruction {
  public execute(
    currentX: number,
    currentCycle: number,
    cycleInterval: number
  ): InstructionOutput {
    return {
      X: currentX,
      cycle: currentCycle + 1,
      signalStrength: this.updateSignalStrengthIfInterval(
        currentX,
        currentCycle,
        cycleInterval
      ),
    };
  }

  private updateSignalStrengthIfInterval(
    x: number,
    cycle: number,
    interval: number
  ): undefined | number {
    if (cycle + 1 === interval) {
      return x * interval;
    }
  }
}
