export default class VirtualMemory {
  constructor() {
    this.data = new Map();
  }

  put(key, val, options, cb) {
    this.data[key] = val;
    cb();
  }

  get(filename, options, cb) {
    if (this.data[filename]) return cb(null, this.data[filename]);

    const err = new Error(`ENOENT, open "${filename}"`);
    err.code = 'ENOENT';
    err.errno = 34;
    err.path = filename;
    return cb(err);
  }
}
