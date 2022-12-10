import DayConfig from "@shared/DayConfig";
import { Utf8Reader } from "@shared/TextReader";
import { SplitStringParser } from "@shared/StringParser";
import { RangeParser } from "./classes/RangeParser";
import { RangeFactory } from "./classes/RangeFactory";
import { RangePairFactory } from "./classes/RangePairFactory";


const config: DayConfig = {
  part1: {
    reader: new Utf8Reader(),
    parsers: [new SplitStringParser('\n'), new RangeParser()],
    factories: [new RangePairFactory(), new RangeFactory()]
  },
  part2: {
    reader: new Utf8Reader(),
    parsers: [new SplitStringParser('\n'), new RangeParser()],
    factories: [new RangePairFactory(), new RangeFactory()]
  }
};

export default config;
