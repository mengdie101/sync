"use strict";
/**
 * 汪汪乐园-跑步
 * 默认翻倍到0.04红包结束
 * export JD_JOY_PARK_RUN_ASSETS="0.04"
 * cron: 20,50 * * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var V3_1 = require("./utils/V3");
var crypto_js_1 = require("crypto-js");
var cookie = '', res = '', data, UserName;
var assets = parseFloat(process.env.JD_JOY_PARK_RUN_ASSETS || '0.04');
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, i, e_1_1;
    var e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                _e.label = 2;
            case 2:
                _e.trys.push([2, 23, 24, 25]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _e.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 22];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, runningPageHome()];
            case 4:
                /*
                res = await api('apTaskList', {"linkId": "LsQNxL7iWDlXUs6cFl-AAg"})
                o2s(res)
                for (let t of res.data) {
                  if (t.id === 662 && t.taskDoTimes < t.taskLimitTimes) {
                    console.log(t.taskShowTitle)
                    data = await api('apDoTask', {"taskType": t.taskType, "taskId": t.id, "itemId": t.taskSourceUrl, "linkId": "LsQNxL7iWDlXUs6cFl-AAg"})
                    await wait(1000)
                    o2s(data)
                  }
                  if (t.canDrawAwardNum === 1) {
                    data = await api('apTaskDrawAward', {"taskType": t.taskType, "taskId": t.id, "linkId": "LsQNxL7iWDlXUs6cFl-AAg"})
                    o2s(data)
                    // console.log('任务完成', parseInt(data.data.awardGivenNumber))
                    await wait(1000)
                  }
                }
            
                 */
                res = _e.sent();
                console.log('能量恢复中', secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000), '能量棒', res.data.runningHomeInfo.energy);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _e.sent();
                if (!(res.data.runningHomeInfo.nextRunningTime / 1000 < 300)) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(res.data.runningHomeInfo.nextRunningTime)];
            case 6:
                _e.sent();
                return [4 /*yield*/, runningPageHome()];
            case 7:
                res = _e.sent();
                console.log('能量恢复中', secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000), '能量棒', res.data.runningHomeInfo.energy);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9:
                if (!!res.data.runningHomeInfo.nextRunningTime) return [3 /*break*/, 18];
                return [4 /*yield*/, (0, V3_1.requestAlgo)('b6ac3', 'jdltapp;')];
            case 10:
                _e.sent();
                console.log('终点目标', assets);
                i = 0;
                _e.label = 11;
            case 11:
                if (!(i < 10)) return [3 /*break*/, 18];
                return [4 /*yield*/, api('runningOpenBox', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
            case 12:
                res = _e.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!(parseFloat(res.data.assets) >= assets)) return [3 /*break*/, 14];
                return [4 /*yield*/, api('runningPreserveAssets', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
            case 13:
                res = _e.sent();
                console.log('领取成功', res.data.prizeValue);
                return [3 /*break*/, 18];
            case 14:
                if (res.data.doubleSuccess) {
                    console.log('翻倍成功', parseFloat(res.data.assets));
                }
                else if (!res.data.doubleSuccess && !res.data.runningHomeInfo.runningFinish) {
                    console.log('开始跑步', parseFloat(res.data.assets));
                }
                else {
                    console.log('翻倍失败');
                    return [3 /*break*/, 18];
                }
                _e.label = 15;
            case 15: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 16:
                _e.sent();
                _e.label = 17;
            case 17:
                i++;
                return [3 /*break*/, 11];
            case 18: return [4 /*yield*/, runningPageHome()];
            case 19:
                res = _e.sent();
                console.log('🧧', res.data.runningHomeInfo.prizeValue);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _e.sent();
                _e.label = 21;
            case 21:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 22: return [3 /*break*/, 25];
            case 23:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 25];
            case 24:
                try {
                    if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 25: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, t, h5st;
        return __generator(this, function (_a) {
            timestamp = Date.now(), t = [
                { key: 'functionId', value: fn },
                { key: 'body', value: (0, crypto_js_1.SHA256)(JSON.stringify(body)).toString() },
                { key: 't', value: timestamp.toString() },
                { key: 'client', value: 'ios' },
                { key: 'clientVersion', value: '3.8.16' }
            ];
            h5st = '';
            if (fn === 'runningOpenBox') {
                h5st = (0, V3_1.geth5st)(t, 'b6ac3');
            }
            return [2 /*return*/, (0, TS_USER_AGENTS_1.post)('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&_t=").concat(Date.now(), "&appid=activities_platform&h5st=").concat(h5st), {
                    'Host': 'api.m.jd.com',
                    'Origin': 'https://joypark.jd.com',
                    'User-Agent': 'jdltapp;',
                    'Referer': 'https://joypark.jd.com/',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Cookie': cookie
                })];
        });
    });
}
function runningPageHome() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/?functionId=runningPageHome&body=%7B%22linkId%22:%22L-sOanK_5RJCz7I314FpnQ%22,%22isFromJoyPark%22:true,%22joyLinkId%22:%22LsQNxL7iWDlXUs6cFl-AAg%22%7D&t=".concat(Date.now(), "&appid=activities_platform&client=ios&clientVersion=3.8.16"), '', {
                    'Host': 'api.m.jd.com',
                    'Origin': 'https://h5platform.jd.com',
                    'User-Agent': 'jdltapp;',
                    'Referer': 'https://h5platform.jd.com/',
                    'Cookie': cookie
                })];
        });
    });
}
// 秒转时分秒
function secondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var second = Math.floor(seconds % 60);
    return "".concat(minutes, "\u5206").concat(second, "\u79D2");
}
