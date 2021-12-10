"use strict";
/**
 * 京东-锦鲤红包
 * 做任务、助力、开红包
 * cron: 1 0,6,18 * * *
 * 固定log，不知道什么时候会gg
 * CK1助力顺序
 * HW.ts -> 内部
 */
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
        while (_) try {
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName;
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, e_1, e_2_1, _d, _e, _f, index, value, shareCodes_1, shareCodes_1_1, code, e_3_1, e_4_1, _g, _h, _j, index, value, _k, _l, t, _m, _o, tp, e_5_1, e_6_1, j, _p, _q, t, e_7_1, e_8, e_9_1;
    var e_2, _r, e_4, _s, e_3, _t, e_9, _u, e_6, _v, e_5, _w, e_7, _x;
    return __generator(this, function (_y) {
        switch (_y.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _y.sent();
                _y.label = 2;
            case 2:
                _y.trys.push([2, 11, 12, 13]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _y.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 10];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                _y.label = 4;
            case 4:
                _y.trys.push([4, 8, , 9]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~0iuxyee"), "sceneid": "JLHBhPageh5" })];
            case 5:
                res = _y.sent();
                console.log('活动初始化：', res.data.result.statusDesc);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _y.sent();
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 7:
                res = _y.sent();
                console.log('红包ID：', res.data.result.redpacketInfo.id);
                shareCodesSelf.push(res.data.result.redpacketInfo.id);
                return [3 /*break*/, 9];
            case 8:
                e_1 = _y.sent();
                console.log(e_1);
                return [3 /*break*/, 9];
            case 9:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_2_1 = _y.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (_b && !_b.done && (_r = _a["return"])) _r.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 13:
                console.log('内部助力：', shareCodesSelf);
                _y.label = 14;
            case 14:
                _y.trys.push([14, 28, 29, 30]);
                _d = __values(cookiesArr.entries()), _e = _d.next();
                _y.label = 15;
            case 15:
                if (!!_e.done) return [3 /*break*/, 27];
                _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 17];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
            case 16:
                shareCodesHW = _y.sent();
                _y.label = 17;
            case 17:
                if (index === 0) {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                }
                _y.label = 18;
            case 18:
                _y.trys.push([18, 24, 25, 26]);
                shareCodes_1 = (e_3 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _y.label = 19;
            case 19:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 23];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~0gga2ik"), "sceneid": "JLHBhPageh5" })];
            case 20:
                res = _y.sent();
                if (res.data.result.status === 0) {
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                }
                else if (res.data.result.status === 3) {
                    console.log('今日助力次数已满');
                    return [3 /*break*/, 23];
                }
                else {
                    console.log('助力结果：', res.data.result.statusDesc);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _y.sent();
                _y.label = 22;
            case 22:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 19];
            case 23: return [3 /*break*/, 26];
            case 24:
                e_3_1 = _y.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 26];
            case 25:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_t = shareCodes_1["return"])) _t.call(shareCodes_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 26:
                _e = _d.next();
                return [3 /*break*/, 15];
            case 27: return [3 /*break*/, 30];
            case 28:
                e_4_1 = _y.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 30];
            case 29:
                try {
                    if (_e && !_e.done && (_s = _d["return"])) _s.call(_d);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 30:
                _y.trys.push([30, 72, 73, 74]);
                _g = __values(cookiesArr.entries()), _h = _g.next();
                _y.label = 31;
            case 31:
                if (!!_h.done) return [3 /*break*/, 71];
                _j = __read(_h.value, 2), index = _j[0], value = _j[1];
                _y.label = 32;
            case 32:
                _y.trys.push([32, 69, , 70]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('taskHomePage', {})];
            case 33:
                // 做任务
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 34:
                _y.sent();
                _y.label = 35;
            case 35:
                _y.trys.push([35, 54, 55, 56]);
                _k = (e_6 = void 0, __values(res.data.result.taskInfos)), _l = _k.next();
                _y.label = 36;
            case 36:
                if (!!_l.done) return [3 /*break*/, 53];
                t = _l.value;
                if (!(!t.alreadyReceivedCount || t.alreadyReceivedCount < t.requireCount)) return [3 /*break*/, 49];
                if (![2, 3, 4, 5, 8].includes(t.taskType)) return [3 /*break*/, 49];
                return [4 /*yield*/, api('startTask', { "taskType": t.taskType, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~1orj8k3"), "sceneid": "JLHBhPageh5" })];
            case 37:
                res = _y.sent();
                console.log(t.title, res.data.biz_msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 38:
                _y.sent();
                return [4 /*yield*/, api('getTaskDetailForColor', { taskType: t.taskType })];
            case 39:
                res = _y.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 40:
                _y.sent();
                _y.label = 41;
            case 41:
                _y.trys.push([41, 47, 48, 49]);
                _m = (e_5 = void 0, __values(res.data.result.advertDetails)), _o = _m.next();
                _y.label = 42;
            case 42:
                if (!!_o.done) return [3 /*break*/, 46];
                tp = _o.value;
                if (!(tp.status === 0)) return [3 /*break*/, 45];
                return [4 /*yield*/, api('taskReportForColor', { "taskType": t.taskType, "detailId": tp.id })];
            case 43:
                res = _y.sent();
                console.log(t.title, tp.name, res.data.biz_msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 44:
                _y.sent();
                _y.label = 45;
            case 45:
                _o = _m.next();
                return [3 /*break*/, 42];
            case 46: return [3 /*break*/, 49];
            case 47:
                e_5_1 = _y.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 49];
            case 48:
                try {
                    if (_o && !_o.done && (_w = _m["return"])) _w.call(_m);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 49:
                if (!(t.innerStatus === 3)) return [3 /*break*/, 52];
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "taskType": t.taskType, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~138q6w6"), "sceneid": "JLHBhPageh5" })];
            case 50:
                res = _y.sent();
                console.log("".concat(t.title, " \u6253\u5F00\u6210\u529F\uFF0C\u83B7\u5F97"), parseFloat(res.data.result.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 51:
                _y.sent();
                _y.label = 52;
            case 52:
                _l = _k.next();
                return [3 /*break*/, 36];
            case 53: return [3 /*break*/, 56];
            case 54:
                e_6_1 = _y.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 56];
            case 55:
                try {
                    if (_l && !_l.done && (_v = _k["return"])) _v.call(_k);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 56:
                j = 1;
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 57:
                res = _y.sent();
                _y.label = 58;
            case 58:
                _y.trys.push([58, 66, 67, 68]);
                _p = (e_7 = void 0, __values(res.data.result.redpacketConfigFillRewardInfo)), _q = _p.next();
                _y.label = 59;
            case 59:
                if (!!_q.done) return [3 /*break*/, 65];
                t = _q.value;
                if (!(t.packetStatus === 2)) return [3 /*break*/, 60];
                console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                return [3 /*break*/, 63];
            case 60:
                if (!(t.packetStatus === 1)) return [3 /*break*/, 63];
                console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~0suodw0"), "sceneid": "JLHBhPageh5" })];
            case 61:
                res = _y.sent();
                console.log(res.data.biz_msg, parseFloat(res.data.result.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 62:
                _y.sent();
                _y.label = 63;
            case 63:
                j++;
                _y.label = 64;
            case 64:
                _q = _p.next();
                return [3 /*break*/, 59];
            case 65: return [3 /*break*/, 68];
            case 66:
                e_7_1 = _y.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 68];
            case 67:
                try {
                    if (_q && !_q.done && (_x = _p["return"])) _x.call(_p);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 68: return [3 /*break*/, 70];
            case 69:
                e_8 = _y.sent();
                console.log(e_8);
                return [3 /*break*/, 70];
            case 70:
                _h = _g.next();
                return [3 /*break*/, 31];
            case 71: return [3 /*break*/, 74];
            case 72:
                e_9_1 = _y.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 74];
            case 73:
                try {
                    if (_h && !_h.done && (_u = _g["return"])) _u.call(_g);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 74: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&t=").concat(Date.now(), "&clientVersion=10.2.4&osVersion=-1"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://happy.m.jd.com',
                            'Connection': 'keep-alive',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://happy.m.jd.com/',
                            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
