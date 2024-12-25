import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateCommentRequest {
    @Expose()
    userId: number;

    @Expose()
    postId: number;

    @Expose()
    communityId?: number;

    @Expose()
    contentText: string;

    @Expose()
    contentMedia?: string;
}

export class GetCommentsRequest extends PaginatedRequest {
    @Expose()
    userId?: number;

    @Expose()
    postId?: number;

    @Expose()
    communityId?: number;
}

export class UpdateCommentRequest {
    commentId: number;

    @Expose()
    contentText?: string;

    @Expose()
    contentMedia?: string;
}