import SupplyStacks from "../../SupplyStacks";
import Crane from "../Crane.interface";
import Instruction from "../../Instruction";

export default class CrateMover9001 implements Crane {

  #supplyStacks: SupplyStacks;

  constructor(supplyStacks: SupplyStacks) {
    this.#supplyStacks = supplyStacks;
  }

  lift(instruction: Instruction) {
    const { amount, from, to } = instruction;
    const crates = this.#supplyStacks.stack(from).removeMultiple(amount);
    this.#supplyStacks.stack(to).addMultiple(crates);
  }
}