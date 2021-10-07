"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cross = void 0;
const const_1 = require("./const");
class Cross {
    constructor(treshold, perc = false) {
        this.trs = treshold || 0;
        this.perc = perc;
    }
    /** Is ema crossed */
    isCrossed(prevLow, prevHigh, low, high) {
        if (prevLow && prevHigh && low && high) {
            const trs = this.perc
                ? Math.abs(low - high) / Math.min(low, high) >= this.trs / 100
                : Math.abs(low - high) >= this.trs;
            if (prevLow > prevHigh && low < high && trs) {
                return const_1.SELL;
            }
            if (prevLow < prevHigh && low > high && trs) {
                return const_1.BUY;
            }
            return;
        }
        return;
    }
}
exports.Cross = Cross;
