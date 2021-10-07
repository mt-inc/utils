export declare class Cross {
    private trs;
    private perc;
    constructor(treshold?: number, perc?: boolean);
    /** Is ema crossed */
    isCrossed(prevLow?: number, prevHigh?: number, low?: number, high?: number): "SELL" | "BUY" | undefined;
}
