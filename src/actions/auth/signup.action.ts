"use server";

import Prisma from "../../clients/prisma.client";
import { User } from "../../constants/entities/user.entity";
import { SignupRequest } from "../../constants/requests/auth.requests";
import { AuthUserResponse } from "../../constants/responses/auth.responses";
import { WikResponse } from "../../constants/responses/response";
import { NumberHelper } from "../../helpers/number.helper";
import Generator from "../../util/generator.util";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../base.action";

async function Signup(data: SignupRequest): Promise<WikResponse<AuthUserResponse>> {
    const existingUser = await Prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) return WikResponse.Failure({ error: "A user with this email address already exists." });

    const newUser = WikMapper.map(data, User);
    newUser.verificationCode = Generator.GenerateDigits(5).toString();

    const user = await Prisma.user.create({ data: newUser as any });
    await Prisma.settings.create({ data: { userId: user.userId } });

    const profileImage = await Prisma.cloudFile.create({
        data: {
            userId: user.userId,
            publicId: "",
            uri: `./assets/images/avatars/${(["One", "Two", "Three", "Four", "Five", "Six", "Seven"])[NumberHelper.random(0, 6)]}.jpg`,
            fileType: "IMAGE"
        }
    });

    await Prisma.user.update({
        where: { userId: user.userId },
        data: { ...user, profileImageId: profileImage.cloudFileId }
    });

    return WikResponse.Create({ data: WikMapper.map(user, AuthUserResponse), message: "User created successfully." });
}

export const SignupAction = WikServerAction<SignupRequest, AuthUserResponse>(Signup);