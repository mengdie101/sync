"use strict";
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
var cookie = '', res = '', UserName, msg = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, headers, e_1_1;
    var e_1, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                _e.label = 2;
            case 2:
                _e.trys.push([2, 11, 12, 13]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _e.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 10];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                headers = {
                    "Host": "wq.jd.com",
                    "User-Agent": TS_USER_AGENTS_1["default"],
                    "Referer": "https://wqs.jd.com/",
                    "Cookie": cookie
                };
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://wq.jd.com/wxcontractgw/querypappaycontract?appid=wxae3e8056daea8727&_=".concat(Date.now(), "&g_login_type=0&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_tk=1600943825&g_ty=ls"), '', headers)];
            case 4:
                res = _e.sent();
                if (!(res.data.status === 1)) return [3 /*break*/, 5];
                console.log('免密支付 未启用');
                return [3 /*break*/, 7];
            case 5:
                console.log('免密支付 未禁用');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://wq.jd.com/wxcontractgw/terminatepappaycontract?appid=wxae3e8056daea8727&_=".concat(Date.now(), "&g_login_type=0&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_tk=1600943825&g_ty=ls"), '', headers)];
            case 6:
                res = _e.sent();
                if (res.errcode === 0) {
                    console.log('免密支付 禁用成功');
                    msg += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n\u514D\u5BC6\u652F\u4ED8 \u7981\u7528\u6210\u529F\n\n");
                }
                else {
                    console.log('免密支付 禁用失败');
                    msg += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n\u514D\u5BC6\u652F\u4ED8 \u7981\u7528\u5931\u8D25\n\n");
                }
                _e.label = 7;
            case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 10: return [3 /*break*/, 13];
            case 11:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 13];
            case 12:
                try {
                    if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 13: return [2 /*return*/];
        }
    });
}); })();
