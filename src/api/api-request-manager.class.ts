import { environment } from "../environments/environment";
import { IRequest } from "./interfaces/request.interface";
import { Auth } from "./auth.class";
import { IApiRequestManager } from "./interfaces/api-request-manager.interface";

export class ApiRequestManager {

    private readonly apiUrl = environment.apiUrl;
    private accessToken: string;
    private auth: Auth;

    constructor(
        private method: string,
        private options: IApiRequestManager = {}
    ) {
        if (!this.options.noAuth) {
            this.auth = new Auth();
        }
    }

    private async request<T>(request: IRequest): Promise<T> {
        const headers: any = {
            'Content-Type': 'application/json',
        }
        const accessToken = this.auth ? this.auth.getToken() : undefined;
        if (accessToken) {
            headers.Authorization = 'Bearer ' + accessToken
        }
        return fetch(this.apiUrl + '/' + this.method + (request.path || ''), {
            method: request.method,
            headers: headers,
            body: JSON.stringify(request.body),
        })
            .then(response => response.json()) as Promise<T>;
    };

    public async get<T>(path?: string): Promise<T> {
        return this.request<T>({ path: path, method: 'GET' }) as Promise<T>;
    }

    public async getItem<T>(id: string): Promise<T> {
        return this.get<T>('/' + id);
    }

    public async put<T>(body: any, path?: string): Promise<T> {
        return this.request<T>({ path: path, method: 'PUT', body: body }) as Promise<T>;
    }

    public async post<T>(body: any, path?: string): Promise<T> {
        return this.request<T>({ path: path, method: 'POST', body: body }) as Promise<T>;
    }

    public async save<T>(body: any): Promise<T> {
        if (!body._id) {
            throw new Error("Couldn't save object. There are no _id field.");
        }
        return this.post<T>(body, '/' + body._id);
    }

    public async delete<T>(path: string): Promise<T> {
        return this.request<T>({ path: path, method: 'DELETE' }) as Promise<T>;
    }

    public async deleteItem<T>(id: string): Promise<T> {
        return this.delete<T>('/' + id);
    }
}
