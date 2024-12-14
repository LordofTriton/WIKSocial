export class GoogleUserData {
    id?: string; // The unique identifier for the user.
    email?: string; // The user's email address.
    verified_email?: boolean; // A boolean indicating whether the user's email address has been verified by Google.
    name?: string; // The user's full name.
    given_name?: string; // The user's first name.
    family_name?: string; // The user's last name.
    picture?: string; // A URL pointing to the user's profile picture (if available).
    locale?: string; // The user's preferred locale.
    gender?: string; // The user's gender.
    birthdate?: string; // The user's birthdate.
    hd?: string; // The hosted domain associated with the user's Google account.
    link?: string; // A URL pointing to the user's Google profile.
    profile?: string; // A URL pointing to the user's Google profile (deprecated, use link instead).
    email_verified?: boolean; // A boolean indicating whether the user's email address has been verified by the user.
}