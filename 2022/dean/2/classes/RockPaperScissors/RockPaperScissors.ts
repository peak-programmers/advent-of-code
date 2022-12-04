import Hand from "../Hand";

export default class RockPaperScissors {

    #SHAPE_SCORES: { [shape: string] : number } = { rock: 1, paper: 2, scissors: 3 };
    #OUTCOME_SCORES: { [outcome: string] : number } = { win: 6, draw: 3, lose: 0 };

    #player: Hand;
    #opponent: Hand;

    constructor(player: Hand, opponent: Hand) {
        this.#player = player;
        this.#opponent = opponent;
    }

    get score() {
        return this.#shapeScore + this.#outcomeScore;
    }

    get #shapeScore() {
        return this.#SHAPE_SCORES[this.#player.shape];
    }

    get #outcomeScore() {
        return this.#OUTCOME_SCORES[this.#outcome];
    }

    get #outcome() {
        if (this.#isPlayerWinner) {
            return 'win';
        } else if (this.#isDraw) {
            return 'draw';
        } else {
            return 'lose';
        }
    }

    get #isPlayerWinner() {
        return this.#opponent.equals(this.#player.winsAgainst);
    }

    get #isDraw() {
        return this.#opponent.equals(this.#player.drawsAgainst);
    }
}