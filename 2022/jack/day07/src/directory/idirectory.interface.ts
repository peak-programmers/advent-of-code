export default interface IDirectory {
  getChildDirectories(): IDirectory[];
  getName(): string;
  getParent(): IDirectory;
  addChildDirectory(targetDirName: string): IDirectory;
}
