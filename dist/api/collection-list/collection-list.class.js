"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_request_manager_class_1 = require("../api-request-manager.class");
class CollectionList extends api_request_manager_class_1.ApiRequestManager {
    constructor(options) {
        super('collection', options);
    }
    get(colName) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!colName)
                throw new Error('Set collection name, please.');
            return _super.get.call(this, '/' + colName + '/list');
        });
    }
    getItem(colName, id) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!colName)
                throw new Error('Set collection name, please.');
            return _super.get.call(this, '/' + colName + '/list/' + id)
                .then((res) => res.data);
        });
    }
    deleteItem(colName, id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!colName)
                throw new Error('Set collection name, please.');
            return _super.delete.call(this, '/' + colName + '/list/' + id);
        });
    }
    put(body, colName) {
        const _super = Object.create(null, {
            put: { get: () => super.put }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!colName)
                throw new Error('Set collection name, please.');
            return _super.put.call(this, { data: body }, '/' + colName + '/list');
        });
    }
    save(body, colName) {
        const _super = Object.create(null, {
            put: { get: () => super.put }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!colName)
                throw new Error('Set collection name, please.');
            return _super.put.call(this, { data: body }, '/' + colName + '/list/' + body._id);
        });
    }
    post(body, path) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented");
        });
    }
}
exports.CollectionList = CollectionList;
//# sourceMappingURL=collection-list.class.js.map