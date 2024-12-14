export default class DatetimeHelper {
  constructor() { }

  static isMoreThanOneMonthAgo(timestamp: string | number) {
    timestamp = new Date(timestamp).getTime();

    const oneMonthInMilliseconds = 7 * 24 * 60 * 60 * 1000; // Assuming 30 days in a month

    const currentTimestamp = Date.now();
    const difference = currentTimestamp - timestamp;

    return difference > oneMonthInMilliseconds;
  }

  static hoursBetween(stampOne: string | number, stampTwo: string | number) {
    stampOne = new Date(stampOne).getTime();
    stampTwo = new Date(stampTwo).getTime();

    const difference = Math.abs(stampOne - stampTwo)
    const hour = 60 * 60 * 1000
    return Math.floor(difference / hour)
  }

  static GenerateDateInGMT() {
    const date = new Date(new Date().setUTCMinutes(new Date().getUTCMinutes() + 60)).toISOString()
    return date;
  }

  static GenerateTimePassed(timestamp: string | number) {
    timestamp = new Date(timestamp).getTime();

    const now = Date.now();
    const timeDiff = now - timestamp;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days >= 2) {
      return `${days}d`;
    } else if (days === 1) {
      return '1d';
    } else if (hours >= 2) {
      return `${hours}h`;
    } else if (hours === 1) {
      return '1h';
    } else if (minutes >= 2) {
      return `${minutes}m`;
    } else if (minutes === 1) {
      return '1m';
    } else {
      return 'just now';
    }
  }

  static isToday(timestamp: string | number) {
    const dateObj = new Date(timestamp);
    const today = new Date();
    return (
      dateObj.getFullYear() === today.getFullYear() &&
      dateObj.getMonth() === today.getMonth() &&
      dateObj.getDate() === today.getDate()
    );
  }

  static isTodayOrFuture(timestamp: string | number) {
    const dateObj = new Date(timestamp);
    const today = new Date();
    return dateObj >= today;
  }

  static GenerateDateTime(timestamp: string | number) {
    if (!this.isMoreThanOneMonthAgo(timestamp)) return this.GenerateTimePassed(timestamp);

    const date = new Date(timestamp);
    const currentYear = new Date().getFullYear();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    let formattedDate = `${month} ${day}`;

    if (year !== currentYear) {
      formattedDate += `, ${year}`;
    }

    formattedDate;

    return formattedDate;
  }

  static FormatTimestamp(timestamp: string | number): string {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    const isYesterday = date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();

    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    const timeString = `${formattedHour}:${minute} ${ampm}`;

    if (isToday) {
      return `Today ${timeString}`;
    } else if (isYesterday) {
      return `Yesterday ${timeString}`;
    } else {
      const month = date.toLocaleString('en-US', { month: 'long' });
      const day = date.getDate();
      const year = date.getFullYear();
      const currentYear = today.getFullYear();
      const daySuffix = this.getDaySuffix(day);

      if (year === currentYear) {
        return `${month} ${day}${daySuffix} ${timeString}`;
      } else {
        return `${month} ${day}${daySuffix}, ${year}`;
      }
    }
  }

  private static getDaySuffix(day: string | number): string {
    day = new Date(day).getTime();

    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  static GetTime(timestamp: string | number): string {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  }

  static GetDate(timestamp: string | number): string {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}