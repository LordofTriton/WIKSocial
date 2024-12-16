export class NumberHelper {
  static getPercentage(num1: number, num2: number) {
    return (num1 / num2) * 100;
  };

  static random(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
