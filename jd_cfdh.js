"use strict";
/**
 * 京喜财富岛
 * 包含雇佣导游，建议每小时1次
 * 使用jd_env_copy.js同步js环境变量到ts
 * 使用jd_ts_test.ts测试环境变量
 *
 * cron: 0 * * * *
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
var ts_md5_1 = require("ts-md5");
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var axi = axios_1["default"].create({ timeout: 10000 });
var cookie = '', res = '', UserName, index;
var shareCodes = [], shareCodesSelf = [], shareCodesHW = [], isCollector = false, token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, todayMoney, flag, dwPageIndex, _a, _b, t, _c, _d, xb, e_2_1, tasks, _e, _f, t, prizeInfo, CardList, cards, CardList_1, CardList_1_1, card, e_3_1, richcard, coincard, isUsing, coincard_1, coincard_1_1, card, e_4_1, richcard_1, richcard_1_1, card, j, e_5_1, j, j, wallet, build, minLV, _g, _h, b, e_6_1, employee, employee_1, employee_1_1, emp, empRes, e_7_1, _j, _k, sign, e_8_1, MermaidRes, shipRes, bags_1, _l, _m, s, strTypeCnt_1, n, bags, _o, _p, s, strTypeCnt, n, j, _q, _r, t, e_9_1, _s, _t, t, e_10_1, _u, _v, e, employ, e_11_1, _w, _x, b, e_12_1, i, data, e_13, j;
    var e_14, _y, e_2, _z, e_3, _0, e_15, _1, e_4, _2, e_5, _3, e_6, _4, e_7, _5, e_8, _6, e_16, _7, e_17, _8, e_9, _9, e_10, _10, e_11, _11, e_12, _12;
    var _13;
    return __generator(this, function (_14) {
        switch (_14.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _14.sent();
                i = 0;
                _14.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 192];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _14.label = 4;
            case 4:
                _14.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeShareCodes()];
            case 5:
                _14.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _14.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                todayMoney = 0, flag = true;
                dwPageIndex = 0;
                _14.label = 8;
            case 8:
                if (!(dwPageIndex < 5)) return [3 /*break*/, 12];
                if (!flag)
                    return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/GetMoneyDetail', '_cfd_t,bizCode,dwEnv,dwPageIndex,dwPageSize,dwProperty,dwQueryType,ptag,source,strZone', { dwQueryType: 0, dwPageIndex: 1, dwPageSize: 10, dwProperty: 1 })];
            case 9:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _14.sent();
                try {
                    for (_a = (e_14 = void 0, __values(res === null || res === void 0 ? void 0 : res.Detail)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        t = _b.value;
                        if ((0, date_fns_1.getDate)(t.ddwTime * 1000) === (0, date_fns_1.getDate)(new Date())) {
                            todayMoney += t.ddwValue;
                        }
                        else {
                            flag = false;
                            break;
                        }
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_y = _a["return"])) _y.call(_a);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                _14.label = 11;
            case 11:
                dwPageIndex++;
                return [3 /*break*/, 8];
            case 12:
                console.log('今日累计获得财富:', todayMoney);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 13:
                // 离线
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 14:
                _14.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,dwIsReJoin,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'undefined', strVersion: '1.0.1', dwIsReJoin: 0, strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 15:
                res = _14.sent();
                console.log('财富余额:', res.ddwRichBalance);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                    // 寻宝
                ];
            case 16:
                _14.sent();
                _14.label = 17;
            case 17:
                _14.trys.push([17, 23, 24, 25]);
                _c = (e_2 = void 0, __values(res.XbStatus.XBDetail)), _d = _c.next();
                _14.label = 18;
            case 18:
                if (!!_d.done) return [3 /*break*/, 22];
                xb = _d.value;
                if (!(xb.dwRemainCnt !== 0)) return [3 /*break*/, 21];
                return [4 /*yield*/, api('user/TreasureHunt', '_cfd_t,bizCode,dwEnv,ptag,source,strIndex,strZone', { strIndex: xb.strIndex })];
            case 19:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('发现宝物:', res.AwardInfo.ddwValue);
                }
                else {
                    console.log('寻宝失败:', res);
                    return [3 /*break*/, 22];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _14.sent();
                _14.label = 21;
            case 21:
                _d = _c.next();
                return [3 /*break*/, 18];
            case 22: return [3 /*break*/, 25];
            case 23:
                e_2_1 = _14.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 25];
            case 24:
                try {
                    if (_d && !_d.done && (_z = _c["return"])) _z.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 25:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetPropTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 26:
                // 加速卡任务
                tasks = _14.sent();
                _14.label = 27;
            case 27:
                _14.trys.push([27, 36, 37, 38]);
                _e = (e_3 = void 0, __values(tasks.Data.TaskList)), _f = _e.next();
                _14.label = 28;
            case 28:
                if (!!_f.done) return [3 /*break*/, 35];
                t = _f.value;
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 31];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 29:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 30:
                _14.sent();
                if (res.ret === 0) {
                    prizeInfo = JSON.parse(res.data.prizeInfo);
                    CardList = prizeInfo.CardInfo.CardList;
                    cards = '';
                    try {
                        for (CardList_1 = (e_15 = void 0, __values(CardList)), CardList_1_1 = CardList_1.next(); !CardList_1_1.done; CardList_1_1 = CardList_1.next()) {
                            card = CardList_1_1.value;
                            cards += card.strCardName;
                        }
                    }
                    catch (e_15_1) { e_15 = { error: e_15_1 }; }
                    finally {
                        try {
                            if (CardList_1_1 && !CardList_1_1.done && (_1 = CardList_1["return"])) _1.call(CardList_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                    }
                    console.log('加速卡领取成功', cards);
                }
                else {
                    console.log('加速卡领取失败', res);
                    return [3 /*break*/, 35];
                }
                _14.label = 31;
            case 31:
                if (!(t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '去接待NPC' && t.strTaskName.indexOf('累计邀请') === -1)) return [3 /*break*/, 34];
                console.log(t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 32:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((_13 = t.dwLookTime * 1000) !== null && _13 !== void 0 ? _13 : 2000)];
            case 33:
                _14.sent();
                if (res.ret === 0) {
                    console.log('加速卡任务完成');
                }
                else {
                    console.log('加速卡任务失败', res);
                    return [3 /*break*/, 35];
                }
                _14.label = 34;
            case 34:
                _f = _e.next();
                return [3 /*break*/, 28];
            case 35: return [3 /*break*/, 38];
            case 36:
                e_3_1 = _14.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 38];
            case 37:
                try {
                    if (_f && !_f.done && (_0 = _e["return"])) _0.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 38: return [4 /*yield*/, api('user/GetPropCardCenterInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 39:
                // 加速卡
                res = _14.sent();
                richcard = res.cardInfo.richcard, coincard = res.cardInfo.coincard, isUsing = res.cardInfo.dwWorkingType !== 0;
                _14.label = 40;
            case 40:
                _14.trys.push([40, 46, 47, 48]);
                coincard_1 = (e_4 = void 0, __values(coincard)), coincard_1_1 = coincard_1.next();
                _14.label = 41;
            case 41:
                if (!!coincard_1_1.done) return [3 /*break*/, 45];
                card = coincard_1_1.value;
                if (!(!isUsing && card.dwCardNums !== 0)) return [3 /*break*/, 43];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 1, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 42:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('金币加速卡使用成功');
                    isUsing = true;
                }
                else {
                    console.log('金币加速卡使用失败', res);
                    return [3 /*break*/, 45];
                }
                return [3 /*break*/, 44];
            case 43: return [3 /*break*/, 45];
            case 44:
                coincard_1_1 = coincard_1.next();
                return [3 /*break*/, 41];
            case 45: return [3 /*break*/, 48];
            case 46:
                e_4_1 = _14.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 48];
            case 47:
                try {
                    if (coincard_1_1 && !coincard_1_1.done && (_2 = coincard_1["return"])) _2.call(coincard_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 48:
                _14.trys.push([48, 58, 59, 60]);
                richcard_1 = (e_5 = void 0, __values(richcard)), richcard_1_1 = richcard_1.next();
                _14.label = 49;
            case 49:
                if (!!richcard_1_1.done) return [3 /*break*/, 57];
                card = richcard_1_1.value;
                if (!(!isUsing && card.dwCardNums !== 0)) return [3 /*break*/, 55];
                j = 0;
                _14.label = 50;
            case 50:
                if (!(j < card.dwCardNums)) return [3 /*break*/, 54];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 2, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 51:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('点券加速卡使用成功');
                    isUsing = true;
                }
                else {
                    console.log('点券加速卡使用失败', res);
                    isUsing = true;
                    return [3 /*break*/, 54];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 52:
                _14.sent();
                _14.label = 53;
            case 53:
                j++;
                return [3 /*break*/, 50];
            case 54: return [3 /*break*/, 56];
            case 55: return [3 /*break*/, 57];
            case 56:
                richcard_1_1 = richcard_1.next();
                return [3 /*break*/, 49];
            case 57: return [3 /*break*/, 60];
            case 58:
                e_5_1 = _14.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 60];
            case 59:
                try {
                    if (richcard_1_1 && !richcard_1_1.done && (_3 = richcard_1["return"])) _3.call(richcard_1);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 60:
                // 任务⬇️
                console.log('底部任务列表开始');
                j = 0;
                _14.label = 61;
            case 61:
                if (!(j < 30)) return [3 /*break*/, 65];
                return [4 /*yield*/, task()];
            case 62:
                if ((_14.sent()) === 0) {
                    return [3 /*break*/, 65];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 63:
                _14.sent();
                _14.label = 64;
            case 64:
                j++;
                return [3 /*break*/, 61];
            case 65:
                console.log('底部任务列表结束');
                j = 0;
                _14.label = 66;
            case 66:
                if (!(j < 5)) return [3 /*break*/, 88];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 67:
                res = _14.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _14.label = 68;
            case 68:
                _14.trys.push([68, 74, 75, 76]);
                _g = (e_6 = void 0, __values(['food', 'fun', 'shop', 'sea'])), _h = _g.next();
                _14.label = 69;
            case 69:
                if (!!_h.done) return [3 /*break*/, 73];
                b = _h.value;
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 70:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 71:
                _14.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _14.label = 72;
            case 72:
                _h = _g.next();
                return [3 /*break*/, 69];
            case 73: return [3 /*break*/, 76];
            case 74:
                e_6_1 = _14.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 76];
            case 75:
                try {
                    if (_h && !_h.done && (_4 = _g["return"])) _4.call(_g);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 76:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 77:
                res = _14.sent();
                console.log("".concat(build, "\u5347\u7EA7\u9700\u8981:"), res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 78:
                _14.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin <= wallet)) return [3 /*break*/, 84];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 79:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 80:
                _14.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 82];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 81:
                _14.sent();
                return [3 /*break*/, 83];
            case 82:
                console.log('升级失败', res);
                _14.label = 83;
            case 83: return [3 /*break*/, 85];
            case 84: return [3 /*break*/, 88];
            case 85: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 86:
                _14.sent();
                _14.label = 87;
            case 87:
                j++;
                return [3 /*break*/, 66];
            case 88: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 89:
                // 签到 助力奖励
                res = _14.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _14.label = 90;
            case 90:
                _14.trys.push([90, 96, 97, 98]);
                employee_1 = (e_7 = void 0, __values(employee)), employee_1_1 = employee_1.next();
                _14.label = 91;
            case 91:
                if (!!employee_1_1.done) return [3 /*break*/, 95];
                emp = employee_1_1.value;
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 92:
                empRes = _14.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功:', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 93:
                _14.sent();
                _14.label = 94;
            case 94:
                employee_1_1 = employee_1.next();
                return [3 /*break*/, 91];
            case 95: return [3 /*break*/, 98];
            case 96:
                e_7_1 = _14.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 98];
            case 97:
                try {
                    if (employee_1_1 && !employee_1_1.done && (_5 = employee_1["return"])) _5.call(employee_1);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 98:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 107];
                console.log('今日未签到');
                _14.label = 99;
            case 99:
                _14.trys.push([99, 104, 105, 106]);
                _j = (e_8 = void 0, __values(res.Data.Sign.SignList)), _k = _j.next();
                _14.label = 100;
            case 100:
                if (!!_k.done) return [3 /*break*/, 103];
                sign = _k.value;
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 102];
                return [4 /*yield*/, api('story/RewardSign', '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strPrizePool,strZone', {
                        ddwCoin: sign.ddwCoin,
                        ddwMoney: sign.ddwMoney,
                        dwPrizeLv: sign.dwBingoLevel,
                        dwPrizeType: sign.dwPrizeType,
                        strPrizePool: sign.strPrizePool,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 101:
                res = _14.sent();
                if (res.iRet === 0)
                    console.log('签到成功:', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败:', res);
                return [3 /*break*/, 103];
            case 102:
                _k = _j.next();
                return [3 /*break*/, 100];
            case 103: return [3 /*break*/, 106];
            case 104:
                e_8_1 = _14.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 106];
            case 105:
                try {
                    if (_k && !_k.done && (_6 = _j["return"])) _6.call(_j);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 106: return [3 /*break*/, 108];
            case 107:
                console.log('今日已经签到');
                _14.label = 108;
            case 108: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 109:
                _14.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point',
                        strPgUUNum: token.strPgUUNum,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strVersion: '1.0.1'
                    })];
            case 110:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 111:
                _14.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 131];
                if (!res.StoryInfo.StoryList[0].Mermaid) return [3 /*break*/, 118];
                console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '1',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 112:
                MermaidRes = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 113:
                _14.sent();
                if (!(MermaidRes.iRet === 0)) return [3 /*break*/, 115];
                return [4 /*yield*/, api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 114:
                MermaidRes = _14.sent();
                if (MermaidRes.iRet === 0) {
                    console.log("\u62EF\u6551\u7F8E\u4EBA\u9C7C\u6210\u529F");
                }
                _14.label = 115;
            case 115: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 116:
                _14.sent();
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 117:
                MermaidRes = _14.sent();
                if (MermaidRes.iRet === 0)
                    console.log('获得金币:', MermaidRes.Data.ddwCoin);
                _14.label = 118;
            case 118: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 119:
                _14.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 123];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F".concat(res.StoryInfo.StoryList[0].Special.strName));
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 120:
                shipRes = _14.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 121:
                _14.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 122:
                shipRes = _14.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _14.label = 123;
            case 123:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 129];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 124:
                // TODO 背包满了再卖给收破烂的
                res = _14.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 125:
                _14.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 126:
                // 清空背包
                res = _14.sent();
                bags_1 = [];
                try {
                    for (_l = (e_16 = void 0, __values(res.Data.Office)), _m = _l.next(); !_m.done; _m = _l.next()) {
                        s = _m.value;
                        bags_1.push(s.dwType);
                        bags_1.push(s.dwCount);
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_m && !_m.done && (_7 = _l["return"])) _7.call(_l);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 127:
                _14.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += "".concat(bags_1[n], ":");
                    else
                        strTypeCnt_1 += "".concat(bags_1[n], "|");
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 129];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 128:
                res = _14.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _14.label = 129;
            case 129: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 130:
                _14.sent();
                _14.label = 131;
            case 131: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 132:
                // 清空背包
                res = _14.sent();
                bags = [];
                try {
                    for (_o = (e_17 = void 0, __values(res.Data.Office)), _p = _o.next(); !_p.done; _p = _o.next()) {
                        s = _p.value;
                        bags.push(s.dwType);
                        bags.push(s.dwCount);
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_8 = _o["return"])) _8.call(_o);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 133:
                _14.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += "".concat(bags[n], ":");
                    else
                        strTypeCnt += "".concat(bags[n], "|");
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 135];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 134:
                res = _14.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _14.label = 135;
            case 135: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 136:
                // 垃圾🚮
                res = _14.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 143];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 137:
                _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 138:
                _14.sent();
                j = 1;
                _14.label = 139;
            case 139:
                if (!(j < 9)) return [3 /*break*/, 143];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 140:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 141:
                _14.sent();
                _14.label = 142;
            case 142:
                j++;
                return [3 /*break*/, 139];
            case 143: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 144:
                _14.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 145:
                // 任务➡️
                tasks = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 146:
                _14.sent();
                _14.label = 147;
            case 147:
                _14.trys.push([147, 153, 154, 155]);
                _q = (e_9 = void 0, __values(tasks.Data.TaskList)), _r = _q.next();
                _14.label = 148;
            case 148:
                if (!!_r.done) return [3 /*break*/, 152];
                t = _r.value;
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '升级1个建筑')) return [3 /*break*/, 151];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId, configExtra: '' }, 'right')];
            case 149:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 150:
                _14.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _14.label = 151;
            case 151:
                _r = _q.next();
                return [3 /*break*/, 148];
            case 152: return [3 /*break*/, 155];
            case 153:
                e_9_1 = _14.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 155];
            case 154:
                try {
                    if (_r && !_r.done && (_9 = _q["return"])) _9.call(_q);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 155: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 156:
                tasks = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 157:
                _14.sent();
                _14.label = 158;
            case 158:
                _14.trys.push([158, 164, 165, 166]);
                _s = (e_10 = void 0, __values(tasks.Data.TaskList)), _t = _s.next();
                _14.label = 159;
            case 159:
                if (!!_t.done) return [3 /*break*/, 163];
                t = _t.value;
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 162];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId }, 'right')];
            case 160:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 161:
                _14.sent();
                if (res.ret === 0) {
                    console.log('领奖成功');
                }
                else {
                    console.log('领奖失败', res);
                }
                _14.label = 162;
            case 162:
                _t = _s.next();
                return [3 /*break*/, 159];
            case 163: return [3 /*break*/, 166];
            case 164:
                e_10_1 = _14.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 166];
            case 165:
                try {
                    if (_t && !_t.done && (_10 = _s["return"])) _10.call(_s);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 166: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 167:
                tasks = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 168:
                _14.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 170];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 169:
                res = _14.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _14.label = 170;
            case 170: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 171:
                _14.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 172:
                // 导游
                res = _14.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 173];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 181];
            case 173:
                _14.trys.push([173, 179, 180, 181]);
                _u = (e_11 = void 0, __values(res.TourGuideList)), _v = _u.next();
                _14.label = 174;
            case 174:
                if (!!_v.done) return [3 /*break*/, 178];
                e = _v.value;
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 177];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 175:
                employ = _14.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63".concat(e.strBuildIndex, "\u5BFC\u6E38\u6210\u529F"));
                if (employ.iRet === 2003)
                    return [3 /*break*/, 178];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 176:
                _14.sent();
                _14.label = 177;
            case 177:
                _v = _u.next();
                return [3 /*break*/, 174];
            case 178: return [3 /*break*/, 181];
            case 179:
                e_11_1 = _14.sent();
                e_11 = { error: e_11_1 };
                return [3 /*break*/, 181];
            case 180:
                try {
                    if (_v && !_v.done && (_11 = _u["return"])) _11.call(_u);
                }
                finally { if (e_11) throw e_11.error; }
                return [7 /*endfinally*/];
            case 181: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 182:
                _14.sent();
                _14.label = 183;
            case 183:
                _14.trys.push([183, 189, 190, 191]);
                _w = (e_12 = void 0, __values(['fun', 'shop', 'sea', 'food'])), _x = _w.next();
                _14.label = 184;
            case 184:
                if (!!_x.done) return [3 /*break*/, 188];
                b = _x.value;
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 185:
                res = _14.sent();
                console.log("".concat(b, "\u6536\u91D1\u5E01:"), res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 186:
                _14.sent();
                _14.label = 187;
            case 187:
                _x = _w.next();
                return [3 /*break*/, 184];
            case 188: return [3 /*break*/, 191];
            case 189:
                e_12_1 = _14.sent();
                e_12 = { error: e_12_1 };
                return [3 /*break*/, 191];
            case 190:
                try {
                    if (_x && !_x.done && (_12 = _w["return"])) _12.call(_w);
                }
                finally { if (e_12) throw e_12.error; }
                return [7 /*endfinally*/];
            case 191:
                i++;
                return [3 /*break*/, 3];
            case 192:
                i = 0;
                _14.label = 193;
            case 193:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 204];
                return [4 /*yield*/, getCodesHW()
                    // 获取随机助力码
                ];
            case 194:
                _14.sent();
                _14.label = 195;
            case 195:
                _14.trys.push([195, 197, , 198]);
                return [4 /*yield*/, axi.get("https://api.jdsharecode.xyz/api/jxcfd/30", { timeout: 10000 })];
            case 196:
                data = (_14.sent()).data;
                shareCodes = __spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false);
                return [3 /*break*/, 198];
            case 197:
                e_13 = _14.sent();
                console.log('获取助力池失败');
                shareCodes = __spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false);
                return [3 /*break*/, 198];
            case 198:
                j = 0;
                _14.label = 199;
            case 199:
                if (!(j < shareCodes.length)) return [3 /*break*/, 203];
                cookie = cookiesArr[i];
                console.log("\u8D26\u53F7".concat(i + 1, "\u53BB\u52A9\u529B:"), shareCodes[j]);
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: shareCodes[j] })];
            case 200:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2235) {
                    console.log('上限');
                    return [3 /*break*/, 203];
                }
                else if (res.iRet === 1023) {
                    console.log('信号弱');
                    return [3 /*break*/, 203];
                }
                else if (res.iRet === 2191) {
                    console.log('已助力');
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 201:
                _14.sent();
                _14.label = 202;
            case 202:
                j++;
                return [3 /*break*/, 199];
            case 203:
                i++;
                return [3 /*break*/, 193];
            case 204: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var url, bizCode, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        bizCode = void 0;
                        if (!params.bizCode) {
                            bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
                        }
                        else {
                            bizCode = params.bizCode;
                        }
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?strZone=jxbfd&bizCode=").concat(bizCode, "&source=jxbfd&dwEnv=7&_cfd_t=").concat(Date.now(), "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat(String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)), "&g_ty=ls");
                    }
                    else {
                        url = "https://m.jingxi.com/jxbfd/".concat(fn, "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=").concat(Date.now(), "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat(String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)), "&g_ty=ls");
                    }
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10032);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'User-Agent': "jdpingou;iPhone;4.13.0;14.4.2;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";network/wifi;model/iPhone10,2;appBuild/100609;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/").concat(Math.random() * 98 + 1, ";pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"),
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (typeof data === 'string') {
                        try {
                            return [2 /*return*/, JSON.parse(data.replace(/\n/g, '').match(/jsonpCBK.?\(([^)]*)/)[1])];
                        }
                        catch (e) {
                            console.log(data);
                            return [2 /*return*/, ''];
                        }
                    }
                    else {
                        return [2 /*return*/, data];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function task() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, e_18_1;
        var e_18, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,showAreaTaskFlag,source,strZone,taskId', { taskId: 0, showAreaTaskFlag: 1 })];
                case 1:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 14, 15, 16]);
                    _a = __values(res.data.userTaskStatusList), _b = _a.next();
                    _d.label = 4;
                case 4:
                    if (!!_b.done) return [3 /*break*/, 13];
                    t = _b.value;
                    if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 9];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, bizCode: t.bizCode })];
                case 5:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 6:
                    _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 8];
                    try {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                    }
                    catch (e) {
                        console.log('领奖失败:', res.data);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 7:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 8:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 9:
                    if (!(t.dateType === 2 && t.awardStatus === 2 && t.completedTimes < t.targetTimes && t.taskCaller === 1)) return [3 /*break*/, 12];
                    console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, configExtra: '', bizCode: t.bizCode })];
                case 10:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 11:
                    _d.sent();
                    if (res.ret === 0) {
                        console.log('任务完成');
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('任务失败');
                        return [2 /*return*/, 0];
                    }
                    _d.label = 12;
                case 12:
                    _b = _a.next();
                    return [3 /*break*/, 4];
                case 13: return [3 /*break*/, 16];
                case 14:
                    e_18_1 = _d.sent();
                    e_18 = { error: e_18_1 };
                    return [3 /*break*/, 16];
                case 15:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_18) throw e_18.error; }
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/, 0];
            }
        });
    });
}
function makeShareCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined',
                            strPgUUNum: token.strPgUUNum,
                            strPgtimestamp: token.strPgtimestamp,
                            strPhoneID: token.strPhoneID,
                            strVersion: '1.0.1'
                        })];
                case 1:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    shareCodesSelf.push(res.strMyShareId);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 2:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 3:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxcfd?sharecode=".concat(res.strMyShareId, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 4:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 6];
                case 5:
                    e_19 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_19);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getCodesHW() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axi.get("https://api.jdsharecode.xyz/api/HW_CODES", { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data['jxcfd'] || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_20 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
