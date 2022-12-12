import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Addx implements IInstruction {
  _x: number;

  constructor(x: number) {
    this._x = x;
  }

  public execute(aggregateOutput: InstructionOutput): InstructionOutput {
    return {
      X: aggregateOutput.X + this._x,
      cycle: aggregateOutput.cycle + 2,
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
    return cycle + 1 === interval || cycle + 2 === interval;
  }
}
