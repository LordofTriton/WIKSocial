import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreatePostRequest {
    @Expose()
    postname: string;

    @Expose()
    email: string;

    @Expose()
    password: string;

    @Expose()
    postType: string;
}

export class FindPostRequest {
    @Expose()
    postId?: number;

    @Expose()
    postname?: string;

    @Expose()
    email?: string;
}

export class GetPostsRequest extends FindPostRequest {
    @Expose()
    page: number;

    @Expose()
    pageSize: number;

    @Expose()
    postType: string;

    @Expose()
    postStatus?: string;
}

export class SearchPostsRequest extends PaginatedRequest {
    @Expose()
    query: string;
}

export class UpdatePostRequest {
    postId: number;

    @Expose()
    postname: string;

    @Expose()
    profileImageId: number;
  
    @Expose()
    coverImageId: number;

    @Expose()
    email: string;

    @Expose()
    bio: string;

    @Expose()
    password: string;
  
    @Expose()
    googleId: string;
    
    @Expose()
    yandexId: string;
    
    @Expose()
    vkontakteId: string;

    @Expose()
    firebaseToken?: string;
}