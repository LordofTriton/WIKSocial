export enum BackgroundTasksTypeEnum {
  SEND_EMAIL = 'SEND_EMAIL',
  GENERATE_REPORT = 'GENERATE_REPORT',
  CLOSE_EXPIRED_POLLS = 'CLOSE_EXPIRED_POLLS',
}

export enum CronTypeEnum {
  EVERY_SECOND = '* * * * * *',
  EVERY_MINUTE = '0 * * * * *',
  EVERY_HOUR = '0 0 * * * *',
  DAILY = '0 0 0 * * *', // Runs at midnight every day
  WEEKLY = '0 0 0 * * 0', // Runs at midnight on Sunday every week
  MONTHLY = '0 0 0 1 * *', // Runs at midnight on the first day of every month
  YEARLY = '0 0 0 1 1 *', // Runs at midnight on January 1st every year
}
