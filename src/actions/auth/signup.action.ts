"use server";

import Prisma from "../../clients/prisma.client";
import { SignupRequest } from "../../constants/requests/auth.requests";
import { AuthUserResponse } from "../../constants/responses/auth.responses";
import { WikResponse } from "../../constants/responses/response";
import { NumberHelper } from "../../helpers/number.helper";
import { PasswordHelper } from "../../helpers/password.helper";
import Generator from "../../util/generator.util";
import { WikMapper } from "../../util/mapper.util";

export async function SignupAction(data: SignupRequest): Promise<WikResponse<AuthUserResponse>> {
    try {
        const existingUser = await Prisma.user.findUnique({ where: { email: data.email } });
        if (existingUser) return WikResponse.Failure({ error: "A user with this email address already exists." });
    
        const verificationCode = Generator.GenerateDigits(5).toString();
        const accessCode = Generator.GenerateToken(32);
    
        const createdUser = await Prisma.user.create({ data: {
            ...data, verificationCode, accessCode, password: PasswordHelper.encode(data.password)
        } });
        await Prisma.settings.create({ data: { userId: createdUser.userId } });
    
        const profileImage = await Prisma.cloudFile.create({
            data: {
                userId: createdUser.userId,
                publicId: "",
                uri: `./assets/images/avatars/${(["One", "Two", "Three", "Four", "Five", "Six", "Seven"])[NumberHelper.random(0, 6)]}.jpg`,
                fileType: "IMAGE"
            }
        });
    
        const user = await Prisma.user.update({
            where: { userId: createdUser.userId },
            data: { ...createdUser, profileImageId: profileImage.cloudFileId }
        });
    
        return WikResponse.Create({ data: WikMapper.map(user, AuthUserResponse, true), message: "User created successfully." });
    }
    catch (error) {
        console.error('Error in server action:', error);
        throw new Error('An unexpected error occurred. Please try again.');
    }
}