import { ApiRequestManager } from "./api-request-manager.class";
import { CollectionList } from "./collection-list/collection-list.class";
import { Notification } from "./notification/notification.class";
import { Media } from "./media/media.class";
export declare class Api {
    private _workspace;
    private _group;
    private _user;
    private _config;
    private _collection;
    private _collectionList;
    private _notification;
    private _media;
    workspace(): ApiRequestManager;
    group(): ApiRequestManager;
    user(): ApiRequestManager;
    config(): ApiRequestManager;
    collection(): ApiRequestManager;
    collectionList(): CollectionList;
    notification(): Notification;
    media(): Media;
}
