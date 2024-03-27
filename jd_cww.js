"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var h5st_pro_1 = require("./utils/h5st_pro");
var JDJRValidator = require("./utils/validate_single");
var date_fns_1 = require("date-fns");
var Cww = /** @class */ (function (_super) {
    __extends(Cww, _super);
    function Cww() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.fp = undefined;
        return _this;
    }
    Cww.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = process.env.FP_D7BFE;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.fp = _b;
                        return [4 /*yield*/, this.run(this)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Cww.prototype.beforeApi = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, params, _a, _b, key, beforeApiRes, validate;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                'appid': 'jdchoujiang_h5',
                                'body': JSON.stringify(body),
                                'client': 'iOS',
                                'clientVersion': '11.3.0',
                                'functionId': fn,
                                't': timestamp.toString()
                            })];
                    case 1:
                        h5st = _d.sent();
                        params = '';
                        try {
                            for (_a = __values(Object.keys(body)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                key = _b.value;
                                params += '&' + key + '=' + body[key];
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?client=iOS&clientVersion=11.3.0&appid=jdchoujiang_h5&t=".concat(timestamp, "&functionId=").concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st).concat(params), {
                                'Host': 'api.m.jd.com',
                                'Content-Type': 'application/json',
                                'Origin': 'https://h5.m.jd.com',
                                'Cookie': this.user.cookie,
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://h5.m.jd.com/',
                            })];
                    case 2:
                        beforeApiRes = _d.sent();
                        if (!JSON.stringify(beforeApiRes).includes("请进行验证")) return [3 /*break*/, 5];
                        return [4 /*yield*/, new JDJRValidator.JDJRValidator().run()];
                    case 3:
                        validate = (_d.sent()).validate;
                        console.log('validate', validate);
                        return [4 /*yield*/, this.beforeApi(fn, __assign(__assign({}, body), { validate: validate }))];
                    case 4: return [2 /*return*/, _d.sent()];
                    case 5: return [2 /*return*/, beforeApiRes];
                }
            });
        });
    };
    Cww.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, url, res, validate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                'appid': 'jdchoujiang_h5',
                                'body': JSON.stringify(body),
                                'client': '',
                                'clientVersion': '',
                                'functionId': fn,
                                't': timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        url = "https://api.m.jd.com/api?client=&clientVersion=&appid=jdchoujiang_h5&t=".concat(timestamp, "&functionId=").concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st);
                        return [4 /*yield*/, this.post(url, body, {
                                'Host': 'api.m.jd.com',
                                'Content-Type': 'application/json',
                                'Origin': 'https://h5.m.jd.com',
                                'Cookie': this.user.cookie,
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://h5.m.jd.com/',
                            })];
                    case 2:
                        res = _a.sent();
                        if (!JSON.stringify(res).includes("请进行验证")) return [3 /*break*/, 5];
                        return [4 /*yield*/, new JDJRValidator.JDJRValidator().run()];
                    case 3:
                        validate = (_a.sent()).validate;
                        console.log('validate', validate);
                        return [4 /*yield*/, this.api(fn, __assign(__assign({}, body), { validate: validate }))];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/, res];
                }
            });
        });
    };
    Cww.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, petFood, lastFeedTime, feedCount, _a, _b, t, _c, _d, raceUser, winCoin, _e, _f, t, _g, _h, followShops, e_2_1, _j, _k, followChannelList, e_3_1, _l, _m, scanMarketList, e_4_1, e_5_1, e_6;
            var e_7, _o, e_8, _p, e_5, _q, e_2, _r, e_3, _s, e_4, _t;
            return __generator(this, function (_u) {
                switch (_u.label) {
                    case 0:
                        _u.trys.push([0, 82, , 83]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.0;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('2bba1', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _u.sent();
                        return [4 /*yield*/, this.api('petEnterRoom', { "invitePin": "", "reqSource": "h5" })];
                    case 2:
                        res = _u.sent();
                        this.o2s(res, 'petEnterRoom');
                        petFood = res.data.petFood;
                        lastFeedTime = res.data.lastFeedTime;
                        console.log('狗粮', petFood);
                        console.log('lastFeedTime', (0, date_fns_1.format)(lastFeedTime, "yyyy-MM-dd HH:mm:ss"));
                        feedCount = 0;
                        try {
                            for (_a = __values([10, 20, 40, 80]), _b = _a.next(); !_b.done; _b = _a.next()) {
                                t = _b.value;
                                if (petFood < t) {
                                    break;
                                }
                                else {
                                    feedCount = t;
                                }
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_o = _a.return)) _o.call(_a);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                        if (!((0, date_fns_1.differenceInMinutes)(Date.now(), lastFeedTime) > 180 && feedCount)) return [3 /*break*/, 6];
                        this.h5stTool = new h5st_pro_1.H5ST('15dc2', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('feed', { "feedCount": feedCount, "reqSource": "h5" })];
                    case 4:
                        res = _u.sent();
                        console.log(res.errorCode);
                        return [4 /*yield*/, this.wait(3000)];
                    case 5:
                        _u.sent();
                        _u.label = 6;
                    case 6: return [4 /*yield*/, this.beforeApi('combatDetail', { "help": false, "reqSource": "h5" })];
                    case 7:
                        res = _u.sent();
                        this.o2s(res, 'combatDetail');
                        if (!(res.data.petRaceResult === 'participate')) return [3 /*break*/, 8];
                        console.log('比赛中');
                        try {
                            for (_c = __values(res.data.raceUsers), _d = _c.next(); !_d.done; _d = _c.next()) {
                                raceUser = _d.value;
                                raceUser.myself
                                    ? console.log(raceUser.nickName, raceUser.distance)
                                    : console.log('对手', raceUser.distance);
                            }
                        }
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_p = _c.return)) _p.call(_c);
                            }
                            finally { if (e_8) throw e_8.error; }
                        }
                        return [3 /*break*/, 18];
                    case 8:
                        if (!(res.data.petRaceResult === 'not_participate')) return [3 /*break*/, 15];
                        console.log('开始匹配');
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 9:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "race_match", "reqSource": "h5" })];
                    case 10:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 11:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "race_match", "reqSource": "h5" })];
                    case 12:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('6f192', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 13:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('combatMatch', { "teamLevel": "2", "reqSource": "h5" })];
                    case 14:
                        data = _u.sent();
                        this.o2s(data, 'combatMatch');
                        return [3 /*break*/, 18];
                    case 15:
                        if (!(res.data.petRaceResult === 'unreceive')) return [3 /*break*/, 18];
                        winCoin = res.data.winCoin;
                        this.h5stTool = new h5st_pro_1.H5ST('04889', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 16:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('combatReceive', { "reqSource": "h5" })];
                    case 17:
                        data = _u.sent();
                        console.log('赛跑获胜', winCoin);
                        _u.label = 18;
                    case 18:
                        this.h5stTool = new h5st_pro_1.H5ST('922a5', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 19:
                        _u.sent();
                        return [4 /*yield*/, this.api('petGetPetTaskConfig', { "reqSource": "h5" })];
                    case 20:
                        res = _u.sent();
                        this.o2s(res, 'petGetPetTaskConfig');
                        return [4 /*yield*/, this.wait(2000)];
                    case 21:
                        _u.sent();
                        _u.label = 22;
                    case 22:
                        _u.trys.push([22, 79, 80, 81]);
                        _e = __values(res.datas), _f = _e.next();
                        _u.label = 23;
                    case 23:
                        if (!!_f.done) return [3 /*break*/, 78];
                        t = _f.value;
                        if (!t.followShops) return [3 /*break*/, 40];
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 24:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_shop", "reqSource": "h5" })];
                    case 25:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 26:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_shop", "reqSource": "h5" })];
                    case 27:
                        data = _u.sent();
                        _u.label = 28;
                    case 28:
                        _u.trys.push([28, 38, 39, 40]);
                        _g = (e_2 = void 0, __values(t.followShops)), _h = _g.next();
                        _u.label = 29;
                    case 29:
                        if (!!_h.done) return [3 /*break*/, 37];
                        followShops = _h.value;
                        if (followShops.status)
                            return [3 /*break*/, 36];
                        console.log(t.taskName, followShops.name);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 30:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_shop", "linkAddr": followShops.shopId.toString(), "reqSource": "h5" })];
                    case 31:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 32:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_shop", "linkAddr": followShops.shopId.toString(), "reqSource": "h5" })];
                    case 33:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 34:
                        _u.sent();
                        return [4 /*yield*/, this.api('followShopColor', { 'shopId': followShops.shopId.toString(), 'reqSource': 'h5' })];
                    case 35:
                        data = _u.sent();
                        console.log('followShopColor', data.errorCode);
                        _u.label = 36;
                    case 36:
                        _h = _g.next();
                        return [3 /*break*/, 29];
                    case 37: return [3 /*break*/, 40];
                    case 38:
                        e_2_1 = _u.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 40];
                    case 39:
                        try {
                            if (_h && !_h.done && (_r = _g.return)) _r.call(_g);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 40:
                        if (!t.followChannelList) return [3 /*break*/, 59];
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 41:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_channel", "reqSource": "h5" })];
                    case 42:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('5f8cb', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 43:
                        _u.sent();
                        return [4 /*yield*/, this.api('getFollowChannels', { "reqSource": "h5" })];
                    case 44:
                        data = _u.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 45:
                        _u.sent();
                        _u.label = 46;
                    case 46:
                        _u.trys.push([46, 57, 58, 59]);
                        _j = (e_3 = void 0, __values(t.followChannelList)), _k = _j.next();
                        _u.label = 47;
                    case 47:
                        if (!!_k.done) return [3 /*break*/, 56];
                        followChannelList = _k.value;
                        if (followChannelList.status)
                            return [3 /*break*/, 55];
                        console.log(t.taskName, followChannelList.channelName);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 48:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_channel", "linkAddr": followChannelList.channelId, "reqSource": "h5" })];
                    case 49:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 50:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "code": "1624363341529274068136", "iconCode": "follow_channel", "linkAddr": followChannelList.channelId, "reqSource": "h5" })];
                    case 51:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 52:
                        _u.sent();
                        return [4 /*yield*/, this.api('scan', { 'channelId': followChannelList.channelId, 'taskType': 'FollowChannel', 'sid': '66594924', 'reqSource': 'h5' })];
                    case 53:
                        data = _u.sent();
                        console.log('scan', data.errorCode);
                        return [4 /*yield*/, this.wait(5000)];
                    case 54:
                        _u.sent();
                        _u.label = 55;
                    case 55:
                        _k = _j.next();
                        return [3 /*break*/, 47];
                    case 56: return [3 /*break*/, 59];
                    case 57:
                        e_3_1 = _u.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 59];
                    case 58:
                        try {
                            if (_k && !_k.done && (_s = _j.return)) _s.call(_j);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 59:
                        if (!t.scanMarketList) return [3 /*break*/, 73];
                        _u.label = 60;
                    case 60:
                        _u.trys.push([60, 71, 72, 73]);
                        _l = (e_4 = void 0, __values(t.scanMarketList)), _m = _l.next();
                        _u.label = 61;
                    case 61:
                        if (!!_m.done) return [3 /*break*/, 70];
                        scanMarketList = _m.value;
                        if (scanMarketList.status)
                            return [3 /*break*/, 69];
                        console.log(t.taskName, scanMarketList.marketName);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 62:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "scan_market", "linkAddr": scanMarketList.marketLinkH5, "reqSource": "h5" })];
                    case 63:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 64:
                        _u.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "scan_market", "linkAddr": scanMarketList.marketLinkH5, "reqSource": "h5" })];
                    case 65:
                        data = _u.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 66:
                        _u.sent();
                        return [4 /*yield*/, this.api('scan', { "marketLink": scanMarketList.marketLinkH5, "marketId": scanMarketList.marketLinkH5, "taskType": "ScanMarket", "sid": "66594924", "reqSource": "h5" })];
                    case 67:
                        data = _u.sent();
                        console.log('scanMarketList', data.errorCode);
                        return [4 /*yield*/, this.wait(5000)];
                    case 68:
                        _u.sent();
                        _u.label = 69;
                    case 69:
                        _m = _l.next();
                        return [3 /*break*/, 61];
                    case 70: return [3 /*break*/, 73];
                    case 71:
                        e_4_1 = _u.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 73];
                    case 72:
                        try {
                            if (_m && !_m.done && (_t = _l.return)) _t.call(_l);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 73:
                        if (!(t.receiveStatus === 'unreceive')) return [3 /*break*/, 77];
                        this.h5stTool = new h5st_pro_1.H5ST('6917d', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 74:
                        _u.sent();
                        return [4 /*yield*/, this.api('getFood', { "taskType": t.taskType, "reqSource": "h5" })];
                    case 75:
                        data = _u.sent();
                        this.o2s(data, '领取奖励');
                        console.log('领取奖励', t.taskName, data.data);
                        return [4 /*yield*/, this.wait(1000)];
                    case 76:
                        _u.sent();
                        _u.label = 77;
                    case 77:
                        _f = _e.next();
                        return [3 /*break*/, 23];
                    case 78: return [3 /*break*/, 81];
                    case 79:
                        e_5_1 = _u.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 81];
                    case 80:
                        try {
                            if (_f && !_f.done && (_q = _e.return)) _q.call(_e);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 81: return [3 /*break*/, 83];
                    case 82:
                        e_6 = _u.sent();
                        console.log(e_6.message);
                        return [3 /*break*/, 83];
                    case 83: return [2 /*return*/];
                }
            });
        });
    };
    return Cww;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Cww().init().then();
