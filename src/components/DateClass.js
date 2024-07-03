import { DateTime } from 'luxon';

export default class DateClass {
    static getToday() {
        return new Date();
    }

    static todaysDate() {
        const today = this.getToday();
        const month = today.getMonth();
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    static currentTime({ timezone }) {
        const today = this.getToday();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    static dayOfWeek() {
        const today = this.getToday();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDayOfWeek = daysOfWeek[today.getDay()];

        return `${currentDayOfWeek}`;
    }

    static getDays() {
        const fiveDays = [];
        const today = this.getToday();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let i = 0; i <= 7; i++) {
            const index = (today.getDay() + i) % 7;
            fiveDays.push(daysOfWeek[index]);
        }

        return fiveDays;
    }

    static getDates() {
        const Dates = [];
        const today = this.getToday();
        const formatter = new Intl.DateTimeFormat('en-US', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        });

        for (let i = 0; i <= 7; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            Dates.push(formatter.format(nextDate));
        }
        return Dates;
    }
}
