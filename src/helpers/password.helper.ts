
export class PasswordHelper {

    static encode(data: string): string {
        // const salt = await bcrypt.genSalt(saltRounds);
        // return await bcrypt.hash(data, salt);

        const base64Data = Buffer.from(data).toString('base64');
        return base64Data;
    }

    static decode(data: string): string {
        // const salt = await bcrypt.genSalt(saltRounds);
        // return await bcrypt.hash(data, salt);

        const decodedData = Buffer.from(data, 'base64').toString('utf-8');
        return decodedData;
    }

    static compare(plain: string, encoded: string): boolean {
        // return await bcrypt.compare(firstValue, secondValue);
        const decoded = this.decode(encoded);

        return plain === decoded;
    }

    static confirm(newPass: string, confirmNewPass: string): boolean {
        if (!newPass || !confirmNewPass) return false;
        return newPass === confirmNewPass;
    }
}