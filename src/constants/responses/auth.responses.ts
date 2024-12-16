import { Expose } from 'class-transformer';

export class AuthUserResponse {
    @Expose()
    userId: number;

    @Expose()
    email: string;

    @Expose()
    userType: string;

    @Expose()
    userStatus?: string;

    @Expose()
    authType?: string;

    @Expose()
    accessCode: string;

    @Expose()
    emailConfirmed: string;
}