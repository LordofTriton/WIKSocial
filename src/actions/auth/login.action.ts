"use server";

import Prisma from "../../clients/prisma.client";
import { UserStatusEnum } from "../../constants/enums/user.enums";
import { LoginRequest } from "../../constants/requests/auth.requests";
import { AuthUserResponse } from "../../constants/responses/auth.responses";
import { WikResponse } from "../../constants/responses/response";
import DatetimeHelper from "../../helpers/datetime.helper";
import { PasswordHelper } from "../../helpers/password.helper";
import Generator from "../../util/generator.util";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../base.action";


async function Login(data: LoginRequest): Promise<WikResponse<AuthUserResponse>> {
    const user = await Prisma.user.findFirst({ where: { email: data.email } });
    if (!user) return WikResponse.Failure({ error: "No user with this email exists." });

    if (user.password) {
      const validPass = PasswordHelper.compare(data.password, user.password);
      if (!validPass) return WikResponse.Failure({ error: "Incorrect login details." });
    }

    if (user.userStatus === UserStatusEnum.RESTRICTED) return WikResponse.Failure({
      error: "Your account has been restricted. Please contact support."
    });

    user.lastLogin = new Date().toString();
    if (DatetimeHelper.hoursBetween(user.lastLogin, Date.now()) > 24) user.accessCode = Generator.GenerateToken(32);

    await Prisma.user.update({ where: { userId: user.userId }, data: user });

    return WikResponse.Success({ data: WikMapper.map(user, AuthUserResponse), message: "Login successful." });
}

export const LoginAction = WikServerAction<LoginRequest, AuthUserResponse>(Login);