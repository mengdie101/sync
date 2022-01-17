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
var V3_1 = require("./V3");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo = '', jxToken = '', UserName = '';
var shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _a, _b, _c, index, value, lastgettime, food, petid, coins, petNum, petids, e_1, drawTimes, j, _d, _e, card, e_2_1, e_3, _f, _g, day, e_4_1, j, _h, _j, t, j, e_5, j, e_6, e_7_1, _k, _l, _m, index, value, data, e_8, shareCodes_1, shareCodes_1_1, code, e_9_1, e_10_1;
    var e_7, _o, e_2, _p, e_4, _q, e_11, _r, e_10, _s, e_9, _t;
    var _u, _v;
    return __generator(this, function (_w) {
        switch (_w.label) {
            case 0: return [4 /*yield*/, (0, V3_1.requestAlgo)('00df8')];
            case 1:
                _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _w.sent();
                _w.label = 3;
            case 3:
                _w.trys.push([3, 93, 94, 95]);
                _a = __values(cookiesArr.entries()), _b = _a.next();
                _w.label = 4;
            case 4:
                if (!!_b.done) return [3 /*break*/, 92];
                _c = __read(_b.value, 2), index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 5:
                jxToken = _w.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 6:
                homePageInfo = _w.sent();
                lastgettime = void 0;
                if ((_v = (_u = homePageInfo.data) === null || _u === void 0 ? void 0 : _u.cow) === null || _v === void 0 ? void 0 : _v.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 91];
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
                    return [3 /*break*/, 91];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _w.label = 7;
            case 7:
                _w.trys.push([7, 9, , 10]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 8:
                _w.sent();
                return [3 /*break*/, 10];
            case 9:
                e_1 = _w.sent();
                console.log("提交助力码出错");
                return [3 /*break*/, 10];
            case 10:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                    // 扭蛋机
                ];
            case 11:
                _w.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 12:
                // 扭蛋机
                res = _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 13:
                _w.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 15];
                return [4 /*yield*/, (0, notify.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A"))];
            case 14:
                _w.sent();
                return [3 /*break*/, 21];
            case 15:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _w.label = 16;
            case 16:
                if (!(j < drawTimes)) return [3 /*break*/, 21];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 17:
                res = _w.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 19];
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
            case 18:
                _w.sent();
                return [3 /*break*/, 20];
            case 19:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 21];
            case 20:
                j++;
                return [3 /*break*/, 16];
            case 21: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 22:
                res = _w.sent();
                _w.label = 23;
            case 23:
                _w.trys.push([23, 33, , 34]);
                _w.label = 24;
            case 24:
                _w.trys.push([24, 30, 31, 32]);
                _d = (e_2 = void 0, __values(res.data.cardinfo)), _e = _d.next();
                _w.label = 25;
            case 25:
                if (!!_e.done) return [3 /*break*/, 29];
                card = _e.value;
                console.log("card ".concat(card.cardtype), card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 28];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 26:
                res = _w.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 27:
                _w.sent();
                _w.label = 28;
            case 28:
                _e = _d.next();
                return [3 /*break*/, 25];
            case 29: return [3 /*break*/, 32];
            case 30:
                e_2_1 = _w.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 32];
            case 31:
                try {
                    if (_e && !_e.done && (_p = _d["return"])) _p.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 32: return [3 /*break*/, 34];
            case 33:
                e_3 = _w.sent();
                return [3 /*break*/, 34];
            case 34: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 35:
                _w.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 36:
                // 签到
                res = _w.sent();
                if (!res.data.signlist) return [3 /*break*/, 45];
                _w.label = 37;
            case 37:
                _w.trys.push([37, 42, 43, 44]);
                _f = (e_4 = void 0, __values(res.data.signlist)), _g = _f.next();
                _w.label = 38;
            case 38:
                if (!!_g.done) return [3 /*break*/, 41];
                day = _g.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 40];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 39:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 41];
            case 40:
                _g = _f.next();
                return [3 /*break*/, 38];
            case 41: return [3 /*break*/, 44];
            case 42:
                e_4_1 = _w.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 44];
            case 43:
                try {
                    if (_g && !_g.done && (_q = _f["return"])) _q.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 44: return [3 /*break*/, 46];
            case 45:
                console.log('没有获取到签到信息！');
                _w.label = 46;
            case 46: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 47:
                _w.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 48:
                // 登录领白菜
                res = _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 49:
                _w.sent();
                if (!(res.data.iscandraw === 1)) return [3 /*break*/, 51];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 50:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜:', res.data.drawnum);
                }
                _w.label = 51;
            case 51: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 52:
                _w.sent();
                console.log('任务列表开始');
                j = 0;
                _w.label = 53;
            case 53:
                if (!(j < 30)) return [3 /*break*/, 57];
                return [4 /*yield*/, getTask()];
            case 54:
                if ((_w.sent()) === 0) {
                    return [3 /*break*/, 57];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 55:
                _w.sent();
                _w.label = 56;
            case 56:
                j++;
                return [3 /*break*/, 53];
            case 57:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 58:
                _w.sent();
                _w.label = 59;
            case 59:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 62];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 60:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 62];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 61:
                _w.sent();
                return [3 /*break*/, 59];
            case 62: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 63:
                _w.sent();
                _w.label = 64;
            case 64:
                if (!(food >= 10)) return [3 /*break*/, 72];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 65:
                res = _w.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 66];
                console.log('喂食:', res.data.newnum);
                return [3 /*break*/, 70];
            case 66:
                if (!(res.ret === 2020)) return [3 /*break*/, 69];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 67:
                homePageInfo = _w.sent();
                try {
                    for (_h = (e_11 = void 0, __values(homePageInfo.data.petinfo)), _j = _h.next(); !_j.done; _j = _h.next()) {
                        t = _j.value;
                        if (t.cangetborn === 1) {
                            petid = t.petid;
                            break;
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_r = _h["return"])) _r.call(_h);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 68:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 72];
                }
                return [3 /*break*/, 70];
            case 69:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 72];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 72];
                }
                _w.label = 70;
            case 70: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 71:
                _w.sent();
                return [3 /*break*/, 64];
            case 72: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 73:
                _w.sent();
                console.log('除草...start');
                j = 0;
                _w.label = 74;
            case 74:
                if (!(j < 30)) return [3 /*break*/, 83];
                _w.label = 75;
            case 75:
                _w.trys.push([75, 81, , 82]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 76:
                res = _w.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 83];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 77:
                _w.sent();
                if (!res.data.surprise) return [3 /*break*/, 80];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 78:
                res = _w.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 79:
                _w.sent();
                _w.label = 80;
            case 80: return [3 /*break*/, 82];
            case 81:
                e_5 = _w.sent();
                console.log('除草 Error');
                return [3 /*break*/, 83];
            case 82:
                j++;
                return [3 /*break*/, 74];
            case 83: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 84:
                _w.sent();
                j = 0;
                _w.label = 85;
            case 85:
                if (!(j < 30)) return [3 /*break*/, 91];
                _w.label = 86;
            case 86:
                _w.trys.push([86, 89, , 90]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 87:
                res = _w.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 91];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 88:
                _w.sent();
                return [3 /*break*/, 90];
            case 89:
                e_6 = _w.sent();
                console.log('挑逗 Error');
                return [3 /*break*/, 91];
            case 90:
                j++;
                return [3 /*break*/, 85];
            case 91:
                _b = _a.next();
                return [3 /*break*/, 4];
            case 92: return [3 /*break*/, 95];
            case 93:
                e_7_1 = _w.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 95];
            case 94:
                try {
                    if (_b && !_b.done && (_o = _a["return"])) _o.call(_a);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 95:
                _w.trys.push([95, 113, 114, 115]);
                _k = __values(cookiesArr.entries()), _l = _k.next();
                _w.label = 96;
            case 96:
                if (!!_l.done) return [3 /*break*/, 112];
                _m = __read(_l.value, 2), index = _m[0], value = _m[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 98];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxmc')];
            case 97:
                shareCodesHW = _w.sent();
                _w.label = 98;
            case 98:
                _w.trys.push([98, 100, , 101]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 99:
                data = (_w.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false)));
                return [3 /*break*/, 101];
            case 100:
                e_8 = _w.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                return [3 /*break*/, 101];
            case 101:
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 102:
                jxToken = _w.sent();
                _w.label = 103;
            case 103:
                _w.trys.push([103, 109, 110, 111]);
                shareCodes_1 = (e_9 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _w.label = 104;
            case 104:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 108];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: code })];
            case 105:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 106:
                _w.sent();
                _w.label = 107;
            case 107:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 104];
            case 108: return [3 /*break*/, 111];
            case 109:
                e_9_1 = _w.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 111];
            case 110:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_t = shareCodes_1["return"])) _t.call(shareCodes_1);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 111:
                _l = _k.next();
                return [3 /*break*/, 96];
            case 112: return [3 /*break*/, 115];
            case 113:
                e_10_1 = _w.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 115];
            case 114:
                try {
                    if (_l && !_l.done && (_s = _k["return"])) _s.call(_k);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 115: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, awardCoin, e_12_1;
        var e_12, _c;
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
                    e_12_1 = _d.sent();
                    e_12 = { error: e_12_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_12) throw e_12.error; }
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, t, _a, _b, _c, key, value, h5st, data, e_13;
        var e_14, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    t = [
                        { key: 'activeid', value: 'jxmc_active_0001' },
                        { key: 'activekey', value: 'null' },
                        { key: 'channel', value: '7' },
                        { key: 'jxmc_jstoken', value: jxToken['farm_jstoken'] },
                        { key: 'phoneid', value: jxToken['phoneid'] },
                        { key: 'sceneid', value: '1001' },
                        { key: 'timestamp', value: jxToken['timestamp'] },
                    ];
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1)
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc&bizCode=jxmc&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    else
                        url = "https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid'], "&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    try {
                        for (_a = __values(Object.entries(params)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                            t.push({ key: key, value: value });
                            url += "&".concat(key, "=").concat(value);
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                    h5st = (0, V3_1.geth5st)(t, '00df8');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
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
                case 2:
                    data = (_e.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\((.*)/)[1])];
                case 3:
                    e_13 = _e.sent();
                    (0, TS_USER_AGENTS_1.o2s)(e_13);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_15;
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
                    e_15 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_15);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
