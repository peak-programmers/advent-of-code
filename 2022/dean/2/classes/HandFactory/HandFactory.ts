import SimpleFactory from "@shared/SimpleFactory";
import Hand from "../Hand";
import StrategyCode from "../StrategyCode";

export default class HandFactory implements SimpleFactory {

    create(code: StrategyCode) {
        switch (code.symbol) {
            case 'A':
            case 'X':
                return new Hand('rock');
            case 'B':
            case 'Y':
                return new Hand('paper');
            case 'C':
            case 'Z':
                return new Hand('scissors');
            default:
                throw Error(`Invalid input provided ${code.symbol}`);
        }
    }
}