import { ApiRequestManager } from "../api-request-manager.class";
import { IApiRequestManager } from "../interfaces/api-request-manager.interface";
export declare class CollectionList extends ApiRequestManager {
    constructor(options?: IApiRequestManager);
    get<T>(colName: string): Promise<T>;
    getItem<T>(colName: string, id?: string): Promise<T>;
    deleteItem<T>(colName: string, id?: string): Promise<T>;
    put<T>(body: any, colName: string): Promise<T>;
    save<T>(body: any, colName?: string): Promise<T>;
    post<T>(body: any, path?: string): Promise<T>;
}
