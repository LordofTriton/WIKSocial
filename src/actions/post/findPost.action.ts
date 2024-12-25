"use server";

import Database from "../../orm/database";
import { Post } from "../../constants/entities/post.entity";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const FindPostAction = async (postId: number): Promise<WikResponse<Post>> => WikServerAction(async () => {
    const post = await Database.Post
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.reactions", "reaction")
        .select([
            "post.id AS postId",
            "post.title AS title",
            "post.content AS content",
        ])
        .addSelect([
            `COUNT(CASE WHEN reaction.reactionType = 'like' THEN 1 ELSE NULL END) AS likeReactions`,
            `COUNT(CASE WHEN reaction.reactionType = 'haha' THEN 1 ELSE NULL END) AS hahaReactions`,
        ])
        .where({ postId })
        .groupBy("post.id")
        .getRawOne();

    const postData = WikMapper.map(post, Post, true);
    return WikResponse.Success({ data: postData, message: "Post fetched successfully." });
});