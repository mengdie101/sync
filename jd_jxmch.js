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
var cookie = '', res = '', shareCodes = [], homePageInfo = '', jxToken = '', UserName = '';
var shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, lastgettime, food, petid, coins, petNum, petids, e_1, tasks, _d, _e, t, j, e_2_1, drawTimes, j, _f, _g, card, e_3_1, e_4, _h, _j, day, e_5_1, j, _k, _l, t, j, e_6, j, e_7, e_8_1, _m, _o, _p, index, value, data, e_9, shareCodes_1, shareCodes_1_1, code, e_10_1, e_11_1;
    var e_8, _q, e_2, _r, e_3, _s, e_5, _t, e_12, _u, e_11, _v, e_10, _w;
    var _x, _y;
    return __generator(this, function (_z) {
        switch (_z.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _z.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _z.sent();
                _z.label = 3;
            case 3:
                _z.trys.push([3, 113, 114, 115]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _z.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 112];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 5:
                jxToken = _z.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 6:
                homePageInfo = _z.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                    // if (homePageInfo.data.maintaskId !== 'pause') {
                    //   console.log('init...')
                    //   for (let j = 0; j < 20; j++) {
                    //     res = await api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', {step: homePageInfo.data.maintaskId})
                    //     if (res.data.maintaskId === 'pause')
                    //       break
                    //     await wait(2000)
                    //   }
                    // }
                ];
            case 7:
                _z.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 8:
                // if (homePageInfo.data.maintaskId !== 'pause') {
                //   console.log('init...')
                //   for (let j = 0; j < 20; j++) {
                //     res = await api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', {step: homePageInfo.data.maintaskId})
                //     if (res.data.maintaskId === 'pause')
                //       break
                //     await wait(2000)
                //   }
                // }
                homePageInfo = _z.sent();
                lastgettime = void 0;
                if ((_y = (_x = homePageInfo.data) === null || _x === void 0 ? void 0 : _x.cow) === null || _y === void 0 ? void 0 : _y.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 111];
                }
                food = 0, petid = '', coins = 0, petNum = 0, petids = [];
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                    petid = homePageInfo.data.petinfo[0].petid;
                    petids = homePageInfo.data.petinfo.map(function (pet) {
                        return pet.petid;
                    });
                    console.log('当前🐔🐔：', petids);
                    petNum = homePageInfo.data.petinfo.length;
                    coins = homePageInfo.data.coins;
                }
                catch (e) {
                    console.log('初始化出错，手动去app');
                    return [3 /*break*/, 111];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _z.label = 9;
            case 9:
                _z.trys.push([9, 11, , 12]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 10:
                _z.sent();
                return [3 /*break*/, 12];
            case 11:
                e_1 = _z.sent();
                console.log(e_1);
                return [3 /*break*/, 12];
            case 12:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                    // 助农
                ];
            case 13:
                _z.sent();
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 14:
                tasks = _z.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 15:
                _z.sent();
                _z.label = 16;
            case 16:
                _z.trys.push([16, 28, 29, 30]);
                _d = (e_2 = void 0, __values(tasks.data.userTaskStatusList)), _e = _d.next();
                _z.label = 17;
            case 17:
                if (!!_e.done) return [3 /*break*/, 27];
                t = _e.value;
                if (!(t.awardStatus === 2 && !['邀请牧场新用户助力', '拆开邀人红包', '去下单得爱心'].includes(t.taskName))) return [3 /*break*/, 26];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 23];
                j = t.completedTimes;
                _z.label = 18;
            case 18:
                if (!(j < t.targetTimes)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 19:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 22];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 20:
                _z.sent();
                _z.label = 21;
            case 21:
                j++;
                return [3 /*break*/, 18];
            case 22: return [3 /*break*/, 26];
            case 23: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 24:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 27];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 25:
                _z.sent();
                _z.label = 26;
            case 26:
                _e = _d.next();
                return [3 /*break*/, 17];
            case 27: return [3 /*break*/, 30];
            case 28:
                e_2_1 = _z.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 30];
            case 29:
                try {
                    if (_e && !_e.done && (_r = _d["return"])) _r.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 30: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 扭蛋机
            ];
            case 31:
                _z.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 32:
                // 扭蛋机
                res = _z.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 33:
                _z.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 35];
                return [4 /*yield*/, (0, notify.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A"))];
            case 34:
                _z.sent();
                return [3 /*break*/, 41];
            case 35:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _z.label = 36;
            case 36:
                if (!(j < drawTimes)) return [3 /*break*/, 41];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 37:
                res = _z.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 39];
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
            case 38:
                _z.sent();
                return [3 /*break*/, 40];
            case 39:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 41];
            case 40:
                j++;
                return [3 /*break*/, 36];
            case 41: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 42:
                res = _z.sent();
                _z.label = 43;
            case 43:
                _z.trys.push([43, 53, , 54]);
                _z.label = 44;
            case 44:
                _z.trys.push([44, 50, 51, 52]);
                _f = (e_3 = void 0, __values(res.data.cardinfo)), _g = _f.next();
                _z.label = 45;
            case 45:
                if (!!_g.done) return [3 /*break*/, 49];
                card = _g.value;
                console.log("card ".concat(card.cardtype), card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 48];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 46:
                res = _z.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 47:
                _z.sent();
                _z.label = 48;
            case 48:
                _g = _f.next();
                return [3 /*break*/, 45];
            case 49: return [3 /*break*/, 52];
            case 50:
                e_3_1 = _z.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 52];
            case 51:
                try {
                    if (_g && !_g.done && (_s = _f["return"])) _s.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 52: return [3 /*break*/, 54];
            case 53:
                e_4 = _z.sent();
                return [3 /*break*/, 54];
            case 54: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 55:
                _z.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 56:
                // 签到
                res = _z.sent();
                if (!res.data.signlist) return [3 /*break*/, 65];
                _z.label = 57;
            case 57:
                _z.trys.push([57, 62, 63, 64]);
                _h = (e_5 = void 0, __values(res.data.signlist)), _j = _h.next();
                _z.label = 58;
            case 58:
                if (!!_j.done) return [3 /*break*/, 61];
                day = _j.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 60];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 59:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 61];
            case 60:
                _j = _h.next();
                return [3 /*break*/, 58];
            case 61: return [3 /*break*/, 64];
            case 62:
                e_5_1 = _z.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 64];
            case 63:
                try {
                    if (_j && !_j.done && (_t = _h["return"])) _t.call(_h);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 64: return [3 /*break*/, 66];
            case 65:
                console.log('没有获取到签到信息！');
                _z.label = 66;
            case 66: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 67:
                _z.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 68:
                // 登录领白菜
                res = _z.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 69:
                _z.sent();
                if (!(res.data.iscandraw === 1)) return [3 /*break*/, 71];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 70:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜:', res.data.drawnum);
                }
                _z.label = 71;
            case 71: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 72:
                _z.sent();
                console.log('任务列表开始');
                j = 0;
                _z.label = 73;
            case 73:
                if (!(j < 30)) return [3 /*break*/, 77];
                return [4 /*yield*/, getTask()];
            case 74:
                if ((_z.sent()) === 0) {
                    return [3 /*break*/, 77];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 75:
                _z.sent();
                _z.label = 76;
            case 76:
                j++;
                return [3 /*break*/, 73];
            case 77:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 78:
                _z.sent();
                _z.label = 79;
            case 79:
                if (!(coins >= 5000)) return [3 /*break*/, 82];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 80:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 82];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 81:
                _z.sent();
                return [3 /*break*/, 79];
            case 82: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 83:
                _z.sent();
                _z.label = 84;
            case 84:
                if (!(food >= 10)) return [3 /*break*/, 92];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 85:
                res = _z.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 86];
                console.log('喂食:', res.data.newnum);
                return [3 /*break*/, 90];
            case 86:
                if (!(res.ret === 2020)) return [3 /*break*/, 89];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 87:
                homePageInfo = _z.sent();
                try {
                    for (_k = (e_12 = void 0, __values(homePageInfo.data.petinfo)), _l = _k.next(); !_l.done; _l = _k.next()) {
                        t = _l.value;
                        if (t.cangetborn === 1) {
                            petid = t.petid;
                            break;
                        }
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (_l && !_l.done && (_u = _k["return"])) _u.call(_k);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 88:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 92];
                }
                return [3 /*break*/, 90];
            case 89:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 92];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 92];
                }
                _z.label = 90;
            case 90: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 91:
                _z.sent();
                return [3 /*break*/, 84];
            case 92: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 93:
                _z.sent();
                console.log('除草...start');
                j = 0;
                _z.label = 94;
            case 94:
                if (!(j < 30)) return [3 /*break*/, 103];
                _z.label = 95;
            case 95:
                _z.trys.push([95, 101, , 102]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 96:
                res = _z.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 103];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 97:
                _z.sent();
                if (!res.data.surprise) return [3 /*break*/, 100];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 98:
                res = _z.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 99:
                _z.sent();
                _z.label = 100;
            case 100: return [3 /*break*/, 102];
            case 101:
                e_6 = _z.sent();
                console.log('除草 Error:', e_6.response);
                return [3 /*break*/, 103];
            case 102:
                j++;
                return [3 /*break*/, 94];
            case 103: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 104:
                _z.sent();
                j = 0;
                _z.label = 105;
            case 105:
                if (!(j < 30)) return [3 /*break*/, 111];
                _z.label = 106;
            case 106:
                _z.trys.push([106, 109, , 110]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 107:
                res = _z.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 111];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 108:
                _z.sent();
                return [3 /*break*/, 110];
            case 109:
                e_7 = _z.sent();
                console.log('挑逗 Error:', e_7.response);
                return [3 /*break*/, 111];
            case 110:
                j++;
                return [3 /*break*/, 105];
            case 111:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 112: return [3 /*break*/, 115];
            case 113:
                e_8_1 = _z.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 115];
            case 114:
                try {
                    if (_b && !_b.done && (_q = _a["return"])) _q.call(_a);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 115: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 116:
                _z.sent();
                _z.label = 117;
            case 117:
                _z.trys.push([117, 135, 136, 137]);
                _m = __values(cookiesArr.entries()), _o = _m.next();
                _z.label = 118;
            case 118:
                if (!!_o.done) return [3 /*break*/, 134];
                _p = __read(_o.value, 2), index = _p[0], value = _p[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 120];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxmc')];
            case 119:
                shareCodesHW = _z.sent();
                _z.label = 120;
            case 120:
                _z.trys.push([120, 122, , 123]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 121:
                data = (_z.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false)));
                return [3 /*break*/, 123];
            case 122:
                e_9 = _z.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                return [3 /*break*/, 123];
            case 123:
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 124:
                jxToken = _z.sent();
                _z.label = 125;
            case 125:
                _z.trys.push([125, 131, 132, 133]);
                shareCodes_1 = (e_10 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _z.label = 126;
            case 126:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 130];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: code })];
            case 127:
                res = _z.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 128:
                _z.sent();
                _z.label = 129;
            case 129:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 126];
            case 130: return [3 /*break*/, 133];
            case 131:
                e_10_1 = _z.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 133];
            case 132:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_w = shareCodes_1["return"])) _w.call(shareCodes_1);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 133:
                _o = _m.next();
                return [3 /*break*/, 118];
            case 134: return [3 /*break*/, 137];
            case 135:
                e_11_1 = _z.sent();
                e_11 = { error: e_11_1 };
                return [3 /*break*/, 137];
            case 136:
                try {
                    if (_o && !_o.done && (_v = _m["return"])) _v.call(_m);
                }
                finally { if (e_11) throw e_11.error; }
                return [7 /*endfinally*/];
            case 137: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, awardCoin, e_13_1;
        var e_13, _c;
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
                    e_13_1 = _d.sent();
                    e_13 = { error: e_13_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_13) throw e_13.error; }
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
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        if (temporary)
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc_zanaixin&bizCode=jxmc_zanaixin&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), stk, params, 10028);
                        else
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc&bizCode=jxmc&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid'], "&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), stk, params, 10028);
                    }
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'User-Agent': 'jdpingou;iPhone;5.15.0;15.1;3271867e5dc749cc8cc76aa5aa6a084eea8e7920;network/wifi;model/iPhone11,6;appBuild/100779;ADID/;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/15;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\((.*)/)[1])];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_14;
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
                    e_14 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_14);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
