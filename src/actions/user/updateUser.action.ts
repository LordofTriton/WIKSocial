"use server";

import Prisma from "../../clients/prisma.client";
import { User } from "../../constants/entities/user.entity";
import { UpdateUserRequest } from "../../constants/requests/user.requests";
import { WikResponse } from "../../constants/responses/response";
import { UserHelper } from "../../helpers/user.helper";
import { WikMapper } from "../../util/mapper.util";

export async function UpdateUserAction(data: UpdateUserRequest): Promise<WikResponse<User>> {
    try {
        const existingUser = await Prisma.user.findUnique({ where: { userId: data.userId } });
        if (!existingUser) return WikResponse.Failure({ error: "User not found." });
        
        let user: User = WikMapper.map(data, User);
        user = await UserHelper.HandleUpdateUser(user, existingUser, data);
    
        const result = await Prisma.user.update({ where: { userId: data.userId }, data: user as any });
    
        return WikResponse.Update({ data: WikMapper.map(result, User, true), message: "User updated successfully." });
    }
    catch (error) {
        console.error('Error in server action:', error);
        throw new Error('An unexpected error occurred. Please try again.');
    }
}