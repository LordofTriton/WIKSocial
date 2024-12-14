import { Expose } from 'class-transformer';

export class PaginationData {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedRequest {
    @Expose()
    page: number;
    
    @Expose()
    pageSize: number;
}