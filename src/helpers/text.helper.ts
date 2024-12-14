export class TextHelper {
  static capitalize(text: string | undefined) {
    if (!text) return '';

    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  
  static getFormattedDate = (date: string) => {
    const dateObject = new Date(date);

    // Extracting day, month, and year components
    const day = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth() + 1; // Month is zero-based, so we add 1
    const year = dateObject.getUTCFullYear();
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    // Formatting the date components to the desired format
    return `${day < 10 ? '0' : ''}${day} ${months[month - 1]}, ${year}`;
  };

  static getFormattedTime(dateString: string) {
    const date = new Date(dateString);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return (
      formattedHours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm
    );
  }

  static truncText(
    text: string | undefined,
    length: number,
    character: string,
  ) {
    if (!text) return '';
    if (text.length > length) {
      return text.substring(0, length) + character;
    } else {
      return text;
    }
  }

  static isNumber(text: string) {
    const pattern = /^[1-9]\d*$/;
    return pattern.test(text);
  }

  static isYoutubeUrl(url: string) {
    const youtubeRegex =
      /^((?:https?:)?\/\/)?((?:www\.)?((?:youtube\.com|youtu\.be))\/(?:(embed\/|v\/|watch\?v=|shorts\/)?)([\w-]+)(\S+)?)?$/;

    return youtubeRegex.test(url);
  }

  static containsPhoneNumber(text: string) {
    const phoneRegex =
      /\b(?:\+?(\d{1,3}))?[-. (]*?(\d{3})[-. )]*?(\d{3})[-. ]*(\d{4})\b/g;
    return phoneRegex.test(text);
  }

  static containsNumber(text: string) {
    const numberRegex = /\d/;
    return numberRegex.test(text);
  }

  static containsEmail(text: string) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return emailRegex.test(text);
  }

  static joinText(text: string) {
    return text.replace(' ', '_').trim();
  }

  static setUrl(url = '') {
    if (url && url.length > 0 && !url.startsWith('http'))
      return `${process.env.AZURE_BLOB_STORAGE_BASE_URL}${url.trim()}`;
    return url;
  }

  static FormatAmount(num: number) {
    const formatter = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    });
    return formatter.format(num);
  }

  static addSuffix(num: number) {
    if (num % 100 >= 11 && num % 100 <= 13) {
      return num + 'th';
    }

    switch (num % 10) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
      default:
        return num + 'th';
    }
  }

  static creativeCategoryTruncate(categories: string[]) {
    if (categories.length === 1) {
      return (
        categories[0].charAt(0).toUpperCase() +
        categories[0].slice(1).toLowerCase().replace('_', ' ')
      );
    } else if (categories.length > 1) {
      return (
        categories[0].charAt(0).toUpperCase() +
        categories[0].slice(1).toLowerCase().replace('_', ' ') +
        ' ' +
        '+' +
        (categories.length - 1)
      );
    } else return '';
  }
}
