import IDirectory from './idirectory.interface';

export default class NullDirectory implements IDirectory {
  public getChildDirectories(): NullDirectory[] {
    throw new Error('Null directory has no children');
  }

  getName(): string {
    return '';
  }

  getParent(): NullDirectory {
    throw new Error('Null directory has no parent');
  }

  addChildDirectory(targetDirName: string): NullDirectory {
    throw new Error('Null directory cannot have children');
  }
}
