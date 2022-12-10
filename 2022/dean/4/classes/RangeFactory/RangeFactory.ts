import SimpleFactory from "@shared/SimpleFactory";
import Range from "../Range";

export default class RangeFactory implements SimpleFactory {

  create(input: string[]) {
    const [start, end] = input;
    return new Range(+start, +end);
  }
}