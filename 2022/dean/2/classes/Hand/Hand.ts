interface Outcomes {
    [shape: string]: {
        wins: string,
        draws: string,
        loses: string,
    }
}

export default class Hand {

    #outcomes: Outcomes = {
        rock: {
            wins: 'scissors',
            draws: 'rock',
            loses: 'paper',
        },
        paper: {
            wins: 'rock',
            draws: 'paper',
            loses: 'scissors',
        },
        scissors: {
            wins: 'paper',
            draws: 'scissors',
            loses: 'rock',
        }
    }

    #shape: string;

    constructor(shape: string) {
        this.#shape = shape;
    }

    get shape() {
        return this.#shape;
    }

    get winsAgainst() {
        return new Hand(this.#outcomes[this.#shape].wins);
    }

    get drawsAgainst() {
        return new Hand(this.#outcomes[this.#shape].draws);
    }

    get losesAgainst() {
        return new Hand(this.#outcomes[this.#shape].loses);
    }

    equals(hand: Hand) {
        return (this.#shape === hand.shape);
    }
}