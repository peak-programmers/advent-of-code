import Instruction from "../../Instruction";
import SupplyStacks from "../../SupplyStacks";
import Crane from "../Crane.interface";

export default class CrateMover9000 implements Crane {

  #supplyStacks: SupplyStacks;

  constructor(supplyStacks: SupplyStacks) {
    this.#supplyStacks = supplyStacks;
  }

  lift(instruction: Instruction) {
    const { amount, from, to } = instruction;
    [...Array(amount)].forEach(() => {
      const crate = this.#supplyStacks.stack(from).pop();
      crate && this.#supplyStacks.stack(to).push(crate);
    });
  }
}