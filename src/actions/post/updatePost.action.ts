"use server";

import Database from "../../orm/database";
import { Post } from "../../constants/entities/post.entity";
import { UpdatePostRequest } from "../../constants/requests/post.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const UpdatePostAction = async (data: UpdatePostRequest): Promise<WikResponse<Post>> => WikServerAction(async () => {
    const existingPost = await Database.Post.findOne({ where: { postId: data.postId } });
    if (!existingPost) return WikResponse.Failure({ error: "Post not found." });

    let updates = WikMapper.map(data, UpdatePostRequest);

    const result = await Database.Post.update({ postId: data.postId }, updates);

    return WikResponse.Update({ data: WikMapper.map(result, Post, true), message: "Post updated successfully." });
});