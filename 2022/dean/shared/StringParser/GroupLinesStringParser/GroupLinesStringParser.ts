import StringParser from "../StringParser.interface";

export default class GroupLinesStringParser implements StringParser {

    parse(input: string) {
        const groups = input.split('\n\n');
        return groups.map((group) => group.split('\n'));
    }
}