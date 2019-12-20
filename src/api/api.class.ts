import { ApiRequestManager } from "./api-request-manager.class";
import { CollectionList } from "./collection-list/collection-list.class";
import { Notification } from "./notification/notification.class";
import { Media } from "./media/media.class";

export class Api {

    private _workspace = new ApiRequestManager('workspace');
    private _group = new ApiRequestManager('group');
    private _user = new ApiRequestManager('user');
    private _config = new ApiRequestManager('config');
    private _collection = new ApiRequestManager('collection');
    private _collectionList = new CollectionList();
    private _notification = new Notification();
    private _media = new Media();

    public workspace() { return this._workspace; }
    public group() { return this._group; }
    public user() { return this._user; }
    public config() { return this._config; }
    public collection() { return this._collection; }
    public collectionList() { return this._collectionList; }
    public notification() { return this._notification; }
    public media() { return this._media; }
}