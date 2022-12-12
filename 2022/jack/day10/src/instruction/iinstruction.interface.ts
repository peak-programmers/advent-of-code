import { InstructionOutput } from '../types';

interface IInstruction {
  execute(
    aggregateOutput: InstructionOutput,
    cycleInterval: number
  ): InstructionOutput;
}

export default IInstruction;
