"use strict";
/**
 * 东东世界
 * https://ddsj-dz.isvjcloud.com/
 * cron: 5 0,8,20 * * *
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
var cookie = '', res = '', shareCodesInternal = [], UserName;
var tokenKey = '', token = '', bearer = '';
var HW_Priority = true, shareCodeHW = [], shareCode = [];
/**
 * CK1助力顺序
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
 */
process.env.HW_Priority === 'false' ? HW_Priority = false : '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, _d, _e, t, items, items_1, items_1_1, item, name_1, e_1_1, e_2_1, res_1, res_1_1, t, e_3_1, e_4_1, _f, _g, _h, index, value, shareCodesInternal_1, shareCodesInternal_1_1, code, e_5_1, e_6_1;
    var e_4, _j, e_2, _k, e_1, _l, e_3, _m, e_6, _o, e_5, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _q.sent();
                _q.label = 2;
            case 2:
                _q.trys.push([2, 39, 40, 41]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _q.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 38];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getIsvToken()];
            case 4:
                _q.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 5:
                _q.sent();
                return [4 /*yield*/, getToken()];
            case 6:
                _q.sent();
                return [4 /*yield*/, api('get_task')];
            case 7:
                res = _q.sent();
                _q.label = 8;
            case 8:
                _q.trys.push([8, 25, 26, 27]);
                _d = (e_2 = void 0, __values(res.result.taskVos)), _e = _d.next();
                _q.label = 9;
            case 9:
                if (!!_e.done) return [3 /*break*/, 24];
                t = _e.value;
                if (!(t.status === 1)) return [3 /*break*/, 23];
                if (!t.simpleRecordInfoVo) return [3 /*break*/, 12];
                return [4 /*yield*/, api('do_task', "taskToken=".concat(t.simpleRecordInfoVo.taskToken, "&task_id=").concat(t.taskId, "&task_type=").concat(t.taskType))];
            case 10:
                // 签到
                res = _q.sent();
                console.log('签到成功：', res.score);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _q.sent();
                return [3 /*break*/, 21];
            case 12:
                items = t.browseShopVo || t.shoppingActivityVos || t.productInfoVos || [];
                _q.label = 13;
            case 13:
                _q.trys.push([13, 19, 20, 21]);
                items_1 = (e_1 = void 0, __values(items)), items_1_1 = items_1.next();
                _q.label = 14;
            case 14:
                if (!!items_1_1.done) return [3 /*break*/, 18];
                item = items_1_1.value;
                if (!(item.status === 1)) return [3 /*break*/, 17];
                name_1 = item.shopName || item.title || item.skuName;
                return [4 /*yield*/, api('do_task', "taskToken=".concat(item.taskToken, "&task_id=").concat(t.taskId, "&task_type=").concat(t.taskType, "&task_name=").concat(encodeURIComponent(name_1)))];
            case 15:
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 16:
                _q.sent();
                console.log('任务完成：', res.score);
                _q.label = 17;
            case 17:
                items_1_1 = items_1.next();
                return [3 /*break*/, 14];
            case 18: return [3 /*break*/, 21];
            case 19:
                e_1_1 = _q.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 21];
            case 20:
                try {
                    if (items_1_1 && !items_1_1.done && (_l = items_1["return"])) _l.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 21:
                if (!(t.taskName === '邀请好友助力')) return [3 /*break*/, 23];
                console.log('收到助力：', t.times);
                return [4 /*yield*/, api('get_user_info')];
            case 22:
                res = _q.sent();
                console.log('助力码：', t.assistTaskDetailVo.taskToken, res.openid);
                shareCodesInternal.push({
                    taskToken: t.assistTaskDetailVo.taskToken,
                    inviter_id: res.openid
                });
                _q.label = 23;
            case 23:
                _e = _d.next();
                return [3 /*break*/, 9];
            case 24: return [3 /*break*/, 27];
            case 25:
                e_2_1 = _q.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 27];
            case 26:
                try {
                    if (_e && !_e.done && (_k = _d["return"])) _k.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 27:
                if (!(new Date().getHours() === 20)) return [3 /*break*/, 37];
                return [4 /*yield*/, api('get_exchange')];
            case 28:
                res = _q.sent();
                _q.label = 29;
            case 29:
                _q.trys.push([29, 35, 36, 37]);
                res_1 = (e_3 = void 0, __values(res)), res_1_1 = res_1.next();
                _q.label = 30;
            case 30:
                if (!!res_1_1.done) return [3 /*break*/, 34];
                t = res_1_1.value;
                if (!([500, 1000].includes(t.coins) && t.times_limit !== t.exchange_total)) return [3 /*break*/, 33];
                console.log('兑换', t.coins);
                return [4 /*yield*/, api('do_exchange', "id=".concat(t.id))];
            case 31:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 32:
                _q.sent();
                _q.label = 33;
            case 33:
                res_1_1 = res_1.next();
                return [3 /*break*/, 30];
            case 34: return [3 /*break*/, 37];
            case 35:
                e_3_1 = _q.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 37];
            case 36:
                try {
                    if (res_1_1 && !res_1_1.done && (_m = res_1["return"])) _m.call(res_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 37:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 38: return [3 /*break*/, 41];
            case 39:
                e_4_1 = _q.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 41];
            case 40:
                try {
                    if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 41:
                console.log('内部助力码：', shareCodesInternal);
                _q.label = 42;
            case 42:
                _q.trys.push([42, 59, 60, 61]);
                _f = __values(cookiesArr.entries()), _g = _f.next();
                _q.label = 43;
            case 43:
                if (!!_g.done) return [3 /*break*/, 58];
                _h = __read(_g.value, 2), index = _h[0], value = _h[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, getIsvToken()];
            case 44:
                _q.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 45:
                _q.sent();
                return [4 /*yield*/, getToken()];
            case 46:
                _q.sent();
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 48];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('ddWorld')];
            case 47:
                shareCodeHW = _q.sent();
                _q.label = 48;
            case 48:
                if (index === 0 && HW_Priority) {
                    shareCode = __spreadArray(__spreadArray([], __read(shareCodeHW), false), __read(shareCodesInternal), false);
                }
                else {
                    shareCode = __spreadArray(__spreadArray([], __read(shareCodesInternal), false), __read(shareCodeHW), false);
                }
                _q.label = 49;
            case 49:
                _q.trys.push([49, 55, 56, 57]);
                shareCodesInternal_1 = (e_5 = void 0, __values(shareCodesInternal)), shareCodesInternal_1_1 = shareCodesInternal_1.next();
                _q.label = 50;
            case 50:
                if (!!shareCodesInternal_1_1.done) return [3 /*break*/, 54];
                code = shareCodesInternal_1_1.value;
                console.log("".concat(UserName, " \u53BB\u52A9\u529B ").concat(code.taskToken));
                return [4 /*yield*/, api('do_assist_task', "taskToken=".concat(code.taskToken, "&inviter_id=").concat(code.inviter_id))];
            case 51:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                // console.log('助力结果：', res)
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 52:
                // console.log('助力结果：', res)
                _q.sent();
                if (res.status_code === 422)
                    return [3 /*break*/, 54];
                _q.label = 53;
            case 53:
                shareCodesInternal_1_1 = shareCodesInternal_1.next();
                return [3 /*break*/, 50];
            case 54: return [3 /*break*/, 57];
            case 55:
                e_5_1 = _q.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 57];
            case 56:
                try {
                    if (shareCodesInternal_1_1 && !shareCodesInternal_1_1.done && (_p = shareCodesInternal_1["return"])) _p.call(shareCodesInternal_1);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 57:
                _g = _f.next();
                return [3 /*break*/, 43];
            case 58: return [3 /*break*/, 61];
            case 59:
                e_6_1 = _q.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 61];
            case 60:
                try {
                    if (_g && !_g.done && (_o = _f["return"])) _o.call(_f);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 61: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    if (body === void 0) { body = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var headers, data, e_7, data, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = {
                        'Host': 'ddsj-dz.isvjcloud.com',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'User-Agent': TS_USER_AGENTS_1["default"],
                        'Authorization': "Bearer ".concat(bearer),
                        'Referer': 'https://ddsj-dz.isvjcloud.com/dd-world/'
                    };
                    if (!body) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("https://ddsj-dz.isvjcloud.com/dd-api/".concat(fn), body, { headers: headers })];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 3:
                    e_7 = _a.sent();
                    return [2 /*return*/, e_7.response.data];
                case 4: return [3 /*break*/, 8];
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, axios_1["default"].get("https://ddsj-dz.isvjcloud.com/dd-api/".concat(fn), { headers: headers })];
                case 6:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 7:
                    e_8 = _a.sent();
                    return [2 /*return*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function getIsvToken() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken", "body=".concat(encodeURIComponent(JSON.stringify({ "to": "https://ddsj-dz.isvjcloud.com/dd-world/load_app/load_app.html", "action": "to" })), "&uuid=4ccb375c539fd92bade&client=apple&clientVersion=10.0.10&st=1631884082694&sv=111&sign=1a49fd69e7d3c18cad91cc00ed40d327"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'accept': '*/*',
                            'content-type': 'application/x-www-form-urlencoded',
                            'referer': '',
                            'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
                            'accept-language': 'zh-Hans-CN;q=1',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    tokenKey = data.tokenKey;
                    return [2 /*return*/];
            }
        });
    });
}
function getIsvToken2() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator", "body=".concat(encodeURIComponent(JSON.stringify({ "id": "", "url": "https://ddsj-dz.isvjcloud.com" })), "&uuid=5162ca82aed35fc52e8&client=apple&clientVersion=10.0.10&st=1631884203742&sv=112&sign=fd40dc1c65d20881d92afe96c4aec3d0"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'accept': '*/*',
                            'content-type': 'application/x-www-form-urlencoded',
                            'referer': '',
                            'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
                            'accept-language': 'zh-Hans-CN;q=1',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token = data.token;
                    return [2 /*return*/];
            }
        });
    });
}
function getToken() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://ddsj-dz.isvjcloud.com/dd-api/jd-user-info', "token=".concat(token, "&source=01"), {
                        headers: {
                            'Host': 'ddsj-dz.isvjcloud.com',
                            'Origin': 'https://ddsj-dz.isvjcloud.com',
                            'Authorization': 'Bearer undefined',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://ddsj-dz.isvjcloud.com',
                            'Cookie': "IsvToken=".concat(tokenKey, ";")
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    bearer = data.access_token;
                    return [2 /*return*/];
            }
        });
    });
}
