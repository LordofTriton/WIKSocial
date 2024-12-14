export default class Cache {
    constructor() {}

    static async saveData(key: string, value: any) {
        if (!key || !value) return;
        let data = JSON.stringify(value)
        localStorage.setItem(key, data);
    }
    
    static async getData(key: string) {
        if (!key) return null;
        let data = localStorage.getItem(key);
        if (!data) return null;
        if (typeof data !== "string") return data;
        return JSON.parse(data);
    }
    
    static async deleteData(key: string) {
        if (key) localStorage.removeItem(key);
        return null;    
    }
    
    static async clearData() {
        await localStorage.clear();
    }
}