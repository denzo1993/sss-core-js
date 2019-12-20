"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_request_manager_class_1 = require("../api-request-manager.class");
class Notification extends api_request_manager_class_1.ApiRequestManager {
    constructor(options) {
        super('notification', options);
    }
    sendMail(options) {
        return super.post(options, '/email');
    }
    history() {
        return super.get('/history');
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.class.js.map