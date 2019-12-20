import { ApiRequestManager } from "../api-request-manager.class";
import { IApiRequestManager } from "../interfaces/api-request-manager.interface";

export class CollectionList extends ApiRequestManager {

    constructor(options?: IApiRequestManager) {
        super('collection', options);
    }

    public async get<T>(colName: string): Promise<T> {
        if (!colName) throw new Error('Set collection name, please.')
        return super.get<T>('/' + colName + '/list');
    }

    public async getItem<T>(colName: string, id?: string): Promise<T> {
        if (!colName) throw new Error('Set collection name, please.')
        return super.get<T>('/' + colName + '/list/' + id)
            .then((res: any) => res.data);
    }

    public async deleteItem<T>(colName: string, id?: string): Promise<T> {
        if (!colName) throw new Error('Set collection name, please.')
        return super.delete<T>('/' + colName + '/list/' + id);
    }

    public async put<T>(body: any, colName: string): Promise<T> {
        if (!colName) throw new Error('Set collection name, please.')
        return super.put<T>({ data: body }, '/' + colName + '/list');
    }

    public async save<T>(body: any, colName?: string): Promise<T> {
        if (!colName) throw new Error('Set collection name, please.')
        return super.put<T>({ data: body }, '/' + colName + '/list/' + body._id);
    }

    public async post<T>(body: any, path?: string): Promise<T> {
        throw new Error("Method not implemented");
    }
}