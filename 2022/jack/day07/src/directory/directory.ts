import CdArgFactory from '../command/cd-args/cd-arg-factory';
import IDirectory from './idirectory.interface';
import NullDirectory from './null-directory';

type File = {
  name: string;
  size: number;
};

export default class Directory implements IDirectory {
  private readonly name: string;
  private readonly parentDirectory: IDirectory;
  private readonly childDirectories: Directory[] = [];
  private readonly childFiles: File[] = [];

  constructor(name: string, parentDirectory: IDirectory) {
    this.name = name;
    this.parentDirectory = parentDirectory;
  }

  public getChildDirectories(): Directory[] {
    return this.childDirectories;
  }

  public getName(): string {
    return this.name;
  }

  public getParent(): IDirectory {
    if (this.parentDirectory.getName() === '') {
      throw new Error('directory has no parent');
    }

    return this.parentDirectory;
  }

  public addChildDirectory(targetDirName: string): Directory {
    const childDir = new Directory(targetDirName, this);
    this.childDirectories.push(childDir);

    return childDir;
  }

  public cd(rawCdArg: string): IDirectory {
    const cdArg = CdArgFactory.createCdArg(rawCdArg);
    return cdArg.execute(this);
  }
}
