import { ApiRequestManager } from './api-request-manager.class';
import { IAuthResponse } from './interfaces/auth-response.interface';

export class Auth {

    private api: ApiRequestManager;

    constructor() {
        this.api = new ApiRequestManager('auth/login', { noAuth: true });
    }

    public async login(username: string, password: string): Promise<string> {
        return this.api.post({ username, password })
            .then((res: IAuthResponse) => {
                sessionStorage.setItem('access_token', res.access_token);
                if (!res.access_token || res.access_token.length === 0) {
                    throw new Error('Authorization failed!');
                }
                return res.access_token;
            })
    }

    public getToken(): string {
        return sessionStorage.getItem('access_token') || '';
    }
}
