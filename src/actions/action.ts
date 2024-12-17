import { WikServerAction } from "./base.action";
import { WikResponse } from "../constants/responses/response";

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
    static Login = this.useAction(LoginAction);
    static Signup = this.useAction(SignupAction);

    static FindSettings = this.useAction(FindSettingsAction);
    static UpdateSettings = this.useAction(UpdateSettingsAction);

    static FindUser = this.useAction(FindUserAction);
    static UpdateUser = this.useAction(UpdateUserAction);
    static DeleteUser = this.useAction(DeleteUserAction);
    static DropUser = this.useAction(DropUserAction);

    static useAction<K, T>(action: (params: K) => Promise<WikResponse<T>>) {
        return async (params: K) => {
            try {
                return await action(params);
            } catch (error) {
                console.error('Error in server action:', error);
                throw new Error('An unexpected error occurred. Please try again.');
            }
        };
    }
}