import fs from 'fs';
import path from 'path';

export class DB<T> {
  private file: string;
  private tempfile: string;
  constructor(file: string) {
    if (!fs.existsSync(`db`)) {
      fs.mkdirSync('db');
    }
    const split = file.split('/');
    if (split.length > 1) {
      split.map((dir, ind) => {
        if (dir.indexOf('.json') === -1) {
          if (ind > 0) {
            const prev = split.map((d, i) => (i < ind ? d : '')).join('/');
            if (!fs.existsSync(`db/${prev}/${dir}`)) {
              fs.mkdirSync(`db/${prev}/${dir}`);
            }
          } else {
            if (!fs.existsSync(`db/${dir}`)) {
              fs.mkdirSync(`db/${dir}`);
            }
          }
        }
      });
    }
    this.file = path.resolve(`db`, file);
    this.tempfile = path.resolve(`db`, path.join(path.dirname(file), `.${path.basename(file)}.tmp`));
  }
  read() {
    try {
      const res = fs.readFileSync(this.file, 'utf-8');
      return JSON.parse(res) as T;
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === 'ENOENT') {
        return null;
      }
      throw e;
    }
  }
  write(data: T) {
    fs.writeFileSync(this.tempfile, JSON.stringify(data), 'utf-8');
    fs.renameSync(this.tempfile, this.file);
  }
}
