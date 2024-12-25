"use server";

import Database from "../../orm/database";
import { Post } from "../../constants/entities/post.entity";
import { WikResponse } from "../../constants/responses/response";
import { WikServerAction } from "../server.action";
import { GetHomeFeedRequest } from "../../constants/requests/feed.requests";
import { WikMapper } from "../../util/mapper.util";

export const GetHomeFeedAction = async (data: GetHomeFeedRequest): Promise<WikResponse<Post[]>> => WikServerAction(async () => {
    const { page, pageSize, ...params } = data;

    const communities =  await Database.Post.find({
        relations: {
            author: true,
            community: true
        }
    });

    return WikResponse.Success({ data: WikMapper.toObject(communities), message: "Home Feed fetched successfully." });
});