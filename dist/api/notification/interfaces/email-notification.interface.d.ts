import { IMongoWorkspace } from "../../interfaces/mongo-workspace.interface";
export interface IEmailNotification extends IMongoWorkspace {
    accepted: string[];
    rejected: string[];
    envelopeTime: number;
    messageTime: number;
    messageSize: number;
    response: string;
    envelope: {
        from: string;
        to: string[];
    };
    messageId: string;
}