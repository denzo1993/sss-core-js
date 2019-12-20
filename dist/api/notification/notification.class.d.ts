import { ApiRequestManager } from "../api-request-manager.class";
import { IApiRequestManager } from "../interfaces/api-request-manager.interface";
import { ISendEmailNotification } from "./interfaces/send-email-notification.interface";
import { IEmailNotification } from "./interfaces/email-notification.interface";
import { IHistoryNotification } from "./interfaces/history-notification.interface";
export declare class Notification extends ApiRequestManager {
    constructor(options?: IApiRequestManager);
    sendMail(options: ISendEmailNotification): Promise<IEmailNotification>;
    history(): Promise<IHistoryNotification[] | any[]>;
}
