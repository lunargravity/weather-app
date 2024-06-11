export class DateClass {
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

  static currentTime() {
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
}
