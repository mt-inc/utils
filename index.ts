import * as constants from './src/const';
import { Helper as Math } from './src/math';
import { TimeAgo as Time } from './src/timaAgo';
import { Cross } from './src/cross';
import { DB } from './src/db';
import { getFileLinesSync } from './src/file';

export { constants };
export { Math };
export { Time };
export { Cross };
export { DB };
export { getFileLinesSync };

export default {
  constants,
  Math,
  Time,
  Cross,
  DB,
  getFileLinesSync,
};
