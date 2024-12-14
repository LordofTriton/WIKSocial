import { Expose } from "class-transformer";
import { CloudFile } from "../models/cloudFile.model";
import { Post } from "./post.entity";

export class Community {
    @Expose()
    communityId: number;

    @Expose()
    name: string;

    @Expose()
    displayName: string;

    @Expose()
    profileImageId: number;
  
    @Expose()
    coverImageId: number;

    @Expose()
    description: string;

    @Expose()
    status: string;

    @Expose()
    dateCreated: string;

    profileImage: CloudFile;
    coverImage: CloudFile;

    posts: Post[];
}