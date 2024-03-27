"use strict";
/**
 * 新版农场
 * cron: 15 8-10,18-20 * * *
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
var h5st_4_2_1 = require("./utils/h5st_4.2");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_farm = /** @class */ (function (_super) {
    __extends(Jd_farm, _super);
    function Jd_farm() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_farm.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFp4_1()];
                    case 1:
                        _a.fp41 = _b.sent();
                        return [4 /*yield*/, this.run(this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_farm.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.h5st({
                            appid: 'signed_wh5',
                            body: body,
                            client: '',
                            clientVersion: '1.0.0',
                            functionId: fn,
                            t: timestamp
                        });
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action', "appid=signed_wh5&client=&clientVersion=1.0.0&t=".concat(timestamp, "&body=").concat(JSON.stringify(body), "&functionId=").concat(fn, "&h5st=").concat(h5st), {
                                'authority': 'api.m.jd.com',
                                'cookie': this.user.cookie,
                                'origin': 'https://h5.m.jd.com',
                                'referer': 'https://h5.m.jd.com/',
                                'user-agent': this.user.UserAgent,
                                'x-referer-page': 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html',
                                'x-rp-client': 'h5_1.0.0'
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_farm.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, bottleWater, inviteCode, _a, _b, t, taskSourceUrl, taskInsert, i, e_1_1, _c, _d, t, e_2_1, e_3;
            var e_1, _e, e_2, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 33, , 35]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;12.2.2;;;M/5.0;appBuild/168923;jdSupportDarkMode/0;ef/1;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.appId = 'c57f6';
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 1:
                        _g.sent();
                        return [4 /*yield*/, this.api('farm_home', { "version": 1 })];
                    case 2:
                        res = _g.sent();
                        this.o2s(res);
                        bottleWater = res.data.result.bottleWater;
                        console.log('💧', bottleWater);
                        inviteCode = res.data.result.farmHomeShare.inviteCode;
                        console.log('助力码', inviteCode);
                        this.shareCodeSelf.push(inviteCode);
                        return [4 /*yield*/, this.api('farm_task_list', { "version": 1, "channel": 0 })];
                    case 3:
                        res = _g.sent();
                        this.appId = '28981';
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 4:
                        _g.sent();
                        _g.label = 5;
                    case 5:
                        _g.trys.push([5, 19, 20, 21]);
                        _a = __values(res.data.result.taskList), _b = _a.next();
                        _g.label = 6;
                    case 6:
                        if (!!_b.done) return [3 /*break*/, 18];
                        t = _b.value;
                        if (!t.taskType.includes('BROWSE')) return [3 /*break*/, 12];
                        if (!!t.taskDoTimes) return [3 /*break*/, 11];
                        taskSourceUrl = t.taskSourceUrl, taskInsert = false;
                        if (!!t.taskSourceUrl) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.api('farm_task_detail', { "version": 1, "taskType": t.taskType, "taskId": t.taskId, "channel": 0 })];
                    case 7:
                        data = _g.sent();
                        taskSourceUrl = data.data.result.taskDetaiList[0].itemId;
                        taskInsert = true;
                        _g.label = 8;
                    case 8:
                        console.log('开始任务', t.mainTitle);
                        return [4 /*yield*/, this.api('farm_do_task', {
                                "version": 1, "taskType": t.taskType, "taskId": t.taskId, "taskInsert": taskInsert, "itemId": Buffer.from(taskSourceUrl, 'utf8').toString('base64'), "channel": 0
                            })];
                    case 9:
                        data = _g.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 10:
                        _g.sent();
                        data.data.bizCode === 0 ? console.log('任务完成') : console.log('任务失败', data);
                        _g.label = 11;
                    case 11: return [3 /*break*/, 17];
                    case 12:
                        if (!(t.taskType === 'CUMULATIVE_TIMES')) return [3 /*break*/, 17];
                        console.log("\u4ECA\u65E5\u6D47\u6C34".concat(t.taskDoTimes, "/10"));
                        i = 0;
                        _g.label = 13;
                    case 13:
                        if (!(i < 10 - t.taskDoTimes)) return [3 /*break*/, 17];
                        if (bottleWater < 10)
                            return [3 /*break*/, 17];
                        return [4 /*yield*/, this.api('farm_water', { "version": 1, "waterType": 1 })];
                    case 14:
                        data = _g.sent();
                        if (data.data.bizCode === 0) {
                            console.log('浇水成功', t.taskDoTimes + i + 1);
                            bottleWater = data.data.result.bottleWater;
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 15:
                        _g.sent();
                        _g.label = 16;
                    case 16:
                        i++;
                        return [3 /*break*/, 13];
                    case 17:
                        _b = _a.next();
                        return [3 /*break*/, 6];
                    case 18: return [3 /*break*/, 21];
                    case 19:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 21];
                    case 20:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 21: return [4 /*yield*/, this.api('farm_task_list', { "version": 1, "channel": 0 })];
                    case 22:
                        res = _g.sent();
                        this.appId = '33e0f';
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 23:
                        _g.sent();
                        _g.label = 24;
                    case 24:
                        _g.trys.push([24, 30, 31, 32]);
                        _c = __values(res.data.result.taskList), _d = _c.next();
                        _g.label = 25;
                    case 25:
                        if (!!_d.done) return [3 /*break*/, 29];
                        t = _d.value;
                        if (!(t.taskStatus === 2)) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.api('farm_task_receive_award', { "version": 1, "taskType": t.taskType, "taskId": t.taskId, "channel": 0 })];
                    case 26:
                        data = _g.sent();
                        console.log('领取奖励💧', data.data.result.taskAward[0].awardValue);
                        return [4 /*yield*/, this.wait(2000)];
                    case 27:
                        _g.sent();
                        _g.label = 28;
                    case 28:
                        _d = _c.next();
                        return [3 /*break*/, 25];
                    case 29: return [3 /*break*/, 32];
                    case 30:
                        e_2_1 = _g.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 32];
                    case 31:
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 32: return [3 /*break*/, 35];
                    case 33:
                        e_3 = _g.sent();
                        console.log(e_3.message);
                        return [4 /*yield*/, this.wait(30000)];
                    case 34:
                        _g.sent();
                        return [3 /*break*/, 35];
                    case 35: return [2 /*return*/];
                }
            });
        });
    };
    Jd_farm.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, users_1, users_1_1, user, shareCodePool, shareCode, shareCode_1, shareCode_1_1, code, e_4, e_5_1, e_6, e_7_1;
            var e_7, _a, e_5, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.appId = '28981';
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 23, 24, 25]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 22];
                        user = users_1_1.value;
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 18, , 19]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;12.2.2;;;M/5.0;appBuild/168923;jdSupportDarkMode/0;ef/1;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.getShareCodePool('farm2', 50)];
                    case 5:
                        shareCodePool = _c.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodePool), false)));
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 15, 16, 17]);
                        shareCode_1 = (e_5 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _c.label = 7;
                    case 7:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 14];
                        code = shareCode_1_1.value;
                        _c.label = 8;
                    case 8:
                        _c.trys.push([8, 10, , 11]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(this.shareCodeSelf.includes(code) ? '*内部*' : ''));
                        return [4 /*yield*/, this.api('farm_assist', { "version": 1, "inviteCode": code, "shareChannel": "ttt7", "assistChannel": "" })];
                    case 9:
                        res = _c.sent();
                        this.o2s(res, '助力结果');
                        if (res.code === 0 && res.data.bizCode === 0) {
                            console.log('助力成功');
                        }
                        else if (res.code === 0 && res.data.bizCode !== 0) {
                            console.log(res.data.bizMsg);
                        }
                        else {
                            console.log(res);
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        e_4 = _c.sent();
                        console.log(e_4.message);
                        return [3 /*break*/, 11];
                    case 11: return [4 /*yield*/, this.wait(5000)];
                    case 12:
                        _c.sent();
                        _c.label = 13;
                    case 13:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 7];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_5_1 = _c.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_b = shareCode_1.return)) _b.call(shareCode_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 17: return [3 /*break*/, 19];
                    case 18:
                        e_6 = _c.sent();
                        console.log(e_6);
                        return [3 /*break*/, 19];
                    case 19: return [4 /*yield*/, this.wait(60000)];
                    case 20:
                        _c.sent();
                        _c.label = 21;
                    case 21:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 22: return [3 /*break*/, 25];
                    case 23:
                        e_7_1 = _c.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 25];
                    case 24:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1.return)) _a.call(users_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_farm;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_farm().init().then();
