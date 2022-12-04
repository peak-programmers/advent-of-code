import TextReader from "@shared/TextReader";
import StringParser from "@shared/StringParser";
import SimpleFactory from "@shared/SimpleFactory";


export interface InputLoaderConfig {
  reader: TextReader,
  parser: StringParser,
  factory: SimpleFactory,
}

export default class InputLoader {

  #reader: TextReader;
  #parser: StringParser;
  #factory: SimpleFactory;

  constructor({ reader, parser, factory }: InputLoaderConfig) {
    this.#reader = reader
    this.#parser = parser;
    this.#factory = factory;
  }

  load(path: string) {
    const input = this.#reader.read(path);
    const parsedInput = this.#parser.parse(input);
    return parsedInput.map((input) => this.#factory.create(input));
  }
}