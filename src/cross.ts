import { SELL, BUY } from './const';

export class Cross {
  private trs: number;
  private perc: boolean;
  constructor(treshold?: number, perc = false) {
    this.trs = treshold || 0;
    this.perc = perc;
  }

  /** Is ema crossed */
  isCrossed(prevLow?: number, prevHigh?: number, low?: number, high?: number) {
    if (prevLow && prevHigh && low && high) {
      const trs = this.perc
        ? Math.abs(low - high) / Math.min(low, high) >= this.trs / 100
        : Math.abs(low - high) >= this.trs;
      if (prevLow > prevHigh && low < high && trs) {
        return SELL;
      }
      if (prevLow < prevHigh && low > high && trs) {
        return BUY;
      }
      return;
    }
    return;
  }
}
