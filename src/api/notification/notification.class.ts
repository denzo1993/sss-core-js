import { ApiRequestManager } from "../api-request-manager.class";
import { IApiRequestManager } from "../interfaces/api-request-manager.interface";
import { ISendEmailNotification } from "./interfaces/send-email-notification.interface";
import { IEmailNotification } from "./interfaces/email-notification.interface";
import { IHistoryNotification } from "./interfaces/history-notification.interface";

export class Notification extends ApiRequestManager {

    constructor(options?: IApiRequestManager) {
        super('notification', options);
    }

    sendMail(options: ISendEmailNotification): Promise<IEmailNotification> {
        return super.post(options, '/email');
    }

    history(): Promise<IHistoryNotification[] | any[]> {
        return super.get('/history');
    }

}
