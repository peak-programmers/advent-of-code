import { IInstruction } from './instruction';
import { InstructionOutput } from './types';

export default class SignalStrengthAnalyser {
  static calculateSignalStrengthSum(
    instructions: IInstruction[],
    cycleIntervals: number[]
  ): any {
    let currentX = 1;
    let currentCycle = 0;
    let intervalSignalStrengths: number[] = [];

    instructions.forEach((instruction: IInstruction) => {
      const output = instruction.execute(
        currentX,
        currentCycle,
        cycleIntervals
      );
      (currentX = output.X), (currentCycle = output.cycle);

      if (output.signalStrength) {
        intervalSignalStrengths.push(output.signalStrength);
        cycleIntervals.splice(0, 1);
      }
    });

    return intervalSignalStrengths.reduce(
      (acc, signalStrength) => acc + signalStrength
    );
  }
}
