"use server";

import Prisma from "../../clients/prisma.client";
import { User } from "../../constants/entities/user.entity";
import { FindUserRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../base.action";


async function FindUser(data: FindUserRequest): Promise<WikResponse<User>> {
    const user = await Prisma.user.findFirst({
        where: { userId: data.userId }
    });

    const userData = WikMapper.map(user, User);
    return WikResponse.Success({ data: userData, message: "User fetched successfully." });
}

export const FindUserAction = WikServerAction<FindUserRequest, User>(FindUser);