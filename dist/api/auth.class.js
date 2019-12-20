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
const api_request_manager_class_1 = require("./api-request-manager.class");
class Auth {
    constructor() {
        this.api = new api_request_manager_class_1.ApiRequestManager('auth/login', { noAuth: true });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.post({ username, password })
                .then((res) => {
                sessionStorage.setItem('access_token', res.access_token);
                if (!res.access_token || res.access_token.length === 0) {
                    throw new Error('Authorization failed!');
                }
                return res.access_token;
            });
        });
    }
    getToken() {
        return sessionStorage.getItem('access_token') || '';
    }
}
exports.Auth = Auth;
//# sourceMappingURL=auth.class.js.map