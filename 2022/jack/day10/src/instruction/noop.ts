import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Noop implements IInstruction {
  public execute(aggregateOutput: InstructionOutput): InstructionOutput {
    return {
      X: aggregateOutput.X,
      cycle: aggregateOutput.cycle + 1,
      signalStrength:
        this.updateSignalStrengthAndIntervalsIfInterval(aggregateOutput),
      cycleIntervals: aggregateOutput.cycleIntervals,
    };
  }

  private updateSignalStrengthAndIntervalsIfInterval(
    aggregateOutput: InstructionOutput
  ): number {
    const { X, cycle, signalStrength, cycleIntervals } = aggregateOutput;
    const interval = cycleIntervals[0];

    if (this.cycleCrossesInterval(cycle, interval)) {
      cycleIntervals.splice(0, 1);
      return signalStrength + X * interval;
    }

    return signalStrength;
  }

  private cycleCrossesInterval(cycle: number, interval: number): boolean {
    return cycle + 1 === interval;
  }
}
