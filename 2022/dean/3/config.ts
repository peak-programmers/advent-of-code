import DayConfig from "@shared/DayConfig";
import { Utf8Reader } from "@shared/TextReader";
import { SplitStringParser, LineGrouperStringParser } from "@shared/StringParser";
import { RucksackFactory } from "./classes/RucksackFactory";
import { ItemFactory } from "./classes/ItemFactory";
import { ElfGroupFactory } from "./classes/ElfGroupFactory";


const config: DayConfig = {
  part1: {
    reader: new Utf8Reader(),
    parsers: [new SplitStringParser('\n'), new SplitStringParser('')],
    factories: [new RucksackFactory(), new ItemFactory()],
  },
  part2: {
    reader: new Utf8Reader(),
    parsers: [new LineGrouperStringParser(3), new SplitStringParser('\n'), new SplitStringParser('')],
    factories: [new ElfGroupFactory(), new RucksackFactory(), new ItemFactory()],
  }
};

export default config;
