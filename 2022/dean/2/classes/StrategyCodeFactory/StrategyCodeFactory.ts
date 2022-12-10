import SimpleFactory from "@shared/SimpleFactory";
import StrategyCode from "../StrategyCode";

export default class StrategyCodeFactory implements SimpleFactory {

  create(symbol: string) {
    return new StrategyCode(symbol);
  }
}