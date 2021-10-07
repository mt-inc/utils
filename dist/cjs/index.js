"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = exports.Math = void 0;
__exportStar(require("./src/const"), exports);
var math_1 = require("./src/math");
Object.defineProperty(exports, "Math", { enumerable: true, get: function () { return math_1.Helper; } });
var timaAgo_1 = require("./src/timaAgo");
Object.defineProperty(exports, "Time", { enumerable: true, get: function () { return timaAgo_1.TimeAgo; } });
__exportStar(require("./src/cross"), exports);
__exportStar(require("./src/db"), exports);
__exportStar(require("./src/file"), exports);
