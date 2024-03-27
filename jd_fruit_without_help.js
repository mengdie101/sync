"use strict";
/**
 * 京东-种树
 * 不带水滴助力
 * cron: 35 7,13,20 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var date_fns_1 = require("date-fns");
var Jd_fruit = /** @class */ (function (_super) {
    __extends(Jd_fruit, _super);
    function Jd_fruit() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.fp = undefined;
        return _this;
    }
    Jd_fruit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _a.fp = _b.sent();
                        return [4 /*yield*/, this.run(this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                'appid': 'signed_wh5',
                                'body': JSON.stringify(body),
                                'client': 'iOS',
                                'clientVersion': '11.3.0',
                                'functionId': fn,
                            })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=signed_wh5&timestamp=").concat(timestamp, "&client=iOS&clientVersion=11.3.0&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://carry.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://carry.m.jd.com/',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit.prototype.friendListInitForFarm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=friendListInitForFarm&body=%7B%22lastId%22%3Anull%2C%22version%22%3A18%2C%22channel%22%3A1%2C%22babelChannel%22%3A%2210%22%7D&appid=wh5&timestamp=".concat(Date.now(), "&client=iOS&clientVersion=11.3.0"), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://carry.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://carry.m.jd.com/',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, totalEnergy, _a, _b, t, e_1_1, i, i, _c, _d, t, e_2_1, friendList, finishCount, _e, _f, t, e_3_1, _g, _h, t, e_4_1, _j, _k, t, e_5_1, i, e_6;
            var e_1, _l, e_2, _m, e_3, _o, e_4, _p, e_5, _q;
            var _r;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        _s.trys.push([0, 119, , 120]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.0;;;M/5.0;appBuild/168341;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('8a2af', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _s.sent();
                        return [4 /*yield*/, this.api('initForFarm', { "babelChannel": "10", "sid": "", "un_area": "", "version": 18, "channel": 1 })];
                    case 2:
                        res = _s.sent();
                        if (res.code === '0') {
                            console.log('助力码', res.farmUserPro.shareCode);
                            this.shareCodeSelf.push(res.farmUserPro.shareCode);
                        }
                        else if (res.code === '3') {
                            console.log('Cookie过期');
                            return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\nCookie\u8FC7\u671F\n") }];
                        }
                        else {
                            this.o2s(res, '初始化失败');
                            process.exit(0);
                        }
                        totalEnergy = res.farmUserPro.totalEnergy;
                        console.log('🌲', res.farmUserPro.treeEnergy);
                        if (res.farmUserPro.treeEnergy === res.farmUserPro.treeTotalEnergy) {
                            return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u79CD\u6811\u6210\u719F\n") }];
                        }
                        if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 5];
                        this.h5stTool = new h5st_pro_1.H5ST('c901b', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _s.sent();
                        return [4 /*yield*/, this.api('gotWaterGoalTaskForFarm', { "type": 3, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 4:
                        data = _s.sent();
                        console.log('弹窗水滴💧', data.addEnergy);
                        _s.label = 5;
                    case 5:
                        // 背包
                        this.h5stTool = new h5st_pro_1.H5ST('157b6', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 6:
                        _s.sent();
                        return [4 /*yield*/, this.api('myCardInfoForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 7:
                        res = _s.sent();
                        if (!(res.doubleCard && totalEnergy >= 100)) return [3 /*break*/, 13];
                        console.log('水滴翻倍卡数量', res.doubleCard);
                        this.h5stTool = new h5st_pro_1.H5ST('86ba5', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 8:
                        _s.sent();
                        _s.label = 9;
                    case 9:
                        if (!(res.doubleCard > 0)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.api('userMyCardForFarm', { "cardType": "doubleCard", "type": "", "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 10:
                        data = _s.sent();
                        data.code === '0' && console.log('使用水滴翻倍卡', data.addWater);
                        return [4 /*yield*/, this.wait(1000)];
                    case 11:
                        _s.sent();
                        _s.label = 12;
                    case 12:
                        --res.doubleCard;
                        return [3 /*break*/, 9];
                    case 13: return [4 /*yield*/, this.api('initForTurntableFarm', { "version": 4, "channel": 1 })];
                    case 14:
                        res = _s.sent();
                        _s.label = 15;
                    case 15:
                        _s.trys.push([15, 22, 23, 24]);
                        _a = __values(res.turntableBrowserAds), _b = _a.next();
                        _s.label = 16;
                    case 16:
                        if (!!_b.done) return [3 /*break*/, 21];
                        t = _b.value;
                        if (!!t.status) return [3 /*break*/, 20];
                        console.log(t.main);
                        return [4 /*yield*/, this.api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
                    case 17:
                        _s.sent();
                        return [4 /*yield*/, this.wait(t.browserTimes * 1000 || 1000)];
                    case 18:
                        _s.sent();
                        return [4 /*yield*/, this.api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
                    case 19:
                        data = _s.sent();
                        data.code === '0' && console.log('抽奖次数', data.totalTimes);
                        _s.label = 20;
                    case 20:
                        _b = _a.next();
                        return [3 /*break*/, 16];
                    case 21: return [3 /*break*/, 24];
                    case 22:
                        e_1_1 = _s.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 24];
                    case 23:
                        try {
                            if (_b && !_b.done && (_l = _a.return)) _l.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 24: return [4 /*yield*/, this.api('initForTurntableFarm', { "version": 4, "channel": 1 })];
                    case 25:
                        res = _s.sent();
                        if (!(!res.timingGotStatus && Date.now() > (0, date_fns_1.getTime)((0, date_fns_1.addHours)(res.timingLastSysTime, 4)))) return [3 /*break*/, 27];
                        return [4 /*yield*/, this.api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
                    case 26:
                        data = _s.sent();
                        data.code === '0' && console.log('抽奖次数+', data.addTimes);
                        _s.label = 27;
                    case 27:
                        i = 0;
                        _s.label = 28;
                    case 28:
                        if (!(i < res.remainLotteryTimes)) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
                    case 29:
                        data = _s.sent();
                        console.log('抽奖结果', data.type);
                        return [4 /*yield*/, this.wait(3000)];
                    case 30:
                        _s.sent();
                        _s.label = 31;
                    case 31:
                        i++;
                        return [3 /*break*/, 28];
                    case 32:
                        // 任务列表
                        this.h5stTool = new h5st_pro_1.H5ST('fcb5a', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 33:
                        _s.sent();
                        return [4 /*yield*/, this.api('taskInitForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 34:
                        res = _s.sent();
                        if (!((_r = res['treasureBoxInit-getBean']) === null || _r === void 0 ? void 0 : _r.f)) {
                        }
                        if (!!res.totalWaterTaskInit.f) return [3 /*break*/, 43];
                        this.h5stTool = new h5st_pro_1.H5ST('0c010', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 35:
                        _s.sent();
                        i = 0;
                        _s.label = 36;
                    case 36:
                        if (!(i < 10 - res.totalWaterTaskTimes)) return [3 /*break*/, 40];
                        return [4 /*yield*/, this.api('waterGoodForFarm', { "type": "", "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 37:
                        data = _s.sent();
                        if (data.code === '0') {
                            console.log('💧', data.totalEnergy);
                            console.log('🌲', data.treeEnergy);
                        }
                        else {
                            console.log('浇水失败', data);
                            return [3 /*break*/, 40];
                        }
                        return [4 /*yield*/, this.wait(5000)];
                    case 38:
                        _s.sent();
                        _s.label = 39;
                    case 39:
                        i++;
                        return [3 /*break*/, 36];
                    case 40:
                        this.h5stTool = new h5st_pro_1.H5ST('102f5', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 41:
                        _s.sent();
                        return [4 /*yield*/, this.api('totalWaterTaskForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 42:
                        data = _s.sent();
                        data.code === '0' && console.log('十次奖励💧', data.totalWaterTaskEnergy);
                        _s.label = 43;
                    case 43:
                        if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes)) return [3 /*break*/, 46];
                        this.h5stTool = new h5st_pro_1.H5ST('0cf1e', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 44:
                        _s.sent();
                        return [4 /*yield*/, this.api('firstWaterTaskForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 45:
                        data = _s.sent();
                        data.code === '0' && console.log('首次奖励💧', data.amount);
                        _s.label = 46;
                    case 46:
                        if (!!res.gotThreeMealInit.f) return [3 /*break*/, 49];
                        if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 49];
                        return [4 /*yield*/, this.api('gotThreeMealForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 47:
                        data = _s.sent();
                        data.code === '0' && console.log('定时奖励💧', data.amount);
                        return [4 /*yield*/, this.wait(1000)];
                    case 48:
                        _s.sent();
                        _s.label = 49;
                    case 49:
                        if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 61];
                        this.h5stTool = new h5st_pro_1.H5ST('53f09', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 50:
                        _s.sent();
                        _s.label = 51;
                    case 51:
                        _s.trys.push([51, 59, 60, 61]);
                        _c = __values(res.gotBrowseTaskAdInit.userBrowseTaskAds), _d = _c.next();
                        _s.label = 52;
                    case 52:
                        if (!!_d.done) return [3 /*break*/, 58];
                        t = _d.value;
                        if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 57];
                        console.log(t.mainTitle);
                        return [4 /*yield*/, this.api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 53:
                        data = _s.sent();
                        data.code === '0' && console.log('任务完成');
                        return [4 /*yield*/, this.wait(t.time * 1000 || 2000)];
                    case 54:
                        _s.sent();
                        return [4 /*yield*/, this.api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 55:
                        data = _s.sent();
                        data.code === '0' && console.log('领奖成功💧', data.amount);
                        return [4 /*yield*/, this.wait(1000)];
                    case 56:
                        _s.sent();
                        _s.label = 57;
                    case 57:
                        _d = _c.next();
                        return [3 /*break*/, 52];
                    case 58: return [3 /*break*/, 61];
                    case 59:
                        e_2_1 = _s.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 61];
                    case 60:
                        try {
                            if (_d && !_d.done && (_m = _c.return)) _m.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 61:
                        if (!(!res.waterRainInit.f && Date.now() > (0, date_fns_1.getTime)((0, date_fns_1.addHours)(res.lastTime || 1669906397000, 4)))) return [3 /*break*/, 65];
                        this.h5stTool = new h5st_pro_1.H5ST('9983a', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 62:
                        _s.sent();
                        return [4 /*yield*/, this.api('waterRainForFarm', { "type": 1, "hongBaoTimes": 99, "version": 14, "channel": 1 })];
                    case 63:
                        data = _s.sent();
                        data.code === '0' ? console.log('红包雨💧', data.addEnergy) : this.o2s(data, '红包雨error');
                        return [4 /*yield*/, this.wait(1000)];
                    case 64:
                        _s.sent();
                        _s.label = 65;
                    case 65:
                        if (!!res.waterFriendTaskInit.f) return [3 /*break*/, 81];
                        return [4 /*yield*/, this.friendListInitForFarm()];
                    case 66:
                        friendList = _s.sent();
                        finishCount = 0;
                        _s.label = 67;
                    case 67:
                        _s.trys.push([67, 76, 77, 78]);
                        _e = __values(friendList.friends), _f = _e.next();
                        _s.label = 68;
                    case 68:
                        if (!!_f.done) return [3 /*break*/, 75];
                        t = _f.value;
                        if (!(t.friendState === 1)) return [3 /*break*/, 74];
                        console.log("\u5E2E\u597D\u53CB ".concat(t.nickName, " ").concat(t.shareCode, " \u6D47\u6C34"));
                        this.h5stTool = new h5st_pro_1.H5ST('a5a9c', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 69:
                        _s.sent();
                        return [4 /*yield*/, this.api('friendInitForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 70:
                        _s.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('673a0', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 71:
                        _s.sent();
                        return [4 /*yield*/, this.api('waterFriendForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 72:
                        data = _s.sent();
                        if (data.code === '0') {
                            console.log('帮助成功');
                            finishCount++;
                        }
                        else {
                            this.o2s(data, '帮助失败');
                            return [3 /*break*/, 75];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 73:
                        _s.sent();
                        if (finishCount === 2)
                            return [3 /*break*/, 75];
                        _s.label = 74;
                    case 74:
                        _f = _e.next();
                        return [3 /*break*/, 68];
                    case 75: return [3 /*break*/, 78];
                    case 76:
                        e_3_1 = _s.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 78];
                    case 77:
                        try {
                            if (_f && !_f.done && (_o = _e.return)) _o.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 78:
                        this.h5stTool = new h5st_pro_1.H5ST('d08ff', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 79:
                        _s.sent();
                        return [4 /*yield*/, this.api('waterFriendGotAwardForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 80:
                        data = _s.sent();
                        console.log('帮好友浇水奖励💧', data.addWater);
                        _s.label = 81;
                    case 81:
                        // 签到页面
                        this.h5stTool = new h5st_pro_1.H5ST('08dc3', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 82:
                        _s.sent();
                        return [4 /*yield*/, this.api('clockInInitForFarm', { "timestamp": Date.now(), "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 83:
                        res = _s.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('4a0b4', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 84:
                        _s.sent();
                        _s.label = 85;
                    case 85:
                        _s.trys.push([85, 92, 93, 94]);
                        _g = __values(res.themes || []), _h = _g.next();
                        _s.label = 86;
                    case 86:
                        if (!!_h.done) return [3 /*break*/, 91];
                        t = _h.value;
                        if (!!t.hadGot) return [3 /*break*/, 90];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 87:
                        _s.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 88:
                        _s.sent();
                        return [4 /*yield*/, this.api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 89:
                        data = _s.sent();
                        data.code === '0' && console.log('关注成功💧', data.amount);
                        _s.label = 90;
                    case 90:
                        _h = _g.next();
                        return [3 /*break*/, 86];
                    case 91: return [3 /*break*/, 94];
                    case 92:
                        e_4_1 = _s.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 94];
                    case 93:
                        try {
                            if (_h && !_h.done && (_p = _g.return)) _p.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 94:
                        if (!!res.todaySigned) return [3 /*break*/, 98];
                        this.h5stTool = new h5st_pro_1.H5ST('32b94', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 95:
                        _s.sent();
                        return [4 /*yield*/, this.api('clockInForFarm', { "type": 1, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 96:
                        data = _s.sent();
                        data.code === '0' ? console.log('签到成功', data.amount) : this.o2s(data, '签到失败');
                        return [4 /*yield*/, this.wait(2000)];
                    case 97:
                        _s.sent();
                        return [3 /*break*/, 99];
                    case 98:
                        console.log('已签到');
                        _s.label = 99;
                    case 99:
                        if (!(res.totalSigned === 7 && !res.gotClockInGift)) return [3 /*break*/, 101];
                        return [4 /*yield*/, this.api('clockInForFarm', { "type": 2, "version": 19, "channel": 1, "babelChannel": "10", "lat": "0", "lng": "0" })];
                    case 100:
                        data = _s.sent();
                        console.log('签到7天奖励', data.amount);
                        _s.label = 101;
                    case 101:
                        // 删除好友
                        this.h5stTool = new h5st_pro_1.H5ST('eaf91', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 102:
                        _s.sent();
                        return [4 /*yield*/, this.friendListInitForFarm()];
                    case 103:
                        res = _s.sent();
                        _s.label = 104;
                    case 104:
                        _s.trys.push([104, 110, 111, 112]);
                        _j = __values(res.friends), _k = _j.next();
                        _s.label = 105;
                    case 105:
                        if (!!_k.done) return [3 /*break*/, 109];
                        t = _k.value;
                        return [4 /*yield*/, this.api('deleteFriendForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 106:
                        data = _s.sent();
                        if (data.code === '0') {
                            console.log("\u5220\u9664\u597D\u53CB ".concat(t.nickName, " \u6210\u529F"));
                        }
                        else {
                            console.log("\u5220\u9664\u5931\u8D25 ".concat(t.nickName, " \u5931\u8D25"), data);
                            return [3 /*break*/, 109];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 107:
                        _s.sent();
                        _s.label = 108;
                    case 108:
                        _k = _j.next();
                        return [3 /*break*/, 105];
                    case 109: return [3 /*break*/, 112];
                    case 110:
                        e_5_1 = _s.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 112];
                    case 111:
                        try {
                            if (_k && !_k.done && (_q = _j.return)) _q.call(_j);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 112:
                        // 点鸭子
                        this.h5stTool = new h5st_pro_1.H5ST('5c767', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 113:
                        _s.sent();
                        i = 0;
                        _s.label = 114;
                    case 114:
                        if (!(i < 10)) return [3 /*break*/, 118];
                        return [4 /*yield*/, this.api('getFullCollectionReward', { "type": 2, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 115:
                        data = _s.sent();
                        if (data.code === '0') {
                            data.title === '小鸭子为你带回了水滴' ? console.log(data.title, data.addWater) : console.log(data.title);
                        }
                        else if (data.code === '10' || data.hasLimit) {
                            console.log('鸭子上限');
                            return [3 /*break*/, 118];
                        }
                        return [4 /*yield*/, this.wait(5000)];
                    case 116:
                        _s.sent();
                        _s.label = 117;
                    case 117:
                        i++;
                        return [3 /*break*/, 114];
                    case 118: return [3 /*break*/, 120];
                    case 119:
                        e_6 = _s.sent();
                        console.log('error', e_6.message);
                        return [3 /*break*/, 120];
                    case 120: return [4 /*yield*/, this.wait(30000)];
                    case 121:
                        _s.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, users_1, users_1_1, user, shareCodePool, shareCode, shareCode_1, shareCode_1_1, code, e_7, e_8_1, e_9_1;
            var e_9, _a, e_8, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (new Date().getHours() > 12)
                            return [2 /*return*/];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 17, 18, 19]);
                        users_1 = __values(users), users_1_1 = users_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!users_1_1.done) return [3 /*break*/, 16];
                        user = users_1_1.value;
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.4;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_pro_1.H5ST('8a2af', this.user.UserAgent, this.fp, 'https://carry.m.jd.com/', 'https://carry.m.jd.com/');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 4:
                        shareCodePool = _c.sent();
                        shareCode = __spreadArray(__spreadArray([], __read(this.shareCodeSelf), false), __read(shareCodePool), false);
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 13, 14, 15]);
                        shareCode_1 = (e_8 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                        _c.label = 6;
                    case 6:
                        if (!!shareCode_1_1.done) return [3 /*break*/, 12];
                        code = shareCode_1_1.value;
                        _c.label = 7;
                    case 7:
                        _c.trys.push([7, 10, , 11]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(this.shareCodeSelf.includes(code) ? '*内部*' : ''));
                        return [4 /*yield*/, this.api('initForFarm', { "shareCode": "".concat(code, "-3"), "sid": "", "un_area": "", "version": 18, "channel": 1, "babelChannel": 0 })];
                    case 8:
                        res = _c.sent();
                        if (res.code === '0') {
                            console.log('红包助力成功');
                        }
                        else if (res.code === '11') {
                            console.log('红包已助力过');
                        }
                        else if (res.code === '13') {
                            console.log('红包助力上限');
                            return [3 /*break*/, 12];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 9:
                        _c.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_7 = _c.sent();
                        console.log(e_7.message);
                        return [3 /*break*/, 12];
                    case 11:
                        shareCode_1_1 = shareCode_1.next();
                        return [3 /*break*/, 6];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_8_1 = _c.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (shareCode_1_1 && !shareCode_1_1.done && (_b = shareCode_1.return)) _b.call(shareCode_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                        return [7 /*endfinally*/];
                    case 15:
                        users_1_1 = users_1.next();
                        return [3 /*break*/, 2];
                    case 16: return [3 /*break*/, 19];
                    case 17:
                        e_9_1 = _c.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 19];
                    case 18:
                        try {
                            if (users_1_1 && !users_1_1.done && (_a = users_1.return)) _a.call(users_1);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit().init().then();
