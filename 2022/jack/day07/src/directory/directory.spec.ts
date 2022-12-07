import Directory from './directory';
import NullDirectory from './null-directory';

describe('cd', () => {
  it('should move in one level to a specified directory', () => {
    const directory = new Directory('/', new NullDirectory());
    directory.addChildDirectory('x');

    const childDir = directory.cd('x');

    expect(childDir.getName()).toBe('x');
  });

  it('should create a new child directory if specified directory does not exist', () => {
    const directory = new Directory('/', new NullDirectory());

    const childDir = directory.cd('x');

    expect(childDir.getName()).toBe('x');
  });

  it('should move out one level', () => {
    const directory = new Directory('/', new NullDirectory());
    const childDir = directory.addChildDirectory('x');

    const parent = childDir.cd('..');

    expect(parent).toBe(directory);
  });

  it('should error when trying to cd into the parent of the root directory', () => {
    const directory = new Directory('/', new NullDirectory());

    const error = () => directory.cd('..');

    expect(error).toThrow('directory has no parent');
  });

  it('should get source directory from source', () => {
    const directory = new Directory('/', new NullDirectory());

    const root = directory.cd('/');

    expect(root).toBe(directory);
  });

  it('should get source directory from child', () => {
    const directory = new Directory('/', new NullDirectory());
    const child = directory.addChildDirectory('a');

    const root = child.cd('/');

    expect(root).toBe(directory);
  });

  it('should get source directory from nest sub-child', () => {
    const directory = new Directory('/', new NullDirectory());
    const child = directory.addChildDirectory('a');
    const subChild = child.addChildDirectory('b');
    const subsubChild = subChild.addChildDirectory('c');

    const root = subsubChild.cd('/');

    expect(root).toBe(directory);
  });
});
