import { IApiRequestManager } from "./interfaces/api-request-manager.interface";
export declare class ApiRequestManager {
    private method;
    private options;
    private readonly apiUrl;
    private accessToken;
    private auth;
    constructor(method: string, options?: IApiRequestManager);
    private request;
    get<T>(path?: string): Promise<T>;
    getItem<T>(id: string): Promise<T>;
    put<T>(body: any, path?: string): Promise<T>;
    post<T>(body: any, path?: string): Promise<T>;
    save<T>(body: any): Promise<T>;
    delete<T>(path: string): Promise<T>;
    deleteItem<T>(id: string): Promise<T>;
}
