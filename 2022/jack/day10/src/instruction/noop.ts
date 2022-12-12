import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Noop implements IInstruction {
  public execute(
    aggregateOutput: InstructionOutput,
    cycleInterval: number
  ): InstructionOutput {
    return {
      X: aggregateOutput.X,
      cycle: aggregateOutput.cycle + 1,
      signalStrength: this.updateSignalStrengthIfInterval(
        aggregateOutput,
        cycleInterval
      ),
    };
  }

  private updateSignalStrengthIfInterval(
    aggregateOutput: InstructionOutput,
    interval: number
  ): number {
    return this.cycleCrossesInterval(aggregateOutput.cycle, interval)
      ? aggregateOutput.X * interval
      : aggregateOutput.signalStrength;
  }

  private cycleCrossesInterval(cycle: number, interval: number): boolean {
    return cycle + 1 === interval;
  }
}
