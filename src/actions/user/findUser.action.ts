"use server";

import Prisma from "../../clients/prisma.client";
import { User } from "../../constants/entities/user.entity";
import { FindUserRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { WikMapper } from "../../util/mapper.util";

export async function FindUserAction(data: FindUserRequest): Promise<WikResponse<User>> {
    try {
        const user =  await Prisma.user.findFirst({
            where: data,
            include: {
                profileImage: true,
                coverImage: true
            }
        });

        const userData = WikMapper.map(user, User, true);
        return WikResponse.Success({ data: userData, message: "User fetched successfully." });
    }
    catch (error) {
        console.error('Error in server action:', error);
        throw new Error('An unexpected error occurred. Please try again.');
    }
}