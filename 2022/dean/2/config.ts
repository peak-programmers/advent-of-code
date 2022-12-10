import DayConfig from "@shared/DayConfig";
import { Utf8Reader } from "@shared/TextReader";
import { SplitStringParser } from "@shared/StringParser";
import { RockPaperScissorsFactory, RockPaperScissorsFactoryV2 } from "./classes/RockPaperScissorsFactory";
import { StrategyCodeFactory } from "./classes/StrategyCodeFactory";

const config: DayConfig = {
  part1: {
    reader: new Utf8Reader(),
    parsers: [new SplitStringParser('\n'), new SplitStringParser(' ')],
    factories: [new RockPaperScissorsFactory(), new StrategyCodeFactory()],
  },
  part2: {
    reader: new Utf8Reader(),
    parsers: [new SplitStringParser('\n'), new SplitStringParser(' ')],
    factories: [new RockPaperScissorsFactoryV2(), new StrategyCodeFactory()],
  }
};

export default config;
