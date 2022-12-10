import StringParser from "@shared/StringParser/StringParser.interface";

export default class RangeParser implements StringParser {

  parse(ranges: string) {
    return ranges.split(',').map((range) => range.split('-'));
  }
}