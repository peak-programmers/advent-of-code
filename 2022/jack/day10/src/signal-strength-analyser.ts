import { IInstruction } from './instruction';
import { InstructionOutput } from './types';

export default class SignalStrengthAnalyser {
  static calculateSignalStrengthSum(
    instructions: IInstruction[],
    cycleIntervals: number[]
  ): number {
    let aggregateOutput: InstructionOutput = {
      X: 1,
      cycle: 0,
      signalStrength: 0,
    };

    instructions.forEach((instruction: IInstruction) => {
      const output = instruction.execute(aggregateOutput, cycleIntervals[0]);

      if (output.signalStrength !== aggregateOutput.signalStrength) {
        cycleIntervals.splice(0, 1);
      }

      aggregateOutput = { ...output };
    });

    return aggregateOutput.signalStrength;
  }
}
