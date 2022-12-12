import { IInstruction } from './instruction';
import { InstructionOutput } from './types';

export default class SignalStrengthAnalyser {
  static calculateSignalStrengthSum(
    instructions: IInstruction[],
    cycleIntervals: number[]
  ): number {
    const aggregateOutput: InstructionOutput = {
      X: 1,
      cycle: 0,
      signalStrength: 0,
      cycleIntervals,
    };

    return instructions.reduce(
      SignalStrengthAnalyser.instructionsReducer,
      aggregateOutput
    ).signalStrength;
  }

  private static instructionsReducer(
    acc: InstructionOutput,
    instruction: IInstruction
  ) {
    return instruction.execute(acc);
  }
}
