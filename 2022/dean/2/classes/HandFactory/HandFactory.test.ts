import Hand from "../Hand/Hand";
import HandFactory from "./HandFactory";

test('can create a "rock" hand', () => {
    const factory = new HandFactory();
    const hand = factory.create('X');
    expect(hand).toEqual(new Hand('rock'));
});

test('can create a "paper" hand', () => {
    const factory = new HandFactory();
    const hand = factory.create('B');
    expect(hand).toEqual(new Hand('paper'));
});

test('can create a "scissors" hand', () => {
    const factory = new HandFactory();
    const hand = factory.create('Z');
    expect(hand).toEqual(new Hand('scissors'));
});