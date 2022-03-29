"use strict";
/**
 * 京东-锦鲤红包
 * 只获取前9CK，再多403
 * 只有助力，红包手动开
 * cron: 1 0,6,18 * * *
 * CK1     HW.ts -> 内部
 * CK2～9  内部   -> HW.ts
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
var ts_md5_1 = require("ts-md5");
var cookie = '', cookiesArr = [], res = '', UserName, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
// let min: number[] = [0.02, 0.12, 0.3, 0.4, 0.6, 0.7, 0.8, 1, 1.2, 2, 3.6]
var log = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _a.sent();
                cookiesArr = cookiesArr.slice(0, 9);
                return [4 /*yield*/, join()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getShareCodeSelf()];
            case 3:
                _a.sent();
                return [4 /*yield*/, help()
                    // await open(false)
                ];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function getShareCodeSelf() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, e_1, e_2_1;
        var e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 8, 9, 10]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 7];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 5, , 6]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 3:
                    res = _e.sent();
                    console.log('红包ID：', res.data.result.redpacketInfo.id);
                    shareCodesSelf.push(res.data.result.redpacketInfo.id);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 4:
                    _e.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _e.sent();
                    console.log(e_1);
                    return [3 /*break*/, 6];
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 10:
                    (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                    return [2 /*return*/];
            }
        });
    });
}
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, random, log1, e_3, e_4_1;
        var e_4, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 9, 10, 11]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _e.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 8];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 6, , 7]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 3:
                    log = _e.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 4:
                    res = _e.sent();
                    console.log('活动初始化：', res.data.result.statusDesc);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 5:
                    _e.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_3 = _e.sent();
                    console.log(e_3);
                    return [3 /*break*/, 7];
                case 7:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 8: return [3 /*break*/, 11];
                case 9:
                    e_4_1 = _e.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 11];
                case 10:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
