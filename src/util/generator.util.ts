import crypto from 'crypto';

export default class Generator {
    static GenerateToken(tokenLength: number) {
        const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        let token = '';

        if (characterSet) {
            const characterSetLength = characterSet.length;
            for (let i = 0; i < tokenLength; i++) {
                const randomIndex = crypto.randomInt(0, characterSetLength);
                token += characterSet.charAt(randomIndex);
            }
        } else {
            const randomBytes = crypto.randomBytes(tokenLength);
            token = randomBytes.toString('hex');
        }

        return token;
    }

    static GenerateDigits(digitLength: number): number {
        const min = Math.pow(10, (digitLength ?? 1) - 1);
        const max = Math.pow(10, (digitLength ?? 1)) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static async encodeData(data: string, saltRounds: number): Promise<string> {
        const salt = crypto.randomBytes(saltRounds).toString('hex');
        const hashedData = crypto.createHash('sha256').update(data + salt).digest('hex');
        return hashedData;
    }

    static async decodeData(data: string): Promise<string> {
        const decodedData = Buffer.from(data, 'hex').toString('utf-8');
        return decodedData;
    }

    static calculateExpirationTime(minutes: number): Date {
        return new Date(Date.now() + minutes * 60 * 1000);
    }

    static generateRandomString(length = 32): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }
}
