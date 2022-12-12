import { InstructionOutput } from '../types';

interface IInstruction {
  execute(
    currentX: number,
    currentCycle: number,
    cycleIntervals: number[]
  ): InstructionOutput;
}

export default IInstruction;
