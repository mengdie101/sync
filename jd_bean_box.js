"use strict";
/**
 * 领京豆-任务
 * 助力：内部 -> HW
 * cron: 1 0,9,12,18 * * *
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index, uuid;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, times, j, j, _a, _b, t, e_1_1, e_2;
    var e_1, _c;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                i = 0;
                _f.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 29];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, initForTurntableFarm()];
            case 3:
                res = _f.sent();
                times = res.remainLotteryTimes;
                console.log('剩余抽奖机会:', times);
                j = 0;
                _f.label = 4;
            case 4:
                if (!(j < times)) return [3 /*break*/, 8];
                console.log('开始抽奖...');
                return [4 /*yield*/, initForTurntableFarm(1)];
            case 5:
                res = _f.sent();
                if (res.code === '0') {
                    if (res.type === 'thanks') {
                        console.log('抽奖成功，获得：狗屁');
                    }
                    else {
                        console.log('抽奖成功，获得:', res.type);
                    }
                }
                else {
                    console.log('抽奖失败', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                j++;
                return [3 /*break*/, 4];
            case 8:
                uuid = randomString(40);
                j = 0;
                _f.label = 9;
            case 9:
                if (!(j < 2)) return [3 /*break*/, 28];
                console.log("Round:".concat(j + 1));
                return [4 /*yield*/, api('beanTaskList', { "viewChannel": "AppHome" })];
            case 10:
                res = _f.sent();
                _f.label = 11;
            case 11:
                _f.trys.push([11, 24, , 25]);
                _f.label = 12;
            case 12:
                _f.trys.push([12, 21, 22, 23]);
                _a = (e_1 = void 0, __values(res.data.taskInfos)), _b = _a.next();
                _f.label = 13;
            case 13:
                if (!!_b.done) return [3 /*break*/, 20];
                t = _b.value;
                if (!(t.status === 1)) return [3 /*break*/, 19];
                console.log(t.taskName);
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": t.taskType === 3 ? 0 : 1,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 14:
                res = _f.sent();
                ((_d = res.data) === null || _d === void 0 ? void 0 : _d.bizMsg) ? console.log(res.data.bizMsg) : console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.waitDuration * 1000 || 2000)];
            case 15:
                _f.sent();
                if (!(t.taskType !== 3)) return [3 /*break*/, 17];
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": 0,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 16:
                res = _f.sent();
                if ((_e = res.data) === null || _e === void 0 ? void 0 : _e.bizMsg)
                    console.log(res.data.bizMsg);
                _f.label = 17;
            case 17: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _f.sent();
                _f.label = 19;
            case 19:
                _b = _a.next();
                return [3 /*break*/, 13];
            case 20: return [3 /*break*/, 23];
            case 21:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 23];
            case 22:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 23: return [3 /*break*/, 25];
            case 24:
                e_2 = _f.sent();
                console.log('Error!', e_2);
                return [3 /*break*/, 25];
            case 25: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _f.sent();
                _f.label = 27;
            case 27:
                j++;
                return [3 /*break*/, 9];
            case 28:
                i++;
                return [3 /*break*/, 2];
            case 29: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=".concat(fn), "body=".concat(encodeURIComponent(JSON.stringify(body)), "&appid=ld&client=apple&clientVersion=10.0.8&uuid=").concat(uuid, "&openudid=").concat(uuid), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'content-type': 'application/x-www-form-urlencoded',
                            'referer': '',
                            'user-agent': 'JD4iPhone/167863%20(iPhone;%20iOS;%20Scale/3.00)',
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
function qjd(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=ld&client=apple&clientVersion=10.0.8&uuid=").concat(uuid, "&openudid=").concat(uuid), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/rn/3MQXMdRUTeat9xqBSZDSCCAE9Eqz/index.html',
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
function randomString(e) {
    e = e || 32;
    var t = '0123456789', a = t.length, n = "";
    for (var i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
function initForTurntableFarm(type) {
    if (type === void 0) { type = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = type === 0
                        ? 'https://api.m.jd.com/client.action?functionId=initForTurntableFarm&body=%7B%22version%22%3A4%2C%22channel%22%3A1%7D&appid=wh5'
                        : 'https://api.m.jd.com/client.action?functionId=lotteryForTurntableFarm&body=%7B%22type%22%3A1%2C%22version%22%3A4%2C%22channel%22%3A1%7D&appid=wh5';
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://h5.m.jd.com/',
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
function getShareCodeHW() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/HW_CODES")];
                case 1:
                    data = (_a.sent()).data;
                    console.log('获取HW_CODES成功(api)');
                    shareCodeHW = data['qjd'];
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    console.log('获取HW_CODES失败(api)');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
