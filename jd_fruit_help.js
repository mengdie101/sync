"use strict";
/**
 * 种树助力
 * cron: 35 0,6,12,18,23 * * *
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var crypto_js_1 = require("crypto-js");
var Jd_fruit_help = /** @class */ (function (_super) {
    __extends(Jd_fruit_help, _super);
    function Jd_fruit_help() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_fruit_help.prototype.init = function () {
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
    Jd_fruit_help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        return [4 /*yield*/, this.h5stTool.sign({
                                appid: 'signed_wh5',
                                body: crypto_js_1.default.SHA256(JSON.stringify(body)).toString(crypto_js_1.default.enc.Hex),
                                client: 'iOS',
                                clientVersion: '12.3.2',
                                functionId: fn,
                                t: timestamp
                            })];
                    case 1:
                        h5st = (_a.sent()).h5st;
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=signed_wh5&timestamp=").concat(timestamp, "&client=iOS&clientVersion=12.3.2&h5st=").concat(h5st), {
                                'authority': 'api.m.jd.com',
                                'cookie': this.user.cookie,
                                'origin': 'https://carry.m.jd.com',
                                'referer': 'https://carry.m.jd.com/',
                                'user-agent': this.user.UserAgent,
                                'x-referer-page': 'https://carry.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html',
                                'x-rp-client': 'h5_1.0.0'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit_help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.user = user;
                        this.h5stTool = this.h5st('42', '8a2af', this.user.UserAgent);
                        return [4 /*yield*/, this.api('initForFarm', { "babelChannel": "522", "version": 26, "channel": 1, "lat": "0", "lng": "0" })];
                    case 1:
                        res = _a.sent();
                        console.log('助力码', res['farmUserPro'].shareCode);
                        this.shareCodeSelf.push(res['farmUserPro'].shareCode);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('获取失败', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [4 /*yield*/, this.wait(5000)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit_help.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, users_1, users_1_1, user, shareCodePool, shareCode, shareCode_1, shareCode_1_1, code, e_2, e_3_1, e_4, e_5_1;
            var e_5, _a, e_3, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 21, 22, 23]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _c.label = 1;
                    case 1:
                        if (!!users_1_1.done) return [3 /*break*/, 20];
                        user = users_1_1.value;
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 16, , 17]);
                        this.user = user;
                        this.h5stTool = this.h5st('42', '8a2af', this.user.UserAgent);
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 3:
                        shareCodePool = _c.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodePool), false)));
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 13, 14, 15]);
                        shareCode_1 = (e_3 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _c.label = 5;
                    case 5:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 12];
                        code = shareCode_1_1.value;
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('initForFarm', { "babelChannel": "522", "shareCode": code, "mpin": "", "from": "kouling", "version": 26, "channel": 1, "lat": "0", "lng": "0" })];
                    case 7:
                        res = _c.sent();
                        console.log('剩余助力', res.helpResult.remainTimes, '助力结果', res.helpResult.code);
                        if (res.helpResult.remainTimes === 0) {
                            console.log('上限');
                            return [3 /*break*/, 12];
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_2 = _c.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 9];
                    case 9: return [4 /*yield*/, this.wait(5000)];
                    case 10:
                        _c.sent();
                        _c.label = 11;
                    case 11:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 5];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_3_1 = _c.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_b = shareCode_1.return)) _b.call(shareCode_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        e_4 = _c.sent();
                        console.log(e_4);
                        return [3 /*break*/, 17];
                    case 17: return [4 /*yield*/, this.wait(15000)];
                    case 18:
                        _c.sent();
                        _c.label = 19;
                    case 19:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 1];
                    case 20: return [3 /*break*/, 23];
                    case 21:
                        e_5_1 = _c.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 23];
                    case 22:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1.return)) _a.call(users_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 23: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit_help().init().then();
