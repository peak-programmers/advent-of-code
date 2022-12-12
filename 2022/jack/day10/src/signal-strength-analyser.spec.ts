import SignalStrengthAnalyser from './signal-strength-analyser';
import { IInstruction, Addx, Noop } from './instruction';

describe('SignalStrengthAnalyser', () => {
  it('should count the number of positions a single tail visited at least once', () => {
    const instructions: IInstruction[] = [
      new Addx(15),
      new Addx(-11),
      new Addx(6),
      new Addx(-3),
      new Addx(5),
      new Addx(-1),
      new Addx(-8),
      new Addx(13),
      new Addx(4),
      new Noop(),
      new Addx(-1),
      new Addx(5),
      new Addx(-1),
      new Addx(5),
      new Addx(-1),
      new Addx(5),
      new Addx(-1),
      new Addx(5),
      new Addx(-1),
      new Addx(-35),
    ];

    const cycleIntervals = [20];

    expect(
      SignalStrengthAnalyser.calculateSignalStrengthSum(
        instructions,
        cycleIntervals
      )
    ).toBe(420);
  });
});
