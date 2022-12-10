import SimpleFactory from "@shared/SimpleFactory";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";
import StrategyCode from "../StrategyCode";
import { HandFactory } from "../HandFactory";

export default class RockPaperScissorsFactoryV2 implements SimpleFactory {

    #handFactory: HandFactory = new HandFactory();

    create(codes: StrategyCode[]) {
        const [opponentCode, resultCode] = codes;
        const opponent = this.#handFactory.create(opponentCode);
        let player;
        switch (resultCode.symbol) {
            case 'X': 
                player = opponent.winsAgainst;
                break;
            case 'Y':
                player = opponent.drawsAgainst;
                break;
            case 'Z':
                player = opponent.losesAgainst;
                break;
            default: 
                throw Error(`Invalid result code: ${resultCode.symbol}`);
        }
        return new RockPaperScissors(player, opponent);
    }
}
