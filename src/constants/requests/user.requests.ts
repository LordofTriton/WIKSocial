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
    userId?: number;

    @Expose()
    username?: string;

    @Expose()
    email?: string;
}

export class GetUsersRequest extends FindUserRequest {
    @Expose()
    page: number;

    @Expose()
    pageSize: number;

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
    @Expose()
    userId: number;

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