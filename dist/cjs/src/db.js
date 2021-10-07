"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class DB {
    constructor(file) {
        if (!fs_1.default.existsSync(`db`)) {
            fs_1.default.mkdirSync('db');
        }
        const split = file.split('/');
        if (split.length > 1) {
            split.map((dir, ind) => {
                if (dir.indexOf('.json') === -1) {
                    if (ind > 0) {
                        const prev = split.map((d, i) => (i < ind ? d : '')).join('/');
                        if (!fs_1.default.existsSync(`db/${prev}/${dir}`)) {
                            fs_1.default.mkdirSync(`db/${prev}/${dir}`);
                        }
                    }
                    else {
                        if (!fs_1.default.existsSync(`db/${dir}`)) {
                            fs_1.default.mkdirSync(`db/${dir}`);
                        }
                    }
                }
            });
        }
        this.file = path_1.default.resolve(`db`, file);
        this.tempfile = path_1.default.resolve(`db`, path_1.default.join(path_1.default.dirname(file), `.${path_1.default.basename(file)}.tmp`));
    }
    read() {
        try {
            const res = fs_1.default.readFileSync(this.file, 'utf-8');
            return JSON.parse(res);
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
    }
    write(data) {
        fs_1.default.writeFileSync(this.tempfile, JSON.stringify(data), 'utf-8');
        fs_1.default.renameSync(this.tempfile, this.file);
    }
}
exports.DB = DB;
