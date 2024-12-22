"use server";

import Prisma from "../../clients/prisma.client";
import { User } from "../../constants/entities/user.entity";
import { GetUsersRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";

export async function GetUsersAction(data: GetUsersRequest): Promise<WikResponse<User>> {
    const user =  await Prisma.user.findMany({
        where: data,
        include: {
            profileImage: true,
            coverImage: true
        }
    });

    const userData = WikMapper.map(user, User, true);
    return WikResponse.Success({ data: userData, message: "Users fetched successfully." });
}