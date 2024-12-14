"use server";

import Prisma from "../../clients/prisma.client";
import { User } from "../../constants/entities/user.entity";
import { SignupRequest } from "../../constants/requests/auth.requests";
import { AuthUserResponse } from "../../constants/responses/auth.responses";
import { WikResponse } from "../../constants/responses/response";
import Generator from "../../util/generator.util";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../base.action";

async function Signup(data: SignupRequest): Promise<WikResponse<AuthUserResponse>> {
    const existingUser = await Prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) return WikResponse.Failure({ error: "A user with this email address already exists." });

    const newUser = WikMapper.map(data, User);
    newUser.verificationCode = Generator.GenerateDigits(5).toString();

    await Prisma.user.create({ data: newUser as any });
    await Prisma.settings.create({ data: { userId: newUser.userId } });

    const user = await Prisma.user.findUnique({ where: { email: data.email } });

    return WikResponse.Create({ data: WikMapper.map(user, AuthUserResponse), message: "User created successfully." });
}

export const SignupAction = WikServerAction<SignupRequest, AuthUserResponse>(Signup);