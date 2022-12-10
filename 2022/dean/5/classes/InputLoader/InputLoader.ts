import { readFileSync } from 'fs';
import Crate from '../Crate';
import Instruction from '../Instruction';
import Stack from '../Stack';
import SupplyStacks from '../SupplyStacks';

export default class InputLoader {

  load(path: string) {
    const input = readFileSync(path, 'utf-8');
    const [stacksString, procedureString] = input.split('\n\n');
    const stacks = this.#createStacks(stacksString);
    const procedure = this.#createProcedure(procedureString);
    return [stacks, procedure] as [SupplyStacks, Instruction[]];
  }

  #createStacks(input: string) {
    const lines = input.split('\n').slice(0, -1);
    const linesOfCrates = lines.map((line) => this.#createCrates(line));
    const stackCount = linesOfCrates[0].length;
    const stacks: Crate[][] = Array.from(Array(stackCount), () => []);
    linesOfCrates.forEach((line) => line.forEach((crate, index) => crate !== null && stacks[index].push(crate)));
    const supplyStacks = stacks.map((crates) => new Stack(crates.reverse()));
    return new SupplyStacks(supplyStacks);
  }
  
  #createProcedure(input: string) {
    const lines = input.split('\n');
    const instructions = lines.map((line) => this.#createInstruction(line));
    return instructions;
  }

  #createCrates(line: string) {
    const crateTypes = line.match(/\w| {4}/g);
    const crates = crateTypes!.map((type) => (type.trim() !== '') ? new Crate(type) : null);
    return crates;
  }

  #createInstruction(line: string) {
    const [amount, from, to] = line.matchAll(/\d+/g) as unknown as string[];
    return new Instruction({ amount: +amount, from: +from, to: +to })
  }
}