import RockPaperScissorsFactory from './RockPaperScissorsFactory';
import RockPaperScissors from '../RockPaperScissors';
import Hand from '../Hand';

test('can create a game using an encrypted string', () => {
    const factory = new RockPaperScissorsFactory();
    const game = factory.create('A Y');
    expect(game).toEqual(new RockPaperScissors(new Hand('rock'), new Hand('paper')));
});