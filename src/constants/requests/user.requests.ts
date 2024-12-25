import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateUserRequest {
    @Expose()
    username: string;

    @Expose()
    email: string;

    @Expose()
    password: string;

    @Expose()
    userType: string;
}

export class FindUserRequest {
    @Expose()
    userId?: number;
    
    @Expose()
    uid?: string;

    @Expose()
    username?: string;

    @Expose()
    email?: string;
}

export class GetUsersRequest extends PaginatedRequest {
    @Expose()
    userType: string;

    @Expose()
    userStatus?: string;
}

export class SearchUsersRequest extends PaginatedRequest {
    @Expose()
    query: string;
}

export class UpdateUserRequest {
    userId: number;

    @Expose()
    username?: string;

    @Expose()
    profileImageId?: number;
  
    @Expose()
    coverImageId?: number;

    @Expose()
    email?: string;

    @Expose()
    bio?: string;
  
    @Expose()
    googleId?: string;
    
    @Expose()
    yandexId?: string;
    
    @Expose()
    vkontakteId?: string;

    @Expose()
    firebaseToken?: string;
}