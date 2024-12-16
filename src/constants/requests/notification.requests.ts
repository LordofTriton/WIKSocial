import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateNotificationRequest {
    @Expose()
    userId: number;

    @Expose()
    content: string;

    @Expose()
    notificationType: string;

    @Expose()
    referenceId?: string;
}

export class GetNotificationsRequest extends PaginatedRequest {
    @Expose()
    userId: number;

    @Expose()
    isRead?: boolean;
}