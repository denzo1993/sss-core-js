"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_request_manager_class_1 = require("./api-request-manager.class");
const collection_list_class_1 = require("./collection-list/collection-list.class");
const notification_class_1 = require("./notification/notification.class");
const media_class_1 = require("./media/media.class");
class Api {
    constructor() {
        this._workspace = new api_request_manager_class_1.ApiRequestManager('workspace');
        this._group = new api_request_manager_class_1.ApiRequestManager('group');
        this._user = new api_request_manager_class_1.ApiRequestManager('user');
        this._config = new api_request_manager_class_1.ApiRequestManager('config');
        this._collection = new api_request_manager_class_1.ApiRequestManager('collection');
        this._collectionList = new collection_list_class_1.CollectionList();
        this._notification = new notification_class_1.Notification();
        this._media = new media_class_1.Media();
    }
    workspace() { return this._workspace; }
    group() { return this._group; }
    user() { return this._user; }
    config() { return this._config; }
    collection() { return this._collection; }
    collectionList() { return this._collectionList; }
    notification() { return this._notification; }
    media() { return this._media; }
}
exports.Api = Api;
//# sourceMappingURL=api.class.js.map