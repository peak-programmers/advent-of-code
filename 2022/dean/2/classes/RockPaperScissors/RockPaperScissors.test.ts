import Hand from '../Hand';
import RockPaperScissors from './RockPaperScissors';

test('can correctly score a winning game of rock paper scissors', () => {
    const player = new Hand('rock');
    const opponent = new Hand('scissors');
    const game = new RockPaperScissors(player, opponent);
    expect(game.score).toBe(7);
});

test('can correctly score a drawn game of rock paper scissors', () => {
    const player = new Hand('paper');
    const opponent = new Hand('paper');
    const game = new RockPaperScissors(player, opponent);
    expect(game.score).toBe(5);
});

test('can correctly score a lost game of rock paper scissors', () => {
    const player = new Hand('scissors');
    const opponent = new Hand('rock');
    const game = new RockPaperScissors(player, opponent);
    expect(game.score).toBe(3);
});