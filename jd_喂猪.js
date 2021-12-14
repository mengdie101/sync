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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, currCount, currLevelCount, j, levelMax, _a, _b, t, food, j, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _d.sent();
                i = 0;
                _d.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 22];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('pigPetLogin', { "shareId": "", "helpId": "", "cardId": "", "signId": "", "validation": "", "channelLV": "", "source": 2, "riskDeviceParam": "{}" })];
            case 3:
                res = _d.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!res.resultData.resultData.hasPig) {
                    console.log('没有养猪，跳过');
                    return [3 /*break*/, 21];
                }
                currCount = res.resultData.resultData.cote.pig.currCount;
                currLevelCount = res.resultData.resultData.cote.pig.currLevelCount;
                console.log('成长值：', currCount, currLevelCount);
                if (currCount == currLevelCount) {
                    console.log('成长值已满，跳过');
                    return [3 /*break*/, 21];
                }
                return [4 /*yield*/, api('pigPetLotteryIndex', { "source": 2, "channelLV": "", "riskDeviceParam": "{}" })];
            case 4:
                // 任务
                // res = await api('pigPetMissionList', {"source": 2, "channelLV": "", "riskDeviceParam": "{}"})
                // for(let t of res.resultData.resultData.missions){
                //   if(['完成每日分享',''])
                // }
                // 转盘
                res = _d.sent();
                console.log('转盘次数：', res.resultData.resultData.currentCount);
                j = 0;
                _d.label = 5;
            case 5:
                if (!(j < res.resultData.resultData.currentCount)) return [3 /*break*/, 8];
                return [4 /*yield*/, api('pigPetLotteryPlay', { "type": 0, "validation": "", "channelLV": "", "source": 2, "riskDeviceParam": "{}" })];
            case 6:
                res = _d.sent();
                try {
                    console.log('转盘');
                    (0, TS_USER_AGENTS_1.o2s)(res);
                    // console.log('转盘：', res.resultData.resultData.award.content, res.resultData.resultData.award.count)
                }
                catch (e) {
                    console.log(e);
                    (0, TS_USER_AGENTS_1.o2s)(res);
                }
                _d.label = 7;
            case 7:
                j++;
                return [3 /*break*/, 5];
            case 8: return [4 /*yield*/, api('pigPetUserBag', { "category": "1001", "channelLV": "", "source": 2, "riskDeviceParam": "{}" })];
            case 9:
                // 背包
                res = _d.sent();
                levelMax = false;
                _d.label = 10;
            case 10:
                _d.trys.push([10, 19, 20, 21]);
                _a = (e_1 = void 0, __values(res.resultData.resultData.goods)), _b = _a.next();
                _d.label = 11;
            case 11:
                if (!!_b.done) return [3 /*break*/, 18];
                t = _b.value;
                food = t.count;
                console.log(t.goodsName, food);
                j = 0;
                _d.label = 12;
            case 12:
                if (!(j < 10)) return [3 /*break*/, 17];
                if (!(food >= 20 && !levelMax)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('pigPetAddFood', { channelLV: "", riskDeviceParam: "{}", skuId: "1001003003", source: 2 })];
            case 13:
                res = _d.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                console.log("\u5582".concat(t.goodsName, "\uFF0C\u6210\u957F\u503C\uFF1A"), res.resultData.resultData.cote.pig.currCount);
                if (res.resultData.resultData.cote.pig.currCount === currLevelCount) {
                    console.log('成长值已满');
                    levelMax = true;
                    return [3 /*break*/, 17];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(13000)];
            case 14:
                _d.sent();
                food -= 20;
                return [3 /*break*/, 16];
            case 15: return [3 /*break*/, 17];
            case 16:
                j++;
                return [3 /*break*/, 12];
            case 17:
                _b = _a.next();
                return [3 /*break*/, 11];
            case 18: return [3 /*break*/, 21];
            case 19:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 21];
            case 20:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 21:
                i++;
                return [3 /*break*/, 2];
            case 22: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://ms.jr.jd.com/gw/generic/uc/h5/m/".concat(fn, "?_=").concat(Date.now()), "reqData=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            'Host': 'ms.jr.jd.com',
                            'Accept': 'application/json',
                            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                            'Origin': 'https://u.jr.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://u.jr.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
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
