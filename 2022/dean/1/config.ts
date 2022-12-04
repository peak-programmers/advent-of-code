import { GroupLinesStringParser } from "@shared/StringParser";
import { Utf8Reader } from "@shared/TextReader";
import { ElfFactory } from "./classes/ElfFactory";

const config = {
  part1: {
    reader: new Utf8Reader(),
    parser: new GroupLinesStringParser(),
    factory: new ElfFactory(),
  },
  part2: {
    reader: new Utf8Reader(),
    parser: new GroupLinesStringParser(),
    factory: new ElfFactory(),
  }
};

export default config;
