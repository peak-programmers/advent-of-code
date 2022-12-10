import DeviceFileSystem from './DeviceFileSystem';
import { DeviceFile, DeviceDirectory } from '../DeviceFileObject';

test('can create a new file', () => {
  const dfs = new DeviceFileSystem();
  const file = new DeviceFile({name: 'a.txt', size: 20});
  dfs.new(file);
  expect(dfs.database['/a.txt']).toBe(file);
});

test('can create a new directory', () => {
  const dfs = new DeviceFileSystem();
  const directory = new DeviceDirectory({ name: 'hi' });
  dfs.new(directory);
  expect(dfs.database['/hi/']).toBe(directory);
});

test('can change directories', () => {
  const dfs = new DeviceFileSystem();
  const directory = new DeviceDirectory({ name: 'test' });
  dfs.new(directory);
  dfs.changeDirectory('test');
  expect(dfs.currentDirectory).toEqual(directory);
});

test('can go up a directory', () => {
  const dfs = new DeviceFileSystem();
  const directory = new DeviceDirectory({ name: 'hello' });
  dfs.new(directory);
  dfs.changeDirectory('hello');
  dfs.changeDirectory('..');
  expect(dfs.currentPath).toBe('/');
});

test('can go back to root', () => {
  const dfs = new DeviceFileSystem();
  const directory1 = new DeviceDirectory({ name: 'new' });
  const directory2 = new DeviceDirectory({ name: 'second' });
  dfs.new(directory1);
  dfs.changeDirectory('new');
  dfs.new(directory2);
  dfs.changeDirectory('second');
  dfs.changeDirectory('/');
  expect(dfs.currentPath).toBe('/');
});