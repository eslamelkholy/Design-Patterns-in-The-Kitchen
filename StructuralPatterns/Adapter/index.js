import FsMemoryAdapter from './fs-adapter-memory.js';
import VirtualMemory from './virtualMemory.js';

const db = new VirtualMemory();
const fs = new FsMemoryAdapter(db);

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', { encoding: 'utf8' }, (err, res) => {
    if (err) {
      return console.error(err);
    }
    console.log(res);
  });
});

// try to read a missing file
fs.readFile('missing.txt', { encoding: 'utf8' }, (err, res) => {
  console.error(err);
});
