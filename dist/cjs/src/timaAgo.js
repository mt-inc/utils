"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAgo = void 0;
class TimeAgo {
    constructor() { }
    calc(time) {
        const pastTime = new Date(time).getTime();
        if (pastTime) {
            const difference = (Date.now() - pastTime) / 1000;
            const timeFormat = new Intl.RelativeTimeFormat('uk', {
                style: 'short',
                numeric: 'auto',
            });
            let count;
            count = Math.floor(difference / (365.25 * 24 * 60 * 60));
            if (count >= 1) {
                return timeFormat.format(-count, 'year');
            }
            count = Math.floor(difference / (30.4375 * 24 * 60 * 60));
            if (count >= 1) {
                return timeFormat.format(-count, 'month');
            }
            count = Math.floor(difference / (7 * 24 * 60 * 60));
            if (count >= 1) {
                return timeFormat.format(-count, 'week');
            }
            count = Math.floor(difference / (24 * 60 * 60));
            if (count >= 1) {
                return timeFormat.format(-count, 'day');
            }
            count = Math.floor(difference / (60 * 60));
            if (count >= 1) {
                return timeFormat.format(-count, 'hour');
            }
            count = Math.floor(difference / 60);
            if (count >= 1) {
                return timeFormat.format(-count, 'minute');
            }
            return timeFormat.format(-0, 'second');
        }
        return null;
    }
    format(time) {
        return new Intl.DateTimeFormat('uk', {
            day: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Europe/Kiev',
        }).format(new Date(time));
    }
}
exports.TimeAgo = TimeAgo;
