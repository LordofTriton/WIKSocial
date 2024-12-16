import { Expose } from 'class-transformer';

export class Notification {
    @Expose()
    notificationId: number;

    @Expose()
    userId: number;

    @Expose()
    title: string;

    @Expose()
    content: string;

    @Expose()
    notificationType: string;

    @Expose()
    referenceId: number;

    @Expose()
    isRead: boolean;

    @Expose()
    dateCreated: number;
}