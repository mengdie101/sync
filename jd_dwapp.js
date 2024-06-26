"use strict";
/**
 * 京东-生活积分
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_dwapp = /** @class */ (function (_super) {
    __extends(Jd_dwapp, _super);
    function Jd_dwapp() {
        return _super.call(this) || this;
    }
    Jd_dwapp.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_dwapp.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post("https://api.m.jd.com/api?functionId=".concat(fn), new URLSearchParams({
                            'appid': 'h5-sep',
                            'functionId': fn,
                            'body': JSON.stringify(this.getEncStr(fn, body)),
                            'client': 'm',
                            'clientVersion': '6.0.0'
                        }), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://prodev.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://prodev.m.jd.com/mall/active/eEcYM32eezJB7YX4SBihziJCiGV/index.html',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_dwapp.prototype.task = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = fn === 'dwSignInfo' ? fn : "task/".concat(fn);
                        return [4 /*yield*/, this.post("https://dwapp.jd.com/user/".concat(url), this.getEncStr(fn, body), {
                                'Host': 'dwapp.jd.com',
                                'Origin': 'https://prodev.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://prodev.m.jd.com/mall/active/eEcYM32eezJB7YX4SBihziJCiGV/index.html',
                                'Cookie': this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_dwapp.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, _b, t, e_1_1;
            var e_1, _c;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.task('dwSignInfo', {})];
                    case 1:
                        res = _e.sent();
                        if (!(res.data.signInfo.signStatus !== 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.api('DATAWALLET_USER_SIGN', {})];
                    case 2:
                        res = _e.sent();
                        console.log('签到成功', res.data.signInfo.signNum);
                        return [3 /*break*/, 4];
                    case 3:
                        console.log('已签到');
                        _e.label = 4;
                    case 4: return [4 /*yield*/, this.api('dwapp_task_dwList', {})];
                    case 5:
                        res = _e.sent();
                        _e.label = 6;
                    case 6:
                        _e.trys.push([6, 15, 16, 17]);
                        _a = __values(res.data), _b = _a.next();
                        _e.label = 7;
                    case 7:
                        if (!!_b.done) return [3 /*break*/, 14];
                        t = _b.value;
                        if (!(t.viewStatus === 0)) return [3 /*break*/, 11];
                        console.log(t.name);
                        return [4 /*yield*/, this.task('dwRecord', { id: t.id, "taskType": t.taskType, "agentNum": "m", "followChannelStatus": "" })];
                    case 8:
                        res = _e.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(4000)];
                    case 9:
                        _e.sent();
                        return [4 /*yield*/, this.task('dwReceive', { id: t.id })];
                    case 10:
                        res = _e.sent();
                        console.log((_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.giveScoreNum);
                        _e.label = 11;
                    case 11: return [4 /*yield*/, this.wait(6000)];
                    case 12:
                        _e.sent();
                        _e.label = 13;
                    case 13:
                        _b = _a.next();
                        return [3 /*break*/, 7];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 17: return [4 /*yield*/, this.wait(120000)];
                    case 18:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Jd_dwapp;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_dwapp().init().then();
