import SimpleFactory from "@shared/SimpleFactory";
import Range from "../Range/Range";
import RangePair from "../RangePair";

export default class RangePairFactory implements SimpleFactory {

  create(ranges: Range[]) {
    return new RangePair(ranges);
  }
}