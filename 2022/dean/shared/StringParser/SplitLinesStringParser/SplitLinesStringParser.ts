import StringParser from "@shared/StringParser";


export default class SplitLinesStringParser implements StringParser {

  parse(input: string) {
    return input.split('\n');
  }
}