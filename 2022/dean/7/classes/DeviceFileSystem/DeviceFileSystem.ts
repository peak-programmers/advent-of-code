import Command from "../Command";
import DeviceFileObject, { DeviceFile, DeviceDirectory } from "../DeviceFileObject";

export default class DeviceFileSystem {

  #path: string = '/'
  #database: {[path: string]: DeviceFileObject} = {'/': new DeviceDirectory({ name: '' })};

  get database() {
    return this.#database;
  }
  
  get files() {
    return Object.values(this.#database);
  }

  get directories() {
    return Object.values(this.#database).filter((file) => file instanceof DeviceDirectory);
  }

  get currentPath() {
    return this.#path;
  }

  get currentDirectory() {
    return this.#database[this.#path] as DeviceDirectory;
  }

  execute(command: Command) {
    switch (command.type) {
      case 'ls':
        return;
      case 'cd':
        this.changeDirectory(command.argument as string);
    }
  }

  new(file: DeviceFileObject) {
    this.#insertAtPath(file);
    this.#addToDatabase(file);
  }

  changeDirectory(name: string) {
    if (name === '/') {
      return this.#path = '/';
    }
    if (name === '..') {
      return this.#path = this.#path.slice(0, -(this.currentDirectory.name.length + 1));
    }
    if (this.currentDirectory.directories.find((directory) => directory.name === name)) {
      return this.#path += `${name}/`;
    }
    throw Error(`The directory does not exist: ${this.#path}${name}/`);
  }

  #insertAtPath(file: DeviceFileObject) {
    this.currentDirectory.attach(file);
  }

  #addToDatabase(file: DeviceFileObject) {
    const pathEnd = file instanceof DeviceFile ? '' : '/'
    this.#database[`${this.#path}${file.name}${pathEnd}`] = file;
  }
}