"use strict";
/**
 * 东东世界
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodesInternal = [], UserName, index;
var tokenKey = '', token = '', bearer = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, _b, t, items, items_1, items_1_1, item, name_1, e_1_1, e_2_1, res_1, res_1_1, t, e_3_1, i;
    var e_2, _c, e_1, _d, e_3, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                i = 0;
                _f.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 37];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getIsvToken()];
            case 3:
                _f.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 4:
                _f.sent();
                return [4 /*yield*/, getToken()];
            case 5:
                _f.sent();
                return [4 /*yield*/, api('get_task')];
            case 6:
                res = _f.sent();
                _f.label = 7;
            case 7:
                _f.trys.push([7, 24, 25, 26]);
                _a = (e_2 = void 0, __values(res.result.taskVos)), _b = _a.next();
                _f.label = 8;
            case 8:
                if (!!_b.done) return [3 /*break*/, 23];
                t = _b.value;
                if (!(t.status === 1)) return [3 /*break*/, 22];
                if (!t.simpleRecordInfoVo) return [3 /*break*/, 11];
                return [4 /*yield*/, api('do_task', "taskToken=".concat(t.simpleRecordInfoVo.taskToken, "&task_id=").concat(t.taskId, "&task_type=").concat(t.taskType))];
            case 9:
                // 签到
                res = _f.sent();
                console.log('签到成功：', res.score);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _f.sent();
                return [3 /*break*/, 20];
            case 11:
                items = t.browseShopVo || t.shoppingActivityVos || t.productInfoVos || [];
                _f.label = 12;
            case 12:
                _f.trys.push([12, 18, 19, 20]);
                items_1 = (e_1 = void 0, __values(items)), items_1_1 = items_1.next();
                _f.label = 13;
            case 13:
                if (!!items_1_1.done) return [3 /*break*/, 17];
                item = items_1_1.value;
                if (!(item.status === 1)) return [3 /*break*/, 16];
                name_1 = item.shopName || item.title || item.skuName;
                return [4 /*yield*/, api('do_task', "taskToken=".concat(item.taskToken, "&task_id=").concat(t.taskId, "&task_type=").concat(t.taskType, "&task_name=").concat(encodeURIComponent(name_1)))];
            case 14:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 15:
                _f.sent();
                console.log('任务完成：', res.score);
                _f.label = 16;
            case 16:
                items_1_1 = items_1.next();
                return [3 /*break*/, 13];
            case 17: return [3 /*break*/, 20];
            case 18:
                e_1_1 = _f.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 20];
            case 19:
                try {
                    if (items_1_1 && !items_1_1.done && (_d = items_1["return"])) _d.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 20:
                if (!(t.taskName === '邀请好友助力')) return [3 /*break*/, 22];
                console.log('助力码：', t.assistTaskDetailVo.taskToken);
                return [4 /*yield*/, api('get_user_info')];
            case 21:
                res = _f.sent();
                shareCodesInternal.push({
                    taskToken: t.assistTaskDetailVo.taskToken,
                    inviter_id: res.openid
                });
                _f.label = 22;
            case 22:
                _b = _a.next();
                return [3 /*break*/, 8];
            case 23: return [3 /*break*/, 26];
            case 24:
                e_2_1 = _f.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 26];
            case 25:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 26:
                if (!(new Date().getHours() === 20)) return [3 /*break*/, 36];
                return [4 /*yield*/, api('get_exchange')];
            case 27:
                res = _f.sent();
                console.log(res);
                _f.label = 28;
            case 28:
                _f.trys.push([28, 34, 35, 36]);
                res_1 = (e_3 = void 0, __values(res)), res_1_1 = res_1.next();
                _f.label = 29;
            case 29:
                if (!!res_1_1.done) return [3 /*break*/, 33];
                t = res_1_1.value;
                if (!(t.times_limit !== t.exchange_total)) return [3 /*break*/, 32];
                console.log('兑换', t.coins);
                return [4 /*yield*/, api('do_exchange', "id=".concat(t.id))];
            case 30:
                res = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 31:
                _f.sent();
                _f.label = 32;
            case 32:
                res_1_1 = res_1.next();
                return [3 /*break*/, 29];
            case 33: return [3 /*break*/, 36];
            case 34:
                e_3_1 = _f.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 36];
            case 35:
                try {
                    if (res_1_1 && !res_1_1.done && (_e = res_1["return"])) _e.call(res_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 36:
                i++;
                return [3 /*break*/, 2];
            case 37:
                console.log('内部助力码：', shareCodesInternal);
                i = 0;
                _f.label = 38;
            case 38:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 42];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("".concat(UserName, " \u53BB\u52A9\u529B ").concat(shareCodesInternal[0].taskToken));
                return [4 /*yield*/, api('do_assist_task', "taskToken=".concat(shareCodesInternal[0].taskToken, "&inviter_id=").concat(shareCodesInternal[0].inviter_id))];
            case 39:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 40:
                _f.sent();
                console.log('助力结果：', res);
                if (!res)
                    return [3 /*break*/, 42];
                _f.label = 41;
            case 41:
                i++;
                return [3 /*break*/, 38];
            case 42: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    if (body === void 0) { body = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var headers, data, e_4, data, e_5;
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
                    e_4 = _a.sent();
                    return [2 /*return*/, e_4.response.data];
                case 4: return [3 /*break*/, 8];
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, axios_1["default"].get("https://ddsj-dz.isvjcloud.com/dd-api/".concat(fn), { headers: headers })];
                case 6:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 7:
                    e_5 = _a.sent();
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
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken", "body=%7B%22to%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%2Fdd-world%2Fload_app%2Fload_app.html%22%2C%22action%22%3A%22to%22%7D&uuid=4ccb375c539fd92bade&client=apple&clientVersion=10.0.10&st=1631884082694&sv=111&sign=1a49fd69e7d3c18cad91cc00ed40d327", {
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
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator", "body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%22%7D&uuid=5162ca82aed35fc52e8&client=apple&clientVersion=10.0.10&st=1631884203742&sv=112&sign=fd40dc1c65d20881d92afe96c4aec3d0", {
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
