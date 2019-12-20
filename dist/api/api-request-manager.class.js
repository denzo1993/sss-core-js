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
const environment_1 = require("../environments/environment");
const auth_class_1 = require("./auth.class");
class ApiRequestManager {
    constructor(method, options = {}) {
        this.method = method;
        this.options = options;
        this.apiUrl = environment_1.environment.apiUrl;
        if (!this.options.noAuth) {
            this.auth = new auth_class_1.Auth();
        }
    }
    request(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                'Content-Type': 'application/json',
            };
            const accessToken = this.auth ? this.auth.getToken() : undefined;
            if (accessToken) {
                headers.Authorization = 'Bearer ' + accessToken;
            }
            return fetch(this.apiUrl + '/' + this.method + (request.path || ''), {
                method: request.method,
                headers: headers,
                body: JSON.stringify(request.body),
            })
                .then(response => response.json());
        });
    }
    ;
    get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({ path: path, method: 'GET' });
        });
    }
    getItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('/' + id);
        });
    }
    put(body, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({ path: path, method: 'PUT', body: body });
        });
    }
    post(body, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({ path: path, method: 'POST', body: body });
        });
    }
    save(body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!body._id) {
                throw new Error("Couldn't save object. There are no _id field.");
            }
            return this.post(body, '/' + body._id);
        });
    }
    delete(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request({ path: path, method: 'DELETE' });
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delete('/' + id);
        });
    }
}
exports.ApiRequestManager = ApiRequestManager;
//# sourceMappingURL=api-request-manager.class.js.map