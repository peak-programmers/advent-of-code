import StringParser from "../StringParser.interface";

export default class CharacterSplitStringParser implements StringParser {

  parse(input: string) {
    return input.split('');
  }
}