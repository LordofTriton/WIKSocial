"use server";

import Database from "../../orm/database";
import { WikResponse } from "../../constants/responses/response";
import { CreatePostRequest } from "../../constants/requests/post.requests";
import { Post } from "../../constants/entities/post.entity";
import { WikServerAction } from "../server.action";
import { WikMapper } from "../../util/mapper.util";

export const CreatePostAction = async (data: CreatePostRequest): Promise<WikResponse<Post>> => WikServerAction(async () => {
    const createdPost = Database.Post.create(data);
    const newPost = await Database.Post.save(createdPost);

    return WikResponse.Update({ data: WikMapper.toObject(newPost), message: "Post created successfully." });
});