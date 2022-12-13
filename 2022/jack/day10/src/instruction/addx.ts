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
      screenDims: aggregateOutput.screenDims,
      crtOutput: [],
      ...this.updateSignalStrengthAndIntervalsIfInterval(aggregateOutput),
    };
  }

  private updateSignalStrengthAndIntervalsIfInterval(
    aggregateOutput: InstructionOutput
  ): Pick<InstructionOutput, 'cycleIntervals' | 'signalStrength'> {
    const { X, cycle, signalStrength, cycleIntervals } = aggregateOutput;
    const interval = cycleIntervals[0];

    return this.cycleCrossesInterval(cycle, interval)
      ? {
          signalStrength: signalStrength + X * interval,
          cycleIntervals: cycleIntervals.slice(1),
        }
      : {
          signalStrength,
          cycleIntervals,
        };
  }

  private cycleCrossesInterval(cycle: number, interval: number): boolean {
    return cycle + 1 === interval || cycle + 2 === interval;
  }
}
