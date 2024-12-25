"use server";

import Database from "../../orm/database";
import { Post } from "../../constants/entities/post.entity";
import { SearchPostsRequest } from "../../constants/requests/post.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const SearchPostsAction = async (data: SearchPostsRequest): Promise<WikResponse<Post[]>> => WikServerAction(async () => {
    const { page, pageSize, query } = data;

    const communities =  await Database.Post.createQueryBuilder("post")
        .leftJoinAndSelect("post.author", "author")
        .leftJoinAndSelect("post.community", "community")
        .where("post.content ~* :regex", { regex: `^${query}` })
        .getMany();

    return WikResponse.Success({ data: communities, message: "Posts fetched successfully." });
});