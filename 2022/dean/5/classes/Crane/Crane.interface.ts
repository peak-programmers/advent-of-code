import Instruction from "../Instruction";

export default interface Crane {

  lift: (instruction: Instruction) => void;
}