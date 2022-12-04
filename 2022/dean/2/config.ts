import { Utf8Reader } from "@shared/TextReader";
import { SplitLinesStringParser } from "@shared/StringParser";
import { RockPaperScissorsFactory, RockPaperScissorsFactoryV2 } from "./classes/RockPaperScissorsFactory";

const config = {
  part1: {
    reader: new Utf8Reader(),
    parser: new SplitLinesStringParser(),
    factory: new RockPaperScissorsFactory(),
  },
  part2: {
    reader: new Utf8Reader(),
    parser: new SplitLinesStringParser(),
    factory: new RockPaperScissorsFactoryV2(),
  }
};

export default config;
