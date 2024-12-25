"use server";

import Database from "../../orm/database";
import { SignupRequest } from "../../constants/requests/auth.requests";
import { AuthUserResponse } from "../../constants/responses/auth.responses";
import { WikResponse } from "../../constants/responses/response";
import { NumberHelper } from "../../helpers/number.helper";
import { PasswordHelper } from "../../helpers/password.helper";
import { cookies } from 'next/headers';
import Generator from "../../util/generator.util";
import { WikMapper } from "../../util/mapper.util";

export async function SignupAction(data: SignupRequest): Promise<WikResponse<AuthUserResponse>> {
    const existingUser = await Database.User.findOne({ where: { email: data.email } });
    if (existingUser) return WikResponse.Failure({ error: "A user with this email address already exists." });

    const verificationCode = Generator.GenerateDigits(5).toString();
    const accessCode = Generator.GenerateToken(32);

    const createdUser = Database.User.create({ ...data, verificationCode, accessCode, password: PasswordHelper.encode(data.password) });
    const savedUser = await Database.User.save(createdUser);

    await Database.Settings.save({ userId: savedUser.userId });

    const profileImage = await Database.CloudFile.save({
        userId: createdUser.userId,
        publicId: "",
        uri: `/assets/images/avatars/${(["One", "Two", "Three", "Four", "Five", "Six", "Seven"])[NumberHelper.random(0, 6)]}.png`,
        fileType: "IMAGE"
    });

    const user = await Database.User.save({ ...createdUser, profileImageId: profileImage.cloudFileId });

    const cookieStore = await cookies();
    cookieStore.set('sessionId', `session:${user.userId}`, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 30, path: '/' });

    return WikResponse.Create({ data: WikMapper.map(user, AuthUserResponse, true), message: "User created successfully." });
}