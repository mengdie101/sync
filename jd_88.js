"use strict";
/**
 * 京喜->领88元红包
 * 先内部，后助力HW.ts
 * cron: 5 0,6,14 * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var axios_1 = require("axios");
var ts_md5_1 = require("ts-md5");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', UserName, UA = '';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [], shareCodePool = [], jxToken;
var HW_Priority = true;
/**
 * CK1助力顺序
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
 */
process.env.HW_Priority === 'false' ? HW_Priority = false : '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, strUserPin, dwHelpedTimes, e_1_1, _d, _e, _f, index, value, e_2_1, _g, _h, _j, index, value, strUserPin, dwHelpedTimes, _k, _l, t, e_3_1, e_4_1;
    var e_1, _m, e_2, _o, e_4, _p, e_3, _q;
    var _r;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _s.sent();
                _s.label = 2;
            case 2:
                _s.trys.push([2, 12, 13, 14]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _s.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 11];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _s.sent();
                return [4 /*yield*/, api('GetUserInfo', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp,userDraw', {})];
            case 5:
                res = _s.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                console.log('收到助力:', dwHelpedTimes);
                console.log('助力码：', strUserPin);
                shareCodeSelf.push(strUserPin);
                return [4 /*yield*/, makeShareCodes(strUserPin)];
            case 6:
                _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 7:
                _s.sent();
                return [4 /*yield*/, api('JoinActive', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp')];
            case 8:
                res = _s.sent();
                res.iRet === 0 ? console.log('JoinActive: 成功') : console.log('JoinActive:', res.sErrMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _s.sent();
                _s.label = 10;
            case 10:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_1_1 = _s.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_b && !_b.done && (_m = _a["return"])) _m.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 14:
                console.log('内部助力码：', shareCodeSelf);
                _s.label = 15;
            case 15:
                _s.trys.push([15, 23, 24, 25]);
                _d = __values(cookiesArr.entries()), _e = _d.next();
                _s.label = 16;
            case 16:
                if (!!_e.done) return [3 /*break*/, 22];
                _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, token(cookie)];
            case 17:
                jxToken = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('hb88', 30)];
            case 18:
                shareCodePool = _s.sent();
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('88hb')];
            case 19:
                shareCodeHW = _s.sent();
                _s.label = 20;
            case 20:
                if (index === 0 && HW_Priority) {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(shareCodeSelf), false), __read(shareCodePool), false)));
                }
                else {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodePool), false), __read(shareCodeHW), false)));
                }
                _s.label = 21;
            case 21:
                _e = _d.next();
                return [3 /*break*/, 16];
            case 22: return [3 /*break*/, 25];
            case 23:
                e_2_1 = _s.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 25];
            case 24:
                try {
                    if (_e && !_e.done && (_o = _d["return"])) _o.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 25:
                _s.trys.push([25, 40, 41, 42]);
                _g = __values(cookiesArr.entries()), _h = _g.next();
                _s.label = 26;
            case 26:
                if (!!_h.done) return [3 /*break*/, 39];
                _j = __read(_h.value, 2), index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, token(cookie)];
            case 27:
                jxToken = _s.sent();
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, " \u62C6\u7EA2\u5305\n"));
                return [4 /*yield*/, api('GetUserInfo', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp,userDraw', { userDraw: 1 })];
            case 28:
                res = _s.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _s.sent();
                _s.label = 30;
            case 30:
                _s.trys.push([30, 36, 37, 38]);
                _k = (e_3 = void 0, __values(res.Data.gradeConfig)), _l = _k.next();
                _s.label = 31;
            case 31:
                if (!!_l.done) return [3 /*break*/, 35];
                t = _l.value;
                if (!(dwHelpedTimes >= t.dwHelpTimes && t.dwIsHasDraw !== 2)) return [3 /*break*/, 34];
                return [4 /*yield*/, api('DoGradeDraw', 'activeId,channel,grade,phoneid,publishFlag,stepreward_jstoken,strPin,timestamp', { grade: t.dwGrade, strPin: strUserPin })];
            case 32:
                res = _s.sent();
                if (res.iRet === 0) {
                    console.log("\u7B49\u7EA7".concat(t.dwGrade, "\u7EA2\u5305\u6253\u5F00\u6210\u529F"));
                }
                else {
                    console.log('其他错误', (_r = res.sErrMsg) !== null && _r !== void 0 ? _r : JSON.stringify(res));
                    return [3 /*break*/, 35];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(15000)];
            case 33:
                _s.sent();
                _s.label = 34;
            case 34:
                _l = _k.next();
                return [3 /*break*/, 31];
            case 35: return [3 /*break*/, 38];
            case 36:
                e_3_1 = _s.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 38];
            case 37:
                try {
                    if (_l && !_l.done && (_q = _k["return"])) _q.call(_k);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 38:
                _h = _g.next();
                return [3 /*break*/, 26];
            case 39: return [3 /*break*/, 42];
            case 40:
                e_4_1 = _s.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 42];
            case 41:
                try {
                    if (_h && !_h.done && (_p = _g["return"])) _p.call(_g);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 42: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/cubeactive/steprewardv3/".concat(fn, "?activeId=525597&publishFlag=1&channel=7&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&stepreward_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid']);
                    UA = "jdpingou;iPhone;4.13.0;14.4.2;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";network/wifi;model/iPhone10,2;appBuild/100609;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/").concat(Math.random() * 98 + 1, ";pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148");
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10010);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'User-Agent': UA,
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Host': 'm.jingxi.com',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/jsonpCBK.?\(/, '').split('\n')[0])];
                    return [2 /*return*/, data];
                case 3:
                    e_5 = _a.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/hb88?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_6 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_6);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}