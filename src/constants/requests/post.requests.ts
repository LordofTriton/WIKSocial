import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreatePostRequest {
    @Expose()
    userId: number;

    @Expose()
    communityId?: number;

    @Expose()
    sharedPostId?: number;

    @Expose()
    content: string;

    @Expose()
    sensitiveContent: boolean;
}

export class GetPostsRequest extends PaginatedRequest {
    @Expose()
    userId?: number;

    @Expose()
    communityId?: number;

    @Expose()
    sharedPostId?: number;

    @Expose()
    sensitiveContent?: boolean;
}

export class SearchPostsRequest extends PaginatedRequest {
    @Expose()
    query: string;
}

export class UpdatePostRequest {
    postId: number;

    @Expose()
    content?: string;

    @Expose()
    sensitiveContent?: boolean;
}