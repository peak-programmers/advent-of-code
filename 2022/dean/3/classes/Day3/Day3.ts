import InputLoader from "@shared/InputLoader";
import Day from "@shared/Day";
import Rucksack from "../Rucksack";
import config from '../../config';
import ElfGroup from "../ElfGroup";

export default class Day3 extends Day {

  constructor(path: string) {
    super(path);
  }

  override solvePart1() {
    const loader = new InputLoader(config.part1);
    const rucksacks: Rucksack[] = loader.load(this.inputPath);
    const sumDuplicatePriorities = rucksacks.reduce((acc, rucksack) => acc + rucksack.duplicate.priority, 0);
    return sumDuplicatePriorities;
  }

  override solvePart2() {
    const loader = new InputLoader(config.part2);
    const groups: ElfGroup[] = loader.load(this.inputPath);
    const sumBadgePriorities = groups.reduce((acc, group) => acc + group.badge.priority, 0);
    return sumBadgePriorities;
  }
}
