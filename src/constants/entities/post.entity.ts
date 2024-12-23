import { Expose } from "class-transformer";
import { User } from "./user.entity";
import { Community } from "./community.entity";

export class Post {
    @Expose()
    postId: number;

    @Expose()
    userId: number;

    @Expose()
    communityId: number;

    @Expose()
    sharedPostId: number;

    @Expose()
    content: string;

    @Expose()
    dateCreated: string;
       
    user?: User;
    community?: Community;
    sharedPost?: Post;
}