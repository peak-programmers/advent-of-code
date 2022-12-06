import SignalProcessor from './signal-processor';

describe('SignalProcessor()', () => {
  it.each([
    { packet: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', expected: 7 },
    { packet: 'bvwbjplbgvbhsrlpgdmjqwftvncz', expected: 5 },
    { packet: 'nppdvjthqldpwncqszvftbrmjlhg', expected: 6 },
    { packet: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', expected: 10 },
    { packet: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', expected: 11 },
  ])(
    'should index $expected of the first time a marker appears in packet $packet',
    ({ packet, expected }) => {
      expect(SignalProcessor.findFirstPacketMarkerIndex(packet)).toBe(expected);
    }
  );
});
