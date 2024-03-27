"use strict";
/**
 * 抽奖
 * cron: 5 0-3,20-22 * * *
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
var fs_1 = require("fs");
var jsdom_1 = require("jsdom");
var crypto_js_1 = require("crypto-js");
var Jd_fission = /** @class */ (function (_super) {
    __extends(Jd_fission, _super);
    function Jd_fission() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_fission.prototype.init = function () {
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
    Jd_fission.prototype.h5stToolInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dom;
            return __generator(this, function (_a) {
                dom = new jsdom_1.JSDOM("<body><script>".concat((0, fs_1.readFileSync)('utils/h5st_43.js').toString(), "</script></body>"), {
                    url: "http://localhost",
                    userAgent: this.user.UserAgent,
                    runScripts: "dangerously",
                    resources: new jsdom_1.ResourceLoader({
                        userAgent: this.user.UserAgent
                    }),
                    includeNodeLocations: true,
                    storageQuota: 1000000000,
                    pretendToBeVisual: true,
                    virtualConsole: new jsdom_1.VirtualConsole()
                });
                this.htstTool = new dom.window.ParamsSign({ appId: this.appId });
                return [2 /*return*/];
            });
        });
    };
    Jd_fission.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var t, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = Date.now();
                        return [4 /*yield*/, this.htstTool.sign({
                                appid: 'activities_platform',
                                body: crypto_js_1.default.SHA256(JSON.stringify(body)).toString(crypto_js_1.default.enc.Hex),
                                client: 'ios',
                                clientVersion: '12.3.2',
                                functionId: fn,
                                t: t
                            })];
                    case 1:
                        h5st = (_a.sent()).h5st;
                        return [4 /*yield*/, this.post('https://api.m.jd.com/api', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(t, "&appid=activities_platform&client=ios&clientVersion=12.3.2&h5st=").concat(h5st), {
                                'authority': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'origin': 'https://pro.m.jd.com',
                                'referer': 'https://pro.m.jd.com/mall/active/3BwUqhLsJYrHP4qgAgDDJGrSVngK/index.html',
                                'Cookie': this.user.cookie,
                                'x-referer-page': 'https://pro.m.jd.com/mall/active/3BwUqhLsJYrHP4qgAgDDJGrSVngK/index.html',
                                'x-rp-client': 'h5_1.0.0'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fission.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var j, res, data, linkId, lotteryTimes, i, end, i, _a, _b, t, e_1_1, e_2, e_3;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        j = 0;
                        _d.label = 1;
                    case 1:
                        if (!(j < 2)) return [3 /*break*/, 37];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 34, , 36]);
                        this.user = user;
                        this.user.UserAgent = j === 0
                            ? "jdapp;iPhone;12.3.2;;;M/5.0;appBuild/169031;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"
                            : "jdltapp;iPhone;6.3.0;;;M/5.0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;hasOCPay/0;appBuild/1372;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
                        this.appId = '02f8d';
                        return [4 /*yield*/, this.h5stToolInit()];
                    case 3:
                        _d.sent();
                        res = void 0, data = void 0;
                        linkId = j === 0 ? '3orGfh1YkwNLksxOcN8zWQ' : 'Wvzc_VpNTlSkiQdHT8r7QA';
                        return [4 /*yield*/, this.api('inviteFissionBeforeHome', { "linkId": linkId, "isJdApp": true, "inviter": "" })];
                    case 4:
                        res = _d.sent();
                        console.log('助力码', res.data.inviter);
                        this.shareCodeSelf.push(res.data.inviter);
                        return [4 /*yield*/, this.wait(1000)];
                    case 5:
                        _d.sent();
                        this.appId = 'eb67b';
                        return [4 /*yield*/, this.h5stToolInit()];
                    case 6:
                        _d.sent();
                        return [4 /*yield*/, this.api('inviteFissionHome', { "linkId": linkId, "inviter": "" })];
                    case 7:
                        res = _d.sent();
                        lotteryTimes = res.data.prizeNum;
                        console.log('可抽奖', lotteryTimes);
                        if (!lotteryTimes) return [3 /*break*/, 13];
                        this.appId = 'c02c6';
                        return [4 /*yield*/, this.h5stToolInit()];
                    case 8:
                        _d.sent();
                        i = 0;
                        _d.label = 9;
                    case 9:
                        if (!(i < lotteryTimes)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.api('inviteFissionDrawPrize', { "linkId": linkId })];
                    case 10:
                        data = _d.sent();
                        try {
                            if (data.data.prizeType === 2) {
                                console.log('🧧', data.data.prizeValue * 1);
                            }
                            else if (data.data.prizeType === 4) {
                                console.log('💰', data.data.prizeValue * 1);
                            }
                            else {
                                this.o2s(data, '抽到其他');
                            }
                        }
                        catch (e) {
                            console.log(e.message);
                            this.o2s(data);
                        }
                        return [4 /*yield*/, this.wait(8000)];
                    case 11:
                        _d.sent();
                        _d.label = 12;
                    case 12:
                        i++;
                        return [3 /*break*/, 9];
                    case 13:
                        this.appId = 'f2b1d';
                        return [4 /*yield*/, this.h5stToolInit()];
                    case 14:
                        _d.sent();
                        end = false;
                        i = 1;
                        _d.label = 15;
                    case 15:
                        if (!(i < 5)) return [3 /*break*/, 33];
                        console.log('page', i);
                        return [4 /*yield*/, this.api('superRedBagList', { "pageNum": i, "pageSize": 20, "linkId": linkId, "business": "fission" })];
                    case 16:
                        res = _d.sent();
                        if (end)
                            return [3 /*break*/, 33];
                        _d.label = 17;
                    case 17:
                        _d.trys.push([17, 29, , 30]);
                        _d.label = 18;
                    case 18:
                        _d.trys.push([18, 26, 27, 28]);
                        _a = (e_1 = void 0, __values(res.data.items)), _b = _a.next();
                        _d.label = 19;
                    case 19:
                        if (!!_b.done) return [3 /*break*/, 25];
                        t = _b.value;
                        if (!(t.prizeType === 4 && t.state === -1)) return [3 /*break*/, 20];
                        end = true;
                        return [3 /*break*/, 25];
                    case 20:
                        if (!(res.data.items.length < 20)) return [3 /*break*/, 21];
                        end = true;
                        return [3 /*break*/, 25];
                    case 21:
                        if (!(t.prizeType === 4 && t.state === 0)) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.api('apCashWithDraw', { "businessSource": "NONE", "base": { "id": t.id, "business": "fission", "poolBaseId": t.poolBaseId, "prizeGroupId": t.prizeGroupId, "prizeBaseId": t.prizeBaseId, "prizeType": 4 }, "linkId": linkId })];
                    case 22:
                        data = _d.sent();
                        console.log(data.data.message, data.data.record.amount * 1);
                        return [4 /*yield*/, this.wait(8000)];
                    case 23:
                        _d.sent();
                        if (data.data.message === '提现中')
                            return [3 /*break*/, 25];
                        _d.label = 24;
                    case 24:
                        _b = _a.next();
                        return [3 /*break*/, 19];
                    case 25: return [3 /*break*/, 28];
                    case 26:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 28];
                    case 27:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 28: return [3 /*break*/, 30];
                    case 29:
                        e_2 = _d.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 33];
                    case 30: return [4 /*yield*/, this.wait(8000)];
                    case 31:
                        _d.sent();
                        _d.label = 32;
                    case 32:
                        i++;
                        return [3 /*break*/, 15];
                    case 33: return [3 /*break*/, 36];
                    case 34:
                        e_3 = _d.sent();
                        console.log(e_3.message);
                        return [4 /*yield*/, this.wait(5000)];
                    case 35:
                        _d.sent();
                        return [3 /*break*/, 36];
                    case 36:
                        j++;
                        return [3 /*break*/, 1];
                    case 37: return [2 /*return*/];
                }
            });
        });
    };
    Jd_fission.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, shareCodeHW, j, users_1, users_1_1, user, shareCode, shareCode_1, shareCode_1_1, code, e_4_1, e_5, e_6_1;
            var e_6, _a, e_4, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        this.appId = 'c5389';
                        shareCodeHW = [];
                        j = 0;
                        _c.label = 1;
                    case 1:
                        if (!(j < 2)) return [3 /*break*/, 23];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 20, 21, 22]);
                        users_1 = (e_6 = void 0, __values(users)), users_1_1 = users_1.next();
                        _c.label = 3;
                    case 3:
                        if (!!users_1_1.done) return [3 /*break*/, 19];
                        user = users_1_1.value;
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 17, , 18]);
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getshareCodeHW('fission')];
                    case 5:
                        shareCodeHW = _c.sent();
                        _c.label = 6;
                    case 6:
                        this.user = user;
                        this.user.UserAgent = j === 0
                            ? "jdapp;iPhone;12.2.0;;;M/5.0;appBuild/168919;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;")
                            : "jdltapp;iPhone;6.3.0;;;M/5.0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;hasOCPay/0;appBuild/1372;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
                        return [4 /*yield*/, this.h5stToolInit()];
                    case 7:
                        _c.sent();
                        shareCode = __spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(this.shareCodeSelf), false);
                        _c.label = 8;
                    case 8:
                        _c.trys.push([8, 14, 15, 16]);
                        shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _c.label = 9;
                    case 9:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 13];
                        code = shareCode_1_1.value;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('inviteFissionhelp', { "linkId": j === 0 ? '3orGfh1YkwNLksxOcN8zWQ' : "Wvzc_VpNTlSkiQdHT8r7QA", "isJdApp": true, "inviter": code })];
                    case 10:
                        res = _c.sent();
                        this.o2s(res, 'inviteFissionhelp');
                        return [4 /*yield*/, this.wait(3000)];
                    case 11:
                        _c.sent();
                        if (!res.data.helpResult) {
                            console.log('!helpResult');
                            return [3 /*break*/, 12];
                        }
                        if (res.data.helpResult === 1) {
                            console.log('助力成功');
                            return [3 /*break*/, 13];
                        }
                        else if (res.data.helpResult === 3) {
                            console.log('上限');
                            return [3 /*break*/, 13];
                        }
                        _c.label = 12;
                    case 12:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 9];
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        e_4_1 = _c.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 16];
                    case 15:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_b = shareCode_1.return)) _b.call(shareCode_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        e_5 = _c.sent();
                        console.log(e_5.message);
                        return [3 /*break*/, 18];
                    case 18:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 3];
                    case 19: return [3 /*break*/, 22];
                    case 20:
                        e_6_1 = _c.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 22];
                    case 21:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1.return)) _a.call(users_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 22:
                        j++;
                        return [3 /*break*/, 1];
                    case 23: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fission;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fission().init().then();
