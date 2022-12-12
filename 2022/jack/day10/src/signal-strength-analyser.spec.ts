import SignalStrengthAnalyser from './signal-strength-analyser';
import { IInstruction, Addx, Noop } from './instruction';
import FileProcessor from './file-processor';

describe('SignalStrengthAnalyser', () => {
  it('should return the aggregate signal strength after processing instructions', () => {
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

  it('should count the number of positions a single tail visited at least once', () => {
    const instructions: IInstruction[] =
      FileProcessor.processInputIntoInstructions('src/example-input.txt');

    const cycleIntervals = [20, 60, 100, 140, 180, 220];

    expect(
      SignalStrengthAnalyser.calculateSignalStrengthSum(
        instructions,
        cycleIntervals
      )
    ).toBe(13140);
  });
});
