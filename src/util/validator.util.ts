

export default class Validator {
    constructor() { }

    static isNumber(text: string) {
        const numberRegex = /^[1-9]\d*$/;
        return numberRegex.test(text);
    }

    static isValidURL(url: string) {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    }

    static isValidEmail(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static containsPhone(text: string) {
        const phoneRegex = /\b(?:\+?(\d{1,3}))?[-. (]*?(\d{3})[-. )]*?(\d{3})[-. ]*(\d{4})\b/g;
        return phoneRegex.test(text);
    }

    static containsEmail(text: string) {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        return emailRegex.test(text);
    }

    static containsSymbol(value: string) {
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        return symbolRegex.test(value);
    };

    static isValidPassword(password: string) {
        if (password.includes(" ")) return false;
        if (password.trim().length < 6) return false;
        return true;
    }

    static isValidGender(gender: string) {
        const validGenders = ["Male", "Female", "Non Binary", "None"]
        return validGenders.includes(gender)
    }

    static isValidMaritalStatus(maritalStatus: string) {
        const validMaritalStatuses = ["Single", "Married", "Divorced", "It's Complicated"]
        return validMaritalStatuses.includes(maritalStatus)
    }

    static isValidUserStatus(userStatus: string) {
        const validuserStatuses = ["active", "deactivated", "suspended"]
        return validuserStatuses.includes(userStatus)
    }

    static isValidNotificationStatus(status: string) {
        const validNotificationStatuses = ["read", "unread"]
        return validNotificationStatuses.includes(status)
    }

    static isValidAudience(audience: string) {
        const validScopes = ["public", "community", "friends", "private"]
        return validScopes.includes(audience)
    }

    static isValidPhone(phone: string) {
        return true;
    }

    static isValidActiveStatus(status: string) {
        const validActiveStatuses = ["online", "offline", "away"]
        return validActiveStatuses.includes(status)
    }

    static isValidCommunityStatus(status: string) {
        const validCommunityStatuses = ["active", "inactive"]
        return validCommunityStatuses.includes(status)
    }

    static isValidCommunityPrivacy(privacy: string) {
        const validCommunityPrivacy = ["public", "private"]
        return validCommunityPrivacy.includes(privacy)
    }

    static isValidMemberStatus(status: string) {
        const validMemberStatuses = ["active", "inactive"]
        return validMemberStatuses.includes(status)
    }

    static isValidMemberRole(role: string) {
        const validMemberRoles = ["admin", "moderator", "member"]
        return validMemberRoles.includes(role)
    }
}