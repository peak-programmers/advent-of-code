import { InstructionOutput } from '../types';

interface IInstruction {
  execute(
    currentX: number,
    currentCycle: number,
    cycleInterval: number
  ): InstructionOutput;
}

export default IInstruction;
