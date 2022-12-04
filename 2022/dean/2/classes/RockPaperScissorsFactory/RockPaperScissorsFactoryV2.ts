import SimpleFactory from "@shared/SimpleFactory";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";
import { HandFactory } from "../HandFactory";

export default class RockPaperScissorsFactoryV2 implements SimpleFactory {

    #handFactory: HandFactory = new HandFactory();

    create(gameCode: string) {
        const [opponentCode, resultCode] = gameCode.split(' ');
        const opponent = this.#handFactory.create(opponentCode);
        let player;
        switch (resultCode) {
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
                throw Error(`Invalid result code: ${resultCode}`);
        }
        return new RockPaperScissors(player, opponent);
    }
}
