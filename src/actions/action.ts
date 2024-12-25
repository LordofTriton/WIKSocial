import { WikServerAction } from "./server.action";
import { WikResponse } from "../constants/responses/response";

import glob from 'glob';


// Auth
import { LoginAction } from "./auth/login.action";
import { SignupAction } from "./auth/signup.action";

// Settings
import { FindSettingsAction } from "./settings/findSettings.action";
import { UpdateSettingsAction } from "./settings/updateSettings.action";

// User
import { FindUserAction } from "./user/findUser.action";
import { UpdateUserAction } from "./user/updateUser.action";
import { DeleteUserAction } from "./user/deleteUser.action";
import { DropUserAction } from "./user/dropUser.action";


export class Action {
    static Login = LoginAction;
    static Signup = SignupAction;

    static FindSettings = FindSettingsAction;
    static UpdateSettings = UpdateSettingsAction;

    static FindUser = FindUserAction;
    static UpdateUser = UpdateUserAction;
    static DeleteUser = DeleteUserAction;
    static DropUser = DropUserAction;
}