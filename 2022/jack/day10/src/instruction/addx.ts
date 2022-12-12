import { InstructionOutput } from '../types';
import IInstruction from './iinstruction.interface';

export default class Addx implements IInstruction {
  _x: number;

  constructor(x: number) {
    this._x = x;
  }

  public execute(
    aggregateOutput: InstructionOutput,
    nextCycleInterval: number
  ): InstructionOutput {
    return {
      X: aggregateOutput.X + this._x,
      cycle: aggregateOutput.cycle + 2,
      signalStrength: this.updateSignalStrengthIfInterval(
        aggregateOutput,
        nextCycleInterval
      ),
    };
  }

  private updateSignalStrengthIfInterval(
    aggregateOutput: InstructionOutput,
    interval: number
  ): number {
    return this.cycleCrossesInterval(aggregateOutput.cycle, interval)
      ? aggregateOutput.signalStrength + aggregateOutput.X * interval
      : aggregateOutput.signalStrength;
  }

  private cycleCrossesInterval(cycle: number, interval: number): boolean {
    return cycle + 1 === interval || cycle + 2 === interval;
  }
}
