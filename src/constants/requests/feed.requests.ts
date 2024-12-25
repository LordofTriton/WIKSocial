import { Expose } from "class-transformer";
import { PaginatedRequest } from "../models/pagination.models";

export class GetHomeFeedRequest extends PaginatedRequest {
    @Expose()
    userId: number;
}