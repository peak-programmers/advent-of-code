export interface DeviceFileObjectData {
  name: string,
  size?: number,
}

export default class DeviceFileObject {
  
  #parent: DeviceFileObject|null = null;

  _name: string;
  _size: number;

  constructor({ name, size = 0}: DeviceFileObjectData) {
    this._name = name;
    this._size = size;
  }

  get name() {
    return this._name;
  }

  get size() {
    return this._size;
  }
}