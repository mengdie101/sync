"use strict";
/**
 * 城城.ts
 * cron 0 0-23/1 * * *
 * 优先内部助力
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, e_1_1, _d, _e, _f, index, value, _g, _h, _j, index_1, t, e_2_1, e_3_1;
    var e_1, _k, e_3, _l, e_2, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _o.sent();
                _o.label = 2;
            case 2:
                _o.trys.push([2, 8, 9, 10]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _o.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 7];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })
                    // o2s(res)
                ];
            case 4:
                res = _o.sent();
                // o2s(res)
                console.log('助力码：', res.data.result.userActBaseInfo.inviteId);
                shareCodesSelf.push(res.data.result.userActBaseInfo.inviteId);
                // break
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                // break
                _o.sent();
                _o.label = 6;
            case 6:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_1_1 = _o.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (_b && !_b.done && (_k = _a["return"])) _k.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 10:
                _o.trys.push([10, 25, 26, 27]);
                _d = __values(cookiesArr.entries()), _e = _d.next();
                _o.label = 11;
            case 11:
                if (!!_e.done) return [3 /*break*/, 24];
                _f = __read(_e.value, 2), index = _f[0], value = _f[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 12:
                // 打开红包
                res = _o.sent();
                console.log('可打开：', res.data.result.mainInfos.length, '个红包');
                _o.label = 13;
            case 13:
                _o.trys.push([13, 19, 20, 21]);
                _g = (e_2 = void 0, __values(res.data.result.mainInfos.entries())), _h = _g.next();
                _o.label = 14;
            case 14:
                if (!!_h.done) return [3 /*break*/, 18];
                _j = __read(_h.value, 2), index_1 = _j[0], t = _j[1];
                if (!(t.remaingAssistNum === 0 && t.status === '1')) return [3 /*break*/, 17];
                return [4 /*yield*/, api("city_receiveCash", { "cashType": 1, "roundNum": t.roundNum })];
            case 15:
                res = _o.sent();
                console.log("\u6253\u5F00\u7EA2\u5305(".concat(index_1 + 1, "-").concat(t.roundNum + '', ") \u83B7\u5F97\uFF1A"), res.data.result.currentTimeCash * 1, '累计：', res.data.result.totalCash * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 16:
                _o.sent();
                _o.label = 17;
            case 17:
                _h = _g.next();
                return [3 /*break*/, 14];
            case 18: return [3 /*break*/, 21];
            case 19:
                e_2_1 = _o.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 21];
            case 20:
                try {
                    if (_h && !_h.done && (_m = _g["return"])) _m.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 21: 
            // 抽奖
            // res = await api("city_getLotteryInfo", {})
            // let lotteryNum = res.data.result.lotteryNum
            // console.log(`可以抽奖${lotteryNum}次`)
            // for (let i = 0; i < lotteryNum; i++) {
            //   res = await api("city_lotteryAward", {})
            //   if (res.code === 0 && res.data.bizCode === 0) {
            //     console.log('抽奖成功：', res.data.result.prizeId)
            //     await wait(5000)
            //   } else {
            //     console.log('抽奖出错', JSON.stringify(res))
            //     break
            //   }
            // }
            return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 22:
                // 抽奖
                // res = await api("city_getLotteryInfo", {})
                // let lotteryNum = res.data.result.lotteryNum
                // console.log(`可以抽奖${lotteryNum}次`)
                // for (let i = 0; i < lotteryNum; i++) {
                //   res = await api("city_lotteryAward", {})
                //   if (res.code === 0 && res.data.bizCode === 0) {
                //     console.log('抽奖成功：', res.data.result.prizeId)
                //     await wait(5000)
                //   } else {
                //     console.log('抽奖出错', JSON.stringify(res))
                //     break
                //   }
                // }
                _o.sent();
                _o.label = 23;
            case 23:
                _e = _d.next();
                return [3 /*break*/, 11];
            case 24: return [3 /*break*/, 27];
            case 25:
                e_3_1 = _o.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 27];
            case 26:
                try {
                    if (_e && !_e.done && (_l = _d["return"])) _l.call(_d);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 27: return [2 /*return*/];
        }
    });
}); })();
function api(fn, params) {
    return __awaiter(this, void 0, void 0, function () {
        var body, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = "functionId=".concat(fn, "&body=").concat(JSON.stringify(params), "&client=wh5&clientVersion=1.0.0&uuid=");
                    return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', body, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Accept': 'application/json, text/plain, */*',
                                'Accept-Language': 'zh-cn',
                                'Origin': 'https://bunearth.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Connection': 'keep-alive',
                                'Referer': 'https://bunearth.m.jd.com/',
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
