import SimpleFactory from "@shared/SimpleFactory";
import { HandFactory } from "../HandFactory";
import RockPaperScissors from "../RockPaperScissors";

export default class RockPaperScissorsFactory implements SimpleFactory {

    #handFactory: HandFactory = new HandFactory();

    create(gameCode: string) {
        const [opponentCode, playerCode] = gameCode.split(' ');
        const player = this.#handFactory.create(playerCode);
        const opponent = this.#handFactory.create(opponentCode);
        return new RockPaperScissors(player, opponent);
    }
}