/*
async function open(autoOpen: boolean = false) {
  let exitOpen: boolean = false
  for (let [index, value] of cookiesArr.entries()) {
    if (exitOpen)
      break
    try {
      cookie = value
      UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
      console.log(`\n开始【京东账号${index + 1}】${UserName}\n`);

      let j: number = 1
      res = await api('h5activityIndex', {"isjdapp": 1})
      for (let t of res.data.result.redpacketConfigFillRewardInfo) {
        if (t.packetStatus === 2) {
          console.log(`红包${j}已拆过，获得`, t.packetAmount)
          if (!min.includes(t.packetAmount)) {
            await sendNotify('锦鲤红包', `账号${index + 1} ${UserName}\n${t.packetAmount}`)
          }
        } else if (t.packetStatus === 1) {
          console.log(`红包${j}可拆`)
          if (autoOpen) {
            UA = `jdltapp;iPhone;3.1.0;${Math.ceil(Math.random() * 4 + 10)}.${Math.ceil(Math.random() * 4)};${randomString(40)}`
            log = logs[getRandomNumberByRange(0, logs.length - 1)]
            let random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1]
            res = await api('h5receiveRedpacketAll', {"random": random, "log": log1, "sceneid": "JLHBhPageh5"})
            console.log('打开成功', parseFloat(res.data.result.discount))
            if (!min.includes(parseFloat(res.data.result.discount))) {
              await sendNotify('锦鲤红包', `账号${index + 1} ${UserName}\n${t.packetAmount}`)
            }
            await wait(10000)
          }
        } else {
          console.log(`${j}`, t.hasAssistNum, '/', t.requireAssistNum)
        }
        j++
      }
    } catch (e) {
      console.log(e)
    }
    await wait(3000)
  }
}
*/
function help() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, index, value, shareCodes_1, shareCodes_1_1, code, random, log1, e_5_1, e_6, e_7_1;
        var e_7, _d, e_5, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 21, 22, 23]);
                    _a = __values(cookiesArr.entries()), _b = _a.next();
                    _f.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 20];
                    _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                    _f.label = 2;
                case 2:
                    _f.trys.push([2, 18, , 19]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    if (!(shareCodesHW.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
                case 3:
                    shareCodesHW = _f.sent();
                    _f.label = 4;
                case 4:
                    // 1 3 5 5 9 15
                    if (index === 0) {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHW), false), __read(shareCodesSelf), false)));
                    }
                    else {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                    }
                    _f.label = 5;
                case 5:
                    _f.trys.push([5, 15, 16, 17]);
                    shareCodes_1 = (e_5 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                    _f.label = 6;
                case 6:
                    if (!!shareCodes_1_1.done) return [3 /*break*/, 14];
                    code = shareCodes_1_1.value;
                    if (!!fullCode.includes(code)) return [3 /*break*/, 13];
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 7:
                    log = _f.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                    return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 8:
                    res = _f.sent();
                    (0, TS_USER_AGENTS_1.o2s)(res, 'jinli_h5assist');
                    if (!(res.data.result.status === 0)) return [3 /*break*/, 10];
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
                case 9:
                    _f.sent();
                    return [3 /*break*/, 14];
                case 10:
                    if (res.data.result.status === 3) {
                        console.log('今日助力次数已满');
                        return [3 /*break*/, 14];
                    }
                    else {
                        console.log('助力结果：', res.data.result.statusDesc);
                        if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                            fullCode.push(code);
                        }
                    }
                    _f.label = 11;
                case 11: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
                case 12:
                    _f.sent();
                    _f.label = 13;
                case 13:
                    shareCodes_1_1 = shareCodes_1.next();
                    return [3 /*break*/, 6];
                case 14: return [3 /*break*/, 17];
                case 15:
                    e_5_1 = _f.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 17];
                case 16:
                    try {
                        if (shareCodes_1_1 && !shareCodes_1_1.done && (_e = shareCodes_1["return"])) _e.call(shareCodes_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 17: return [3 /*break*/, 19];
                case 18:
                    e_6 = _f.sent();
                    console.log(e_6);
                    return [3 /*break*/, 19];
                case 19:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 20: return [3 /*break*/, 23];
                case 21:
                    e_7_1 = _f.sent();
                    e_7 = { error: e_7_1 };
                    return [3 /*break*/, 23];
                case 22:
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7 /*endfinally*/];
                case 23: return [2 /*return*/];
            }
        });
    });
}
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&clientVersion=10.2.4&osVersion=AndroidOS&d_brand=Xiaomi&d_model=Xiaomi"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            "Cookie": cookie,
                            "origin": "https://h5.m.jd.com",
                            "referer": "https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html",
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "X-Requested-With": "com.jingdong.app.mall",
                            "User-Agent": UA
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getLog() {
    return __awaiter(this, void 0, void 0, function () {
        var farm, bean, pt_pin, e;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 1:
                    farm = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 3:
                    bean = _a.sent();
                    pt_pin = encodeURIComponent(UserName);
                    e = '"random":"54811600","log":"1648274851050~159nXc2MiBSMDF6WGtBbTAyMQ==.S25feV9NbFN1WUlqWT8ZPwIdET8ePg95E0t0XW1bVmkVcxNLJhU=.81064560~6,1~B2446968989D926D8B5DC49DF3050EC53A26C8F2~19xvf3w~C~ShBHWBELa24fE0ZdWBELa24fE1VBWxELAQsDBR4RRkATChECBwYLBwQFCAYCAQQKDAABAREfE0VWURELEkdHRVRVU0ZXEh8RRldSFwkTRFVHUEdHQFITHBFDVVwRD2gEHAIEBR4KGQIBHAEfAW8fF1lbEgkAHRBQRhELEgICBwcDDFACBwZWCAdXAQAFBwYFCQQCB1BSCAoFAwJRFx8TXkMRCxB/XF1ESBNLCQRsAwcTHBFHEwgCAwcJAgQHCQcCBQYBHBFZWhAJF1ITHBFVQVARDxETHBFdRxAJF3ReX1RfVBJ6W1AfEh8RX1NFFwkTUxEfE0FQRxELawUDAR4LBQNsHBFBXhAJbhFQEh8RUBAfF1ITHBFSEx4RVBEdElIRHRBSF24dElpcUBAJF1VXVlVVV0ZHFx8TUVkRCxBGFx8TU1oRCxBEBh0DHgcRHRBQU2xHEgkRAQARGRFTVBEJE0BSW1deXQ4GBQoCBAUBABEfE19ZFwlqAB8DHQJuGRFTXFxUEwgRVBEdEl5AVhAJF1ITTQ==~0f67kov"';
                    if (!(farm.length > 0 && bean.length > 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/jlhb_log?farm=".concat(farm, "&bean=").concat(bean, "&pin=").concat(ts_md5_1.Md5.hashStr(pt_pin)))];
                case 4:
                    res = _a.sent();
                    if (res === 1)
                        return [2 /*return*/];
                    return [2 /*return*/, e];
                case 5: return [2 /*return*/, e];
            }
        });
    });
}
