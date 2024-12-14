import { Expose } from 'class-transformer';
import { CloudFile } from '../models/cloudFile.model';
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
    userId?: string;

    @Expose()
    username?: string;

    @Expose()
    email?: string;

    @Expose()
    searchQuery?: string;

    @Expose()
    userStatus?: string;
}

export class GetUsersRequest extends FindUserRequest {
    @Expose()
    page: number;

    @Expose()
    pageSize: number;

    @Expose()
    userType: string;
}

export class SearchUsersRequest extends PaginatedRequest {
    @Expose()
    query: string;
}

export class UpdateUserRequest {
    @Expose()
    userId: string;

    @Expose()
    username: string;

    @Expose()
    profileImage: CloudFile;

    @Expose()
    email: string;

    @Expose()
    password: string;

    @Expose()
    firebaseToken?: string;
}