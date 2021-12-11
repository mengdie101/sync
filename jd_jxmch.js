"use strict";
/**
 * 京喜牧场
 * cron: 10 0,12,18 * * *
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
var notify = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index_1, value, j, lastgettime, food, petid, coins, petNum, petids, e_1, tasks, _d, _e, t, j, e_2_1, drawTimes, j, _f, _g, card, e_3_1, e_4, e_5, _h, _j, day, e_6_1, j, _k, _l, t, e_7, e_8, e_9_1, _m, _o, _p, index_2, value, data, e_10, shareCodes_1, shareCodes_1_1, code, e_11_1, e_12_1, _q, _r, _s, index_3, value, data, e_13, shareCodes_2, shareCodes_2_1, code, e_14_1, e_15_1;
    var e_9, _t, e_2, _u, e_3, _v, e_6, _w, e_16, _x, e_12, _y, e_11, _z, e_15, _0, e_14, _1;
    var _2, _3;
    return __generator(this, function (_4) {
        switch (_4.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _4.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _4.sent();
                _4.label = 3;
            case 3:
                _4.trys.push([3, 124, 125, 126]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _4.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 123];
                _c = __read(_b.value, 2), index_1 = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index_1 + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 5:
                jxToken = _4.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 6:
                homePageInfo = _4.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 7:
                _4.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 12];
                console.log('init...');
                j = 0;
                _4.label = 8;
            case 8:
                if (!(j < 20)) return [3 /*break*/, 12];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 9:
                res = _4.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 12];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 10:
                _4.sent();
                _4.label = 11;
            case 11:
                j++;
                return [3 /*break*/, 8];
            case 12: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 13:
                homePageInfo = _4.sent();
                lastgettime = void 0;
                if ((_3 = (_2 = homePageInfo.data) === null || _2 === void 0 ? void 0 : _2.cow) === null || _3 === void 0 ? void 0 : _3.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 122];
                }
                food = 0, petid = '', coins = 0, petNum = 0, petids = [];
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                    petid = homePageInfo.data.petinfo[0].petid;
                    petids = homePageInfo.data.petinfo.map(function (pet) {
                        return pet.petid;
                    });
                    petNum = homePageInfo.data.petinfo.length;
                    coins = homePageInfo.data.coins;
                }
                catch (e) {
                    console.log('初始化出错，手动去app');
                    return [3 /*break*/, 122];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _4.label = 14;
            case 14:
                _4.trys.push([14, 16, , 17]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 15:
                _4.sent();
                return [3 /*break*/, 17];
            case 16:
                e_1 = _4.sent();
                console.log(e_1);
                return [3 /*break*/, 17];
            case 17:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                    // 助农
                ];
            case 18:
                _4.sent();
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 19:
                tasks = _4.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _4.sent();
                _4.label = 21;
            case 21:
                _4.trys.push([21, 33, 34, 35]);
                _d = (e_2 = void 0, __values(tasks.data.userTaskStatusList)), _e = _d.next();
                _4.label = 22;
            case 22:
                if (!!_e.done) return [3 /*break*/, 32];
                t = _e.value;
                if (!(t.awardStatus === 2 && t.taskName !== '邀请牧场新用户助力' && t.taskName !== '拆开邀人红包')) return [3 /*break*/, 31];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 28];
                j = t.completedTimes;
                _4.label = 23;
            case 23:
                if (!(j < t.targetTimes)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 24:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 27];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 25:
                _4.sent();
                _4.label = 26;
            case 26:
                j++;
                return [3 /*break*/, 23];
            case 27: return [3 /*break*/, 31];
            case 28: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 29:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 32];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 30:
                _4.sent();
                _4.label = 31;
            case 31:
                _e = _d.next();
                return [3 /*break*/, 22];
            case 32: return [3 /*break*/, 35];
            case 33:
                e_2_1 = _4.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 35];
            case 34:
                try {
                    if (_e && !_e.done && (_u = _d["return"])) _u.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 35: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 扭蛋机
            ];
            case 36:
                _4.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 37:
                // 扭蛋机
                res = _4.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 38:
                _4.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 40];
                return [4 /*yield*/, (0, notify.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7".concat(index_1 + 1, " ").concat(UserName, "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A"))];
            case 39:
                _4.sent();
                return [3 /*break*/, 46];
            case 40:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _4.label = 41;
            case 41:
                if (!(j < drawTimes)) return [3 /*break*/, 46];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 42:
                res = _4.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 44];
                if (res.data.prizetype === 3) {
                    console.log('抽奖成功，金币:', res.data.addcoins);
                }
                else if (res.data.prizetype === 1) {
                    console.log('抽奖成功，卡片:', res.data.cardtype);
                }
                else {
                    console.log('抽奖成功，其他:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 43:
                _4.sent();
                return [3 /*break*/, 45];
            case 44:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 46];
            case 45:
                j++;
                return [3 /*break*/, 41];
            case 46: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 47:
                res = _4.sent();
                _4.label = 48;
            case 48:
                _4.trys.push([48, 58, , 59]);
                _4.label = 49;
            case 49:
                _4.trys.push([49, 55, 56, 57]);
                _f = (e_3 = void 0, __values(res.data.cardinfo)), _g = _f.next();
                _4.label = 50;
            case 50:
                if (!!_g.done) return [3 /*break*/, 54];
                card = _g.value;
                console.log("card ".concat(card.cardtype), card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 53];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 51:
                res = _4.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 52:
                _4.sent();
                _4.label = 53;
            case 53:
                _g = _f.next();
                return [3 /*break*/, 50];
            case 54: return [3 /*break*/, 57];
            case 55:
                e_3_1 = _4.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 57];
            case 56:
                try {
                    if (_g && !_g.done && (_v = _f["return"])) _v.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 57: return [3 /*break*/, 59];
            case 58:
                e_4 = _4.sent();
                return [3 /*break*/, 59];
            case 59: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 红包
            ];
            case 60:
                _4.sent();
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 61:
                // 红包
                res = _4.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _4.label = 62;
            case 62:
                _4.trys.push([62, 64, , 65]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 63:
                _4.sent();
                return [3 /*break*/, 65];
            case 64:
                e_5 = _4.sent();
                return [3 /*break*/, 65];
            case 65: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 66:
                _4.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 67:
                // 签到
                res = _4.sent();
                if (!res.data.signlist) return [3 /*break*/, 76];
                _4.label = 68;
            case 68:
                _4.trys.push([68, 73, 74, 75]);
                _h = (e_6 = void 0, __values(res.data.signlist)), _j = _h.next();
                _4.label = 69;
            case 69:
                if (!!_j.done) return [3 /*break*/, 72];
                day = _j.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 71];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 70:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 72];
            case 71:
                _j = _h.next();
                return [3 /*break*/, 69];
            case 72: return [3 /*break*/, 75];
            case 73:
                e_6_1 = _4.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 75];
            case 74:
                try {
                    if (_j && !_j.done && (_w = _h["return"])) _w.call(_h);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 75: return [3 /*break*/, 77];
            case 76:
                console.log('没有获取到签到信息！');
                _4.label = 77;
            case 77: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 78:
                _4.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 79:
                // 登录领白菜
                res = _4.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 80:
                _4.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 82];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 81:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜:', res.data.drawnum);
                }
                _4.label = 82;
            case 82: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 83:
                _4.sent();
                console.log('任务列表开始');
                j = 0;
                _4.label = 84;
            case 84:
                if (!(j < 30)) return [3 /*break*/, 88];
                return [4 /*yield*/, getTask()];
            case 85:
                if ((_4.sent()) === 0) {
                    return [3 /*break*/, 88];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 86:
                _4.sent();
                _4.label = 87;
            case 87:
                j++;
                return [3 /*break*/, 84];
            case 88:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 89:
                _4.sent();
                _4.label = 90;
            case 90:
                if (!(coins >= 5000)) return [3 /*break*/, 93];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 91:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 93];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 92:
                _4.sent();
                return [3 /*break*/, 90];
            case 93: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 94:
                _4.sent();
                _4.label = 95;
            case 95:
                if (!(food >= 10)) return [3 /*break*/, 103];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 96:
                res = _4.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 97];
                console.log('喂食:', res.data.newnum);
                return [3 /*break*/, 101];
            case 97:
                if (!(res.ret === 2020)) return [3 /*break*/, 100];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 98:
                homePageInfo = _4.sent();
                try {
                    for (_k = (e_16 = void 0, __values(homePageInfo.data.petinfo)), _l = _k.next(); !_l.done; _l = _k.next()) {
                        t = _l.value;
                        if (t.cangetborn === 1) {
                            petid = t.petid;
                            break;
                        }
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_l && !_l.done && (_x = _k["return"])) _x.call(_k);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 99:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 103];
                }
                return [3 /*break*/, 101];
            case 100:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 103];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 103];
                }
                _4.label = 101;
            case 101: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 102:
                _4.sent();
                return [3 /*break*/, 95];
            case 103: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 104:
                _4.sent();
                console.log('除草...start');
                _4.label = 105;
            case 105:
                if (!1) return [3 /*break*/, 114];
                _4.label = 106;
            case 106:
                _4.trys.push([106, 112, , 113]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 107:
                res = _4.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 114];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 108:
                _4.sent();
                if (!res.data.surprise) return [3 /*break*/, 111];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 109:
                res = _4.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 110:
                _4.sent();
                _4.label = 111;
            case 111: return [3 /*break*/, 113];
            case 112:
                e_7 = _4.sent();
                console.log('除草 Error:', e_7);
                return [3 /*break*/, 114];
            case 113: return [3 /*break*/, 105];
            case 114: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 115:
                _4.sent();
                _4.label = 116;
            case 116:
                if (!1) return [3 /*break*/, 122];
                _4.label = 117;
            case 117:
                _4.trys.push([117, 120, , 121]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 118:
                res = _4.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 122];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 119:
                _4.sent();
                return [3 /*break*/, 121];
            case 120:
                e_8 = _4.sent();
                console.log('挑逗 Error:', e_8);
                return [3 /*break*/, 122];
            case 121: return [3 /*break*/, 116];
            case 122:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 123: return [3 /*break*/, 126];
            case 124:
                e_9_1 = _4.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 126];
            case 125:
                try {
                    if (_b && !_b.done && (_t = _a["return"])) _t.call(_a);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 126: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 127:
                _4.sent();
                _4.label = 128;
            case 128:
                _4.trys.push([128, 146, 147, 148]);
                _m = __values(cookiesArr.entries()), _o = _m.next();
                _4.label = 129;
            case 129:
                if (!!_o.done) return [3 /*break*/, 145];
                _p = __read(_o.value, 2), index_2 = _p[0], value = _p[1];
                return [4 /*yield*/, getCodes()
                    // 获取随机红包码
                ];
            case 130:
                _4.sent();
                _4.label = 131;
            case 131:
                _4.trys.push([131, 133, , 134]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30")];
            case 132:
                data = (_4.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false), __read(data.data), false)));
                return [3 /*break*/, 134];
            case 133:
                e_10 = _4.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false)));
                return [3 /*break*/, 134];
            case 134:
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 135:
                jxToken = _4.sent();
                _4.label = 136;
            case 136:
                _4.trys.push([136, 142, 143, 144]);
                shareCodes_1 = (e_11 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _4.label = 137;
            case 137:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 141];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index_2 + 1, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: code })];
            case 138:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 141];
                }
                else {
                    console.log('失败:', res.message);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 139:
                _4.sent();
                _4.label = 140;
            case 140:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 137];
            case 141: return [3 /*break*/, 144];
            case 142:
                e_11_1 = _4.sent();
                e_11 = { error: e_11_1 };
                return [3 /*break*/, 144];
            case 143:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_z = shareCodes_1["return"])) _z.call(shareCodes_1);
                }
                finally { if (e_11) throw e_11.error; }
                return [7 /*endfinally*/];
            case 144:
                _o = _m.next();
                return [3 /*break*/, 129];
            case 145: return [3 /*break*/, 148];
            case 146:
                e_12_1 = _4.sent();
                e_12 = { error: e_12_1 };
                return [3 /*break*/, 148];
            case 147:
                try {
                    if (_o && !_o.done && (_y = _m["return"])) _y.call(_m);
                }
                finally { if (e_12) throw e_12.error; }
                return [7 /*endfinally*/];
            case 148:
                _4.trys.push([148, 166, 167, 168]);
                _q = __values(cookiesArr.entries()), _r = _q.next();
                _4.label = 149;
            case 149:
                if (!!_r.done) return [3 /*break*/, 165];
                _s = __read(_r.value, 2), index_3 = _s[0], value = _s[1];
                return [4 /*yield*/, getCodes()
                    // 获取随机助力码
                ];
            case 150:
                _4.sent();
                _4.label = 151;
            case 151:
                _4.trys.push([151, 153, , 154]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 152:
                data = (_4.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false)));
                return [3 /*break*/, 154];
            case 153:
                e_13 = _4.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                return [3 /*break*/, 154];
            case 154:
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 155:
                jxToken = _4.sent();
                _4.label = 156;
            case 156:
                _4.trys.push([156, 162, 163, 164]);
                shareCodes_2 = (e_14 = void 0, __values(shareCodes)), shareCodes_2_1 = shareCodes_2.next();
                _4.label = 157;
            case 157:
                if (!!shareCodes_2_1.done) return [3 /*break*/, 161];
                code = shareCodes_2_1.value;
                console.log("\u8D26\u53F7".concat(index_3 + 1, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: code })];
            case 158:
                res = _4.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 159:
                _4.sent();
                _4.label = 160;
            case 160:
                shareCodes_2_1 = shareCodes_2.next();
                return [3 /*break*/, 157];
            case 161: return [3 /*break*/, 164];
            case 162:
                e_14_1 = _4.sent();
                e_14 = { error: e_14_1 };
                return [3 /*break*/, 164];
            case 163:
                try {
                    if (shareCodes_2_1 && !shareCodes_2_1.done && (_1 = shareCodes_2["return"])) _1.call(shareCodes_2);
                }
                finally { if (e_14) throw e_14.error; }
                return [7 /*endfinally*/];
            case 164:
                _r = _q.next();
                return [3 /*break*/, 149];
            case 165: return [3 /*break*/, 168];
            case 166:
                e_15_1 = _4.sent();
                e_15 = { error: e_15_1 };
                return [3 /*break*/, 168];
            case 167:
                try {
                    if (_r && !_r.done && (_0 = _q["return"])) _0.call(_q);
                }
                finally { if (e_15) throw e_15.error; }
                return [7 /*endfinally*/];
            case 168: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, awardCoin, e_17_1;
        var e_17, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 })];
                case 1:
                    res = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 13, 14, 15]);
                    _a = __values(res.data.userTaskStatusList), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 12];
                    t = _b.value;
                    if (!(t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 4:
                    res = _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 6];
                    awardCoin = res.data.prizeInfo.match(/:(.*)}/)[1] * 1;
                    console.log('领奖成功:', awardCoin);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 5:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 6:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 7:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 11];
                    return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 8:
                    res = _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 10];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 9:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 10:
                    console.log('任务失败:', res);
                    return [2 /*return*/, 0];
                case 11:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 12: return [3 /*break*/, 15];
                case 13:
                    e_17_1 = _d.sent();
                    e_17 = { error: e_17_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_17) throw e_17.error; }
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params, temporary) {
    if (params === void 0) { params = {}; }
    if (temporary === void 0) { temporary = false; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        if (temporary)
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc_zanaixin&bizCode=jxmc_zanaixin&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat(String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)), "&g_ty=ls"), stk, params, 10028);
                        else
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc&bizCode=jxmc&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat(String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)), "&g_ty=ls"), stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid'], "&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2"), stk, params, 10028);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;",
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/\n/g, '').match(/jsonpCBK.?\(([^)]*)/)[1])];
                    return [2 /*return*/, data];
                case 3:
                    e_18 = _a.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_19 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_19);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodesHb(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin), { timeout: 10000 })];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_20 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_20);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://api.jdsharecode.xyz/api/HW_CODES')];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data.jxmc || [];
                    shareCodesHbHw = data.jxmchb || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_21 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
