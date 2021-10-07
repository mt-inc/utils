"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.DB = exports.Cross = exports.Time = exports.Math = exports.constants = void 0;
const constants = __importStar(require("./src/const"));
exports.constants = constants;
const math_1 = require("./src/math");
Object.defineProperty(exports, "Math", { enumerable: true, get: function () { return math_1.Helper; } });
const timaAgo_1 = require("./src/timaAgo");
Object.defineProperty(exports, "Time", { enumerable: true, get: function () { return timaAgo_1.TimeAgo; } });
const Cross = __importStar(require("./src/cross"));
exports.Cross = Cross;
const DB = __importStar(require("./src/db"));
exports.DB = DB;
const File = __importStar(require("./src/file"));
exports.File = File;
exports.default = {
    constants,
    Math: math_1.Helper,
    Time: timaAgo_1.TimeAgo,
    Cross,
    DB,
    File,
};
