import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateReactionRequest {
    @Expose()
    userId: number;

    @Expose()
    referenceId: number;

    @Expose()
    reactionType: string;
}

export class GetReactionsRequest extends PaginatedRequest {
    @Expose()
    userId?: number;

    @Expose()
    referenceId?: number;

    @Expose()
    reactionType?: string;
}

export class UpdateReactionRequest {
    reactionId: number;

    @Expose()
    reactionType: string;
}