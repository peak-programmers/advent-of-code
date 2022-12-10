import SimpleFactory from "@shared/SimpleFactory";
import ElfGroup from "../ElfGroup";
import Rucksack from "../Rucksack";

export default class ElfGroupFactory implements SimpleFactory {

  create(rucksacks: Rucksack[]) {
    return new ElfGroup(rucksacks);
  }
}