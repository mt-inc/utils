export class Helper {
    constructor() { }
    round(num, precision = 2, down = false) {
        if (down) {
            return Number(Math.floor(Number(num + 'e' + precision)) + 'e-' + precision);
        }
        return Number(Math.round(Number(num + 'e' + precision)) + 'e-' + precision);
    }
    getRandom(low, high, int = true, step = 0.01) {
        if (!int) {
            const precision = `${step}`.split('.')[1].length;
            return this.round(Math.random() * (high - low) + low, precision, true);
        }
        const min = Math.ceil(low);
        const max = Math.floor(high);
        const rand = Math.floor(Math.random() * (max - min)) + min;
        return Math.floor(rand - (rand % step));
    }
}
