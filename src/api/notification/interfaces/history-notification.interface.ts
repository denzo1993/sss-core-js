import { IMongoWorkspace } from "../../interfaces/mongo-workspace.interface";

export interface IHistoryNotification extends IMongoWorkspace {
    type: string;
    result: {
        accepted: string[];
        rejected: string[];
        envelopeTime: 77;
        messageTime: 457;
        messageSize: 279;
        response: string;
        envelope: {
            from: string;
            to: string[]
        };
        messageId: string
    };
    options: {
        from: string;
        to: string
        subject: string;
        html: string
    };
}
