import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { STORE_KEYS } from './store.config';
import Cache from '../utils/cache.util';

const BASE_API_URL = "https://wiksocial.onrender.com";

export class WikHttpClient {
    private static client: AxiosInstance;

    static initialize() {
        this.client = axios.create({
            baseURL: `${BASE_API_URL}/api/v1`,
            withCredentials: false,
            headers: {
                "Content-Type": "application/json",
            },
        });

        this.client.interceptors.request.use(async (config) => {
            const accessCode = await Cache.getData(STORE_KEYS.ACCESS_CODE);

            if (accessCode) config.headers.Authorization = `Bearer ${accessCode}`;
            
            return config;
        }, error => Promise.reject(error));

        this.client.interceptors.response.use( 
            (response: AxiosResponse) => response,
            (error: AxiosError) => this.handleErrorResponse(error)
        );
    }

    static getClient(): AxiosInstance {
        if (!this.client) {
            this.initialize();
        }
        return this.client;
    }

    static addHeaders(headers: Record<string, string>): void {
        this.getClient().defaults.headers = {
            ...this.getClient().defaults.headers,
            ...headers
        };
    }

    private static async handleErrorResponse(error: AxiosError) {
        if (error.response) {
            return await Promise.resolve(error.response);
        }
        return Promise.reject(error);
    }

    static instantiate = () => new WikHttpClient();
}
