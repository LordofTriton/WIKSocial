import { Expose } from "class-transformer";
import { User } from "./user.entity";

export class Notion {
    @Expose()
    notionId: number;

    @Expose()
    userId: number;

    @Expose()
    referenceId: number;

    @Expose()
    isSubscribed: boolean;

    @Expose()
    isHidden: boolean;

    @Expose()
    isBlocked: boolean;

    @Expose()
    dateCreated: string;

    user?: User;
}