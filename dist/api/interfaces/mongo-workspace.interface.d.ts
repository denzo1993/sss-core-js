import { IMongoIndex } from './mongo-index.interface';
export interface IMongoWorkspace extends IMongoIndex {
    workspaceId?: string;
}
