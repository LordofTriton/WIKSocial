"use server";

import Database from "../../orm/database";
import { User } from "../../constants/entities/user.entity";
import { FindUserRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { FindOptionsRelations } from "typeorm";
import { WikServerAction } from "../server.action";

export const FindUserAction = async (data: FindUserRequest, relations?: FindOptionsRelations<User>): Promise<WikResponse<User>> => WikServerAction(async () => {
    const user =  await Database.User.findOne({
        where: data,
        relations: {
            profileImage: true,
            coverImage: true,

            ...relations
        }
    });

    const userData = WikMapper.map(user, User, true);
    return WikResponse.Success({ data: userData, message: "User fetched successfully." });
});