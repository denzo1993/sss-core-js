import { ApiRequestManager } from "../api-request-manager.class";
import { environment } from "../../environments/environment";
import { IApiRequestManager } from "../interfaces/api-request-manager.interface";


export class Media extends ApiRequestManager {

    constructor(options?: IApiRequestManager) {
        super('media', options);
    }

    download(id: string) {
        location.href = environment.apiUrl + '/media/' + id + '/file';
    }

    upload(fileToUpload: File) {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return super.post(formData);
    }

}
