import SimpleFactory from "@shared/SimpleFactory";
import StrategyCode from "../StrategyCode";
import RockPaperScissors from "../RockPaperScissors";
import { HandFactory } from "../HandFactory";

export default class RockPaperScissorsFactory implements SimpleFactory {

    #handFactory: HandFactory = new HandFactory();

    create(codes: StrategyCode[]) {
        const [opponent, player] = codes.map((code) => this.#handFactory.create(code));
        return new RockPaperScissors(player, opponent);
    }
}