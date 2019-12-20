import { ApiRequestManager } from "../api-request-manager.class";
import { IApiRequestManager } from "../interfaces/api-request-manager.interface";
export declare class Media extends ApiRequestManager {
    constructor(options?: IApiRequestManager);
    download(id: string): void;
    upload(fileToUpload: File): Promise<unknown>;
}
