import * as fs from 'fs';
import Directory from './directory/directory';
import IDirectory from './directory/idirectory.interface';
import NullDirectory from './directory/null-directory';

export default class FileProcessor {
  public static processInput(inputPath: string): IDirectory {
    const rawCommands = fs.readFileSync(inputPath).toString().split('\n');
    const fileSystem = this.mapFileSystemFromCommands(rawCommands);
    console.log('hello', fileSystem);

    return fileSystem;
  }

  private static mapFileSystemFromCommands(rawCommands: string[]): IDirectory {
    let currentDir: IDirectory = new Directory('/', new NullDirectory());
    rawCommands.map((command) => {
      if (command.includes('$ cd')) {
        currentDir = currentDir.cd(command.split(' ')[2]);
      } else if (command.includes('$ ls')) {
      } else if (!command.includes('$')) {
        if (command.includes('dir')) {
          const directoryName = command.split(' ')[1];
          if (
            !currentDir
              .ls()
              .directories.find(
                (directory) => directory.getName() === directoryName
              )
          )
            currentDir.addChildDirectory(directoryName);
        } else {
          const [size, name] = command.split(' ');
          if (!currentDir.ls().files.find((file) => file.name === name))
            currentDir.addFile({ name, size: parseInt(size) });
        }
      }
    });

    return currentDir.cd('/');
  }
}
