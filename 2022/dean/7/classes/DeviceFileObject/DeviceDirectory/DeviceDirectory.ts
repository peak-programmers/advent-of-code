import DeviceFileObject from "../DeviceFileObject.abstract";

interface DeviceDirectoryData {
  name: string,
}

export default class DeviceDirectory extends DeviceFileObject {

  #children: DeviceFileObject[] = [];

  constructor({ name }: DeviceDirectoryData) {
    super({ name });
  }

  get size() {
    return this.#children.reduce((acc, file) => acc + file.size, 0);
  }

  get files() {
    return this.#children;
  }

  get directories() {
    return this.#children.filter((file) => file instanceof DeviceDirectory);
  }

  attach(file: DeviceFileObject) {
    this.#children.push(file);
  }
}