"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_request_manager_class_1 = require("../api-request-manager.class");
const environment_1 = require("../../environments/environment");
class Media extends api_request_manager_class_1.ApiRequestManager {
    constructor(options) {
        super('media', options);
    }
    download(id) {
        location.href = environment_1.environment.apiUrl + '/media/' + id + '/file';
    }
    upload(fileToUpload) {
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return super.post(formData);
    }
}
exports.Media = Media;
//# sourceMappingURL=media.class.js.map