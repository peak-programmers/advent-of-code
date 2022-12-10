import DeviceFileObject, { DeviceFileObjectData } from '../DeviceFileObject.abstract';

export default class DeviceFile extends DeviceFileObject {

  constructor({ name, size }: DeviceFileObjectData) {
    super({ name, size });
  }

  get size() {
    return this._size;
  }
}