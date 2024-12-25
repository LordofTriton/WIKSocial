import { Expose } from 'class-transformer';
import { PaginatedRequest } from '../models/pagination.models';

export class CreateCommunityRequest {
    @Expose()
    userId: number;
    
    @Expose()
    name: string;

    @Expose()
    profileImageId?: number;
  
    @Expose()
    coverImageId?: number;

    @Expose()
    description: string;
}

export class GetCommunitiesRequest extends PaginatedRequest { }

export class SearchCommunitiesRequest extends PaginatedRequest {
    @Expose()
    query: string;
}

export class UpdateCommunityRequest {
    communityId: number;
    
    @Expose()
    name?: string;

    @Expose()
    profileImageId?: number;
  
    @Expose()
    coverImageId?: number;

    @Expose()
    description?: string;
}