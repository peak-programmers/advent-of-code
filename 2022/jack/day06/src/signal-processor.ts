export default class SignalProcessor {
  public static findFirstPacketMarkerIndex(packet: string): number {
    const markerSequenceLength = 4;

    return (
      packet
        .split('')
        .map((char, index) => packet.slice(index, index + markerSequenceLength))
        .slice(0, -(markerSequenceLength + 1))
        .findIndex((potentialDistinct) =>
          this.allCharsDistinct(potentialDistinct)
        ) + markerSequenceLength
    );
  }

  private static allCharsDistinct(string: string): boolean {
    return string.split('').length === new Set(string).size;
  }
}
