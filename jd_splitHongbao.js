"use strict";
/**
 * 金榜任务
 * 入口 https://wz.my/7tf
 * cron: 0 0,15 * * *
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
var cookie = '', res = '', UserName, index;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, taskVos, taskVos_1, taskVos_1_1, t, _a, _b, tp, e_1_1, e_2_1, lotteryNum, j, taskVos_2, taskVos_2_1, t, e_3_1, i, shareCode_1, shareCode_1_1, code, e_4_1;
    var e_2, _c, e_1, _d, e_3, _e, e_4, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _g.sent();
                i = 0;
                _g.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 35];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('splitHongbao_getHomeData', { "appId": "1EFVXxg", "taskToken": "" })];
            case 3:
                res = _g.sent();
                taskVos = res.data.result.taskVos;
                _g.label = 4;
            case 4:
                _g.trys.push([4, 18, 19, 20]);
                taskVos_1 = (e_2 = void 0, __values(taskVos)), taskVos_1_1 = taskVos_1.next();
                _g.label = 5;
            case 5:
                if (!!taskVos_1_1.done) return [3 /*break*/, 17];
                t = taskVos_1_1.value;
                if (!(t.status === 1)) return [3 /*break*/, 15];
                console.log(t.taskName);
                _g.label = 6;
            case 6:
                _g.trys.push([6, 13, 14, 15]);
                _a = (e_1 = void 0, __values(t.shoppingActivityVos || t.productInfoVos)), _b = _a.next();
                _g.label = 7;
            case 7:
                if (!!_b.done) return [3 /*break*/, 12];
                tp = _b.value;
                if (!(tp.status === 1)) return [3 /*break*/, 11];
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1EFVXxg", "taskToken": tp.taskToken, "taskId": t.taskId, "itemId": tp.itemId, "actionType": "1" })];
            case 8:
                res = _g.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.waitDuration * 1000 + 500)];
            case 9:
                _g.sent();
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1EFVXxg", "taskToken": tp.taskToken, "taskId": t.taskId, "itemId": tp.itemId, "actionType": "0" })];
            case 10:
                res = _g.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _g.label = 11;
            case 11:
                _b = _a.next();
                return [3 /*break*/, 7];
            case 12: return [3 /*break*/, 15];
            case 13:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 15];
            case 14:
                try {
                    if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 15:
                if (t.taskId === 7) {
                    console.log('助力码：', t.assistTaskDetailVo.taskToken);
                    shareCodeSelf.push(t.assistTaskDetailVo.taskToken);
                }
                _g.label = 16;
            case 16:
                taskVos_1_1 = taskVos_1.next();
                return [3 /*break*/, 5];
            case 17: return [3 /*break*/, 20];
            case 18:
                e_2_1 = _g.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 20];
            case 19:
                try {
                    if (taskVos_1_1 && !taskVos_1_1.done && (_c = taskVos_1["return"])) _c.call(taskVos_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 20: return [4 /*yield*/, api('splitHongbao_getHomeData', { "appId": "1EFVXxg", "taskToken": "" })];
            case 21:
                res = _g.sent();
                lotteryNum = parseInt(res.data.result.userInfo.lotteryNum);
                taskVos = res.data.result.taskVos;
                j = 0;
                _g.label = 22;
            case 22:
                if (!(j < lotteryNum)) return [3 /*break*/, 26];
                return [4 /*yield*/, api('splitHongbao_getLotteryResult', { "appId": "1EFVXxg", "taskId": "" })];
            case 23:
                res = _g.sent();
                console.log('开红包：', parseFloat(res.data.result.userAwardsCacheDto.redPacketVO.value));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 24:
                _g.sent();
                _g.label = 25;
            case 25:
                j++;
                return [3 /*break*/, 22];
            case 26:
                _g.trys.push([26, 32, 33, 34]);
                taskVos_2 = (e_3 = void 0, __values(taskVos)), taskVos_2_1 = taskVos_2.next();
                _g.label = 27;
            case 27:
                if (!!taskVos_2_1.done) return [3 /*break*/, 31];
                t = taskVos_2_1.value;
                if (!(t.status === 3)) return [3 /*break*/, 30];
                return [4 /*yield*/, api('splitHongbao_getLotteryResult', { "appId": "1EFVXxg", "taskId": t.taskId })];
            case 28:
                res = _g.sent();
                console.log('开红包：', parseFloat(res.data.result.userAwardsCacheDto.redPacketVO.value));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 29:
                _g.sent();
                _g.label = 30;
            case 30:
                taskVos_2_1 = taskVos_2.next();
                return [3 /*break*/, 27];
            case 31: return [3 /*break*/, 34];
            case 32:
                e_3_1 = _g.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 34];
            case 33:
                try {
                    if (taskVos_2_1 && !taskVos_2_1.done && (_e = taskVos_2["return"])) _e.call(taskVos_2);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 34:
                i++;
                return [3 /*break*/, 2];
            case 35:
                console.log('内部助力码：', shareCodeSelf);
                i = 0;
                _g.label = 36;
            case 36:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 48];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 38];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jinbang')];
            case 37:
                shareCodeHW = _g.sent();
                _g.label = 38;
            case 38:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                _g.label = 39;
            case 39:
                _g.trys.push([39, 45, 46, 47]);
                shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _g.label = 40;
            case 40:
                if (!!shareCode_1_1.done) return [3 /*break*/, 44];
                code = shareCode_1_1.value;
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1EFVXxg", "taskToken": code, "taskId": 6, "actionType": 0 })];
            case 41:
                res = _g.sent();
                if (res.data.bizMsg === 'success') {
                    console.log('助力成功');
                }
                else if (res.data.bizMsg === '已达到助力上限') {
                    return [3 /*break*/, 44];
                }
                else {
                    console.log(res.data.bizMsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 42:
                _g.sent();
                _g.label = 43;
            case 43:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 40];
            case 44: return [3 /*break*/, 47];
            case 45:
                e_4_1 = _g.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 47];
            case 46:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_f = shareCode_1["return"])) _f.call(shareCode_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 47:
                i++;
                return [3 /*break*/, 36];
            case 48: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/',
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
