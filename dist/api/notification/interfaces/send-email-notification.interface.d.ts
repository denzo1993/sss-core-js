export interface ISendEmailNotification {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
}
