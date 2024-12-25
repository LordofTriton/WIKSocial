"use server";

import Database from "../../orm/database";
import { Post } from "../../constants/entities/post.entity";
import { GetPostsRequest } from "../../constants/requests/post.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";

export const GetPostsAction = async (data: GetPostsRequest): Promise<WikResponse<Post[]>> => WikServerAction(async () => {
    const { page, pageSize, ...params } = data;

    const communities =  await Database.Post.find({
        where: params,
        relations: {
            author: true,
            community: true
        }
    });

    return WikResponse.Success({ data: communities, message: "Posts fetched successfully." });
});