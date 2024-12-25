import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateNotionRequest {
    @Expose()
    userId: number;

    @Expose()
    referenceId: number;

    @Expose()
    isSubscribed?: boolean;

    @Expose()
    isHidden?: boolean;

    @Expose()
    isBlocked?: boolean;
}

export class FindNotionRequest {
    @Expose()
    notionId?: number;

    @Expose()
    referenceId?: number;
}

export class GetNotionsRequest extends PaginatedRequest {
    @Expose()
    userId?: number;

    @Expose()
    referenceId?: number;

    @Expose()
    isSubscribed?: boolean;

    @Expose()
    isHidden?: boolean;

    @Expose()
    isBlocked?: boolean;
}

export class UpdateNotionRequest {
    notionId?: number;
    referenceId?: number;

    @Expose()
    isSubscribed?: boolean;

    @Expose()
    isHidden?: boolean;

    @Expose()
    isBlocked?: boolean;
}