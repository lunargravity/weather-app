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
    return today.toLocaleString('en-US', {
      timeZone: timezone,
      hour12: true,
      timeZoneName: 'short',
    });
  }

  static dayOfWeek() {
    const today = this.getToday();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDayOfWeek = daysOfWeek[today.getDay()];

    return `${currentDayOfWeek}`;
  }

  static getDays() {
    const fiveDays = [];
    const today = this.getToday();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

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

  static getEventDateTime(localDate, localTime) {
    const date = new Date(`${localDate}T${localTime}`);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };

    const formattedDate = `${month}/${day}`;
    const formattedTime = date.toLocaleTimeString([], options);

    const finalFormat = `${formattedDate} @${formattedTime}`;

    return finalFormat;
  }
}
