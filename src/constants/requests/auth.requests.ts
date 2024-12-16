import { Expose } from 'class-transformer';

export class LoginRequest {
    @Expose()
    email: string;
    
    @Expose()
    password: string;
}

export class SignupRequest {
    @Expose()
    username: string;
    
    @Expose()
    email: string;
    
    @Expose()
    password: string;
    
    @Expose()
    confirmPassword: string;
}

export class GoogleAuthRequest {
    @Expose()
    googleId: string;
    
    @Expose()
    username: string;

    @Expose()
    email: string;

    @Expose()
    profileImageUrl: string;
}

export class ChangePasswordRequest {
    @Expose()
    userId: number;

    @Expose()
    currentPassword: string;

    @Expose()
    newPassword: string;

    @Expose()
    confirmNewPassword: string;
}

export class ForgotPasswordRequest {
    @Expose()
    userId: number;

    @Expose()
    identifier: string;

    @Expose()
    emailOrPhone: string;
}

export class ResetPasswordRequest {
    @Expose()
    userId: number;

    @Expose()
    resetCode: string;

    @Expose()
    newPassword: string;

    @Expose()
    confirmNewPassword: string;
}

export class VerifyEmailRequest {
    @Expose()
    userId: number;

    @Expose()
    verificationCode: string;
}