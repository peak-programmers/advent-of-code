export default class Signal {

  #chars: string;

  constructor(chars: string) {
    this.#chars = chars;
  }

  get startOfPacketMarker() {
    let index = 4;
    for (let sample of this.#samples(4)) {
      if (this.#isMarker(sample)) {
        return index;
      }
      index += 1;
    }
    return null;
  }

  get startOfMessageMarker() {
    let index = 14;
    for (let sample of this.#samples(14)) {
      if (this.#isMarker(sample)) {
        return index;
      }
      index += 1;
    }
    return null;
  }

  #isMarker(sample: string) {
    const chars = sample.split('');
    return chars.every((char) => chars.indexOf(char) === chars.lastIndexOf(char));
  }

  * #samples(size: number) {
    let i = 0;
    while (true) {
      const slice = this.#chars.slice(i, i + size);
      if (slice.length < size) {
        return;
      }
      yield slice;
      i += 1;
    }
  }
}