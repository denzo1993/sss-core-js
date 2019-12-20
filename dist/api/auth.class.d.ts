export declare class Auth {
    private api;
    constructor();
    login(username: string, password: string): Promise<string>;
    getToken(): string;
}
