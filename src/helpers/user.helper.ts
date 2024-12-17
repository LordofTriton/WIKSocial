
import { UpdateUserRequest } from '../constants/requests/user.requests';
import { User } from '../constants/entities/user.entity';
import { PasswordHelper } from './password.helper';

export class UserHelper {

    static async HandleUpdateUser(user: User, existingUser: User, data: UpdateUserRequest) {
        if (data.password && !existingUser.password) {
            const hashedPassword = await PasswordHelper.encode(data.password);
            user.password = hashedPassword;
            existingUser.password = hashedPassword;
        }

        return user;
    }
}