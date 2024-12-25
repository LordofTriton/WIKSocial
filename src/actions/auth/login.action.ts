"use server";

import Database from "../../orm/database";
import { UserStatusEnum } from "../../constants/enums/user.enums";
import { LoginRequest } from "../../constants/requests/auth.requests";
import { AuthUserResponse } from "../../constants/responses/auth.responses";
import { WikResponse } from "../../constants/responses/response";
import DatetimeHelper from "../../helpers/datetime.helper";
import { PasswordHelper } from "../../helpers/password.helper";
import { cookies } from 'next/headers';
import Generator from "../../util/generator.util";
import { WikMapper } from "../../util/mapper.util";
import { WikServerAction } from "../server.action";

export const LoginAction = async (data: LoginRequest): Promise<WikResponse<AuthUserResponse>> => WikServerAction(async () => {
  const user = await Database.User.findOne({ where: { email: data.email } });
  if (!user) return WikResponse.Failure({ error: "No user with this email exists." });

  if (user.password) {
    const validPass = PasswordHelper.compare(data.password, user.password);
    if (!validPass) return WikResponse.Failure({ error: "Incorrect login details." });
  }

  if (user.userStatus === UserStatusEnum.RESTRICTED) return WikResponse.Failure({
    error: "Your account has been restricted. Please contact support."
  });

  if (user.userStatus === UserStatusEnum.DELETED) return WikResponse.Failure({
    error: "Your account has been deleted. Please contact support."
  });

  user.lastLogin = new Date().toString();
  if (DatetimeHelper.hoursBetween(user.lastLogin, Date.now()) > 24) user.accessCode = Generator.GenerateToken(32);

  await Database.User.update({ userId: user.userId }, user);

  const cookieStore = await cookies();
  cookieStore.set('sessionId', `session:${user.userId}:${user.accessCode}`, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 30, path: '/' });

  return WikResponse.Success({ data: WikMapper.map(user, AuthUserResponse, true), message: "Login successful." });
});