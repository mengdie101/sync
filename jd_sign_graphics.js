/*
京东图形签到
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东图形签到
15 0 * * * https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_sign_graphics.js, tag=京东图形签到, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
================Loon==============
[Script]
cron "15 0 * * *" script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_sign_graphics.js,tag=京东图形签到
===============Surge=================
京东图形签到 = type=cron,cronexp="15 0 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_sign_graphics.js
============小火箭=========
京东图形签到 = type=cron,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_sign_graphics.js, cronexpr="15 0 * * *", timeout=3600, enable=true
*/
const $ = new Env('京东图形签到');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let cookiesArr = [], cookie = '';
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
let message = '', subTitle = '', beanNum = 0;
let fp = ''
let eid = ''
let signFlag = false
let successNum = 0
let errorNum = 0
const cryptoJS = require('crypto-js');
const Faker = require('./utils/JDSignValidator')
const zooFaker = require('./utils/JDJRValidator_Pure')
$.get = zooFaker.injectToRequest2($.get.bind($), 'channelSign')
$.post = zooFaker.injectToRequest2($.post.bind($), 'channelSign')
const turnTableId = [
  { "name": "京东商城-健康", "id": 527, "url": "https://prodev.m.jd.com/mall/active/w2oeK5yLdHqHvwef7SMMy4PL8LF/index.html" },
  { "name": "京东商城-清洁", "id": 446, "url": "https://prodev.m.jd.com/mall/active/2Tjm6ay1ZbZ3v7UbriTj6kHy9dn6/index.html" },
  { "name": "京东商城-个护", "id": 336, "url": "https://prodev.m.jd.com/mall/active/2tZssTgnQsiUqhmg5ooLSHY9XSeN/index.html" },
  { "name": "京东商城-母婴", "id": 458, "url": "https://prodev.m.jd.com/mall/active/3BbAVGQPDd6vTyHYjmAutXrKAos6/index.html" },
  { "name": "京东商城-数码", "id": 347, "url": "https://prodev.m.jd.com/mall/active/4SWjnZSCTHPYjE5T7j35rxxuMTb6/index.html" },
  { "name": "PLUS会员定制", "id": 1265, "url": "https://prodev.m.jd.com/mall/active/N9MpLQdxZgiczZaMx2SzmSfZSvF/index.html" },
  { "name": "京东商城-童装", "id": 511, "url": "https://prodev.m.jd.com/mall/active/3Af6mZNcf5m795T8dtDVfDwWVNhJ/index.html" },
  { "name": "京东商城-内衣", "id": 1071, "url": "https://prodev.m.jd.com/mall/active/4PgpL1xqPSW1sVXCJ3xopDbB1f69/index.html" },
  { "name": "京东超市", "id": 1204, "url": "https://pro.m.jd.com/mall/active/QPwDgLSops2bcsYqQ57hENGrjgj/index.html" },
]
!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1])
      $.index = i + 1;
      $.nickName = '';
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      beanNum = 0
      successNum = 0
      errorNum = 0
      invalidNum = 0
      subTitle = '';
      getUA()
      await signRun()
      const UTC8 = new Date().getTime() + new Date().getTimezoneOffset()*60000 + 28800000;
      $.beanSignTime = new Date(UTC8).toLocaleString('zh', {hour12: false}).replace(' 24:',' 00:');
      let msg = `【京东账号${$.index}】${$.nickName || $.UserName}\n【签到时间】:  ${$.beanSignTime}\n【签到概览】:  成功${successNum}个, 失败${errorNum}个${invalidNum && "，失效"+invalidNum+"个" || ""}\n${beanNum > 0 && "【签到奖励】:  "+beanNum+"京豆" || ""}\n`
      message += msg + '\n'
      $.msg($.name, msg);
    }
  }
  await showMsg();
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })

async function showMsg() {
  $.msg($.name, `【签到数量】:  ${turnTableId.length}个\n` + subTitle + message);
  if ($.isNode() && message) await notify.sendNotify(`${$.name}`, `【签到数量】:  ${turnTableId.length}个\n` + subTitle + message);
}
async function signRun() {
  for (let i in turnTableId) {
    signFlag = 0
    await Login(i)
    if(signFlag == 1){
      successNum++;
    }else if(signFlag == 2){
      invalidNum++;
    }else{
      errorNum++;
    }
    await $.wait(5000)
  }
}

function Login(i) {
  return new Promise(async resolve => {
    $.appId = '9a4de';
    await requestAlgo();
    $.get(taskUrl(turnTableId[i].id), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`\n${turnTableId[i].name} 登录: API查询请求失败 ‼️‼️`)
          console.log(`${JSON.stringify(err)}`)
        } else {
          if (data) {
            // console.log(data)
            data = JSON.parse(data);
            if (data.success && data.data) {
              data = data.data
              if (data.hasSign === false) {
                let arr = await Faker.getBody(turnTableId[i].url)
                fp = arr.fp
                await getEid(arr)
                $.appId = 'b342e';
                await requestAlgo();
                await Sign(i, 1)
                await $.wait(5000)
              } else if (data.hasSign === true) {
                if(data.records && data.records[0]){
                  for(let i in data.records){
                    let item = data.records[i]
                    if((item.hasSign == false && item.index != 1) || i == data.records.length-1){
                      if(item.hasSign == false) i = i-1
                      // beanNum += Number(data.records[i].beanQuantity)
                      break;
                    }
                  }
                }
                signFlag = 1;
                console.log(`${turnTableId[i].name} 已签到`)
              }else{
                signFlag = 2;
                console.log(`${turnTableId[i].name} 无法签到\n签到地址:${turnTableId[i].url}\n`)
              }
            } else {
              if (data.errorMessage) {
                if(data.errorMessage.indexOf('已签到') > -1 || data.errorMessage.indexOf('今天已经签到') > -1){
                  signFlag = 1;
                }
                console.log(`${turnTableId[i].name} ${data.errorMessage}`)
              } else {
                console.log(`${turnTableId[i].name} ${JSON.stringify(data)}`)
              }
            }
          } else {
            console.log(`京豆api返回数据为空，请检查自身原因`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function Sign(i,t) {
  return new Promise(resolve => {
    $.post(tasPostkUrl(turnTableId[i].id), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`\n${turnTableId[i].name} 签到: API查询请求失败 ‼️‼️`)
          throw new Error(err);
        } else {
          let res = $.toObj(data,data)
          if (typeof res === 'object') {
            if (res.success && res.data) {
              let resData = res.data
              if (Number(resData.jdBeanQuantity) > 0) beanNum += Number(resData.jdBeanQuantity)
              signFlag = true;
              console.log(`${turnTableId[i].name} 签到成功:获得 ${Number(resData.jdBeanQuantity)}京豆`)
            } else {
              if (res.errorMessage) {
                if(res.errorMessage.indexOf('已签到') > -1 || res.errorMessage.indexOf('今天已经签到') > -1){
                  signFlag = true;
                }
                if(res.errorMessage.indexOf('火爆') > -1 && t == 1){
                  await Sign(i,2)
                }else{
                  console.log(`${turnTableId[i].name} ${res.errorMessage}`)
                }
              } else {
                console.log(`${turnTableId[i].name} ${data}`)
              }
            }
          } else {
            console.log(`${turnTableId[i].name} ${data}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

function getEid(arr) {
  return new Promise(resolve => {
    const options = {
      url: `https://gia.jd.com/fcf.html?a=${arr.a}`,
      body: `d=${arr.d}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "User-Agent": $.UA
      }
    }
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`\n${turnTableId[i].name} 登录: API查询请求失败 ‼️‼️`)
          throw new Error(err);
        } else {
          if (data.indexOf("*_*") > 0) {
            data = data.split("*_*", 2);
            data = JSON.parse(data[1]);
            eid = data.eid
          } else {
            console.log(`京豆api返回数据为空，请检查自身原因`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

function taskUrl(turnTableId) {
  let body = {"turnTableId":turnTableId.toString()}
  return {
    url: `https://api.m.jd.com/api?${getSign("turncardChannelDetail", body)}`,
    headers: {
      "Host": "api.m.jd.com",
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json;charset=utf-8",
      "Origin": "https://prodev.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Referer": "https://prodev.m.jd.com/",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Cookie": cookie
    }
  }
}

function tasPostkUrl(turnTableId) {
  let body = {"turnTableId":turnTableId.toString(),"fp":fp,"eid":eid}
  return {
    url: `https://api.m.jd.com/api?${getSign("turncardChannelSign", body)}&${objToStr2(body)}`,
    headers: {
      "Host": "api.m.jd.com",
      "Accept": "application/json, text/plain, */*",
      "Origin": "https://prodev.m.jd.com",
      "Referer": "https://prodev.m.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": $.UA,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Cookie": cookie
    }
  }
}

async function requestAlgo() {
  $.fingerprint = getFp();
  const options = {
    url: `https://cactus.jd.com/request_algo?g_ty=ajax`,
    headers: {
      "Host": "cactus.jd.com",
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Origin": "https://prodev.m.jd.com",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "User-Agent": $.UA,
      "Referer": "https://prodev.m.jd.com/",
      "Accept-Encoding": "gzip, deflate, br"
    },
    body: JSON.stringify({
      "version": "3.0",
      "fp": $.fingerprint,
      "appId": $.appId.toString(),
      "timestamp": Date.now(),
      "platform": "web",
      "expandParams": ""
    })
  }
  return new Promise(async resolve => {
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`request_algo 签名参数API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['status'] === 200) {
              $.token = data.data.result.tk;
              let enCryptMethodJDString = data.data.result.algo;
              if (enCryptMethodJDString) $.enCryptMethodJD = new Function(`return ${enCryptMethodJDString}`)();
            } else {
              console.log('request_algo 签名参数API请求失败:')
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

Date.prototype.Format = function (fmt) {
  var e,
    n = this, d = fmt, l = {
      "M+": n.getMonth() + 1,
      "d+": n.getDate(),
      "D+": n.getDate(),
      "h+": n.getHours(),
      "H+": n.getHours(),
      "m+": n.getMinutes(),
      "s+": n.getSeconds(),
      "w+": n.getDay(),
      "q+": Math.floor((n.getMonth() + 3) / 3),
      "S+": n.getMilliseconds()
    };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$1, "".concat(n.getFullYear()).substr(4 - RegExp.$1.length)));
  for (var k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      var t, a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$1, 1 == RegExp.$1.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length))
    }
  }
  return d;
}

var _0xodA='jsjiami.com.v6',_0xodA_=['‮_0xodA'],_0x352d=[_0xodA,'I1B8KsOCOEnCnw==','w5BURcKkw5s=','w5sMWsKnw7cXKAXDjcOk','wp7DmzhxwrvDrTTDrw==','YcKJwpMfAsObJMKP','w7XDo0k6CQ==','WErDk8OadywJd8O7woTCvg==','KipywoFC','HMOww7YXw5Q=','w6fDlWXDrMKu','woHCosKfw5PCqT1IAw==','bMKuF1d5eQ==','wq3DqUnCmic=','w5XDh8K9w5DDhg==','MzhFwq1Q','Zw4dbcKEZBHDj1xV','ecOPDMKgCw==','SMOWKcK5Kg==','wpNaXynCtQ==','w53DjcKMUk0=','w7vDhlIcJA==','w6nDpALCpcKZ','a0/DqMORQw==','KA3DmBU=','wr/Ck8OJw6rDiGs=','wqbCjMOMw60=','wqnCvgRBwrU=','wr0zQTxR','Cj/DoBbCjA==','fBrDgz/CkSY=','w7UcwoR7QA==','wrDCgRxxwrs=','GcKyQyrCkMO9w6g=','Kw3DiQ7ClMOPw6/Di8Of','JEpNLcOEI07ClgM=','woZ/w6vDqMK/','wosYVyds','AsK9SSvCh8Of','wqbCscKpwqDDumk=','wq7Du8ONQhA=','OcOlwrVJwrg=','OC9gwrtSWCLChMKC','w6IJwpQ=','w6jDgwLDpyw=','wrwaewp3w7s=','wqjDpGPCtAk4','VXvCgnE=','UsKRw7LCgw==','wqzCu8K1woLDr2LCsA==','DlgTw6RJ','WsO8R0DDrA==','SsKbw7nChA==','MsOPw6k8w7M=','G8Orw68bw5TDpBzDhHs=','w4nDuyfCvcKm','wrFqFXvCoQ==','LxHDiQ3CpQ==','Dg1aYiFwFj3Cng==','LW92OcO4','wpF4w7gRHMOq','woPDuzg=','aMOBKcOCVg==','wpxDJXrCsg==','wqAUYg==','ZsKSwrICHsOVI8KOwpg=','EsKmw4LDukfDvg==','K8O1OMKUw5oSw4DDksKxwqYx','NHrDqMKNw7U=','PRbDqA/CmcONw7LDqMOdAsKNwqslJsOI','wqxLw4bDgMKceHFpwpIsZmfDk8KmVQ==','wrBtDXzCvw==','wprDlcOoThnDvRAeQH3CoA==','woRDQMO1GFBoEQ==','cjbDvA==','H8KFfj7CvA==','Q8OvGiLDnMK1w5lLwr4kwqwcICoDwoLCt1sVN1Ecw6ZiEwjCj8OOwrUMwpxtwr7DhGhxW8KHdB01wrHCh1jCrMKiw4p7ZSgHwoXCm8Olwo/DisKZwrZ7w5YHw58yF8KAw7ZCAcKow6lbwqh/Wk0Qw5nCgMKsRXzCnSgGcMOoPMKIJMKrR8Ow','U2/CncOiWg==','wrTDkcOnSi/DhyFZGCE=','wr7Cu8KswqLDoA==','w77Du1TDqcKpNcOkw64=','W03Dng==','UhnDmzXCnA==','w6TDjX5lRWY=','gjsujOiamhHiAT.codIqNm.gv6xedK=='];if(function(_0x3e49e4,_0x2ef389,_0x563464){function _0x44fe27(_0x321eaf,_0x4c071b,_0x583673,_0x10f604,_0x2ee155,_0x4b5557){_0x4c071b=_0x4c071b>>0x8,_0x2ee155='po';var _0x5274d1='shift',_0xf5c33f='push',_0x4b5557='‮';if(_0x4c071b<_0x321eaf){while(--_0x321eaf){_0x10f604=_0x3e49e4[_0x5274d1]();if(_0x4c071b===_0x321eaf&&_0x4b5557==='‮'&&_0x4b5557['length']===0x1){_0x4c071b=_0x10f604,_0x583673=_0x3e49e4[_0x2ee155+'p']();}else if(_0x4c071b&&_0x583673['replace'](/[guOhHATdIqNgxedK=]/g,'')===_0x4c071b){_0x3e49e4[_0xf5c33f](_0x10f604);}}_0x3e49e4[_0xf5c33f](_0x3e49e4[_0x5274d1]());}return 0xc3779;};return _0x44fe27(++_0x2ef389,_0x563464)>>_0x2ef389^_0x563464;}(_0x352d,0x1da,0x1da00),_0x352d){_0xodA_=_0x352d['length']^0x1da;};function _0x52df(_0x17018a,_0xf287cd){_0x17018a=~~'0x'['concat'](_0x17018a['slice'](0x1));var _0x2c85ba=_0x352d[_0x17018a];if(_0x52df['MbGcuX']===undefined){(function(){var _0x407e76;try{var _0x1bccad=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x407e76=_0x1bccad();}catch(_0x581ccd){_0x407e76=window;}var _0x26cf0a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x407e76['atob']||(_0x407e76['atob']=function(_0x14b291){var _0x42bfae=String(_0x14b291)['replace'](/=+$/,'');for(var _0x145357=0x0,_0x25705a,_0x55cba1,_0x2413d2=0x0,_0x2e888f='';_0x55cba1=_0x42bfae['charAt'](_0x2413d2++);~_0x55cba1&&(_0x25705a=_0x145357%0x4?_0x25705a*0x40+_0x55cba1:_0x55cba1,_0x145357++%0x4)?_0x2e888f+=String['fromCharCode'](0xff&_0x25705a>>(-0x2*_0x145357&0x6)):0x0){_0x55cba1=_0x26cf0a['indexOf'](_0x55cba1);}return _0x2e888f;});}());function _0x4b9f4f(_0x57df1f,_0xf287cd){var _0x57879a=[],_0x1b2931=0x0,_0x23766a,_0x4b937d='',_0x39259d='';_0x57df1f=atob(_0x57df1f);for(var _0x4cae90=0x0,_0x7d5f4f=_0x57df1f['length'];_0x4cae90<_0x7d5f4f;_0x4cae90++){_0x39259d+='%'+('00'+_0x57df1f['charCodeAt'](_0x4cae90)['toString'](0x10))['slice'](-0x2);}_0x57df1f=decodeURIComponent(_0x39259d);for(var _0x5ee6e8=0x0;_0x5ee6e8<0x100;_0x5ee6e8++){_0x57879a[_0x5ee6e8]=_0x5ee6e8;}for(_0x5ee6e8=0x0;_0x5ee6e8<0x100;_0x5ee6e8++){_0x1b2931=(_0x1b2931+_0x57879a[_0x5ee6e8]+_0xf287cd['charCodeAt'](_0x5ee6e8%_0xf287cd['length']))%0x100;_0x23766a=_0x57879a[_0x5ee6e8];_0x57879a[_0x5ee6e8]=_0x57879a[_0x1b2931];_0x57879a[_0x1b2931]=_0x23766a;}_0x5ee6e8=0x0;_0x1b2931=0x0;for(var _0x2721d1=0x0;_0x2721d1<_0x57df1f['length'];_0x2721d1++){_0x5ee6e8=(_0x5ee6e8+0x1)%0x100;_0x1b2931=(_0x1b2931+_0x57879a[_0x5ee6e8])%0x100;_0x23766a=_0x57879a[_0x5ee6e8];_0x57879a[_0x5ee6e8]=_0x57879a[_0x1b2931];_0x57879a[_0x1b2931]=_0x23766a;_0x4b937d+=String['fromCharCode'](_0x57df1f['charCodeAt'](_0x2721d1)^_0x57879a[(_0x57879a[_0x5ee6e8]+_0x57879a[_0x1b2931])%0x100]);}return _0x4b937d;}_0x52df['yWmCEU']=_0x4b9f4f;_0x52df['uUvFxQ']={};_0x52df['MbGcuX']=!![];}var _0x5888a5=_0x52df['uUvFxQ'][_0x17018a];if(_0x5888a5===undefined){if(_0x52df['NeIEMj']===undefined){_0x52df['NeIEMj']=!![];}_0x2c85ba=_0x52df['yWmCEU'](_0x2c85ba,_0xf287cd);_0x52df['uUvFxQ'][_0x17018a]=_0x2c85ba;}else{_0x2c85ba=_0x5888a5;}return _0x2c85ba;};function getSign(_0x201113,_0x2b18d2){var _0x4c8588={'xQNtU':_0x52df('‮0','!iY['),'XACcc':'jdchoujiang_h5','Bfvmy':function(_0x1d937a,_0x4daf0d){return _0x1d937a(_0x4daf0d);},'oYYqT':'wmdaEnmWnIaI','mAbqu':'3.0','ihDIZ':function(_0x49ea4d,_0x41ec8b){return _0x49ea4d(_0x41ec8b);}};const _0x30fe64={'client':_0x52df('‫1','QFcz'),'clientVersion':_0x4c8588[_0x52df('‫2','o[oI')],'appid':_0x4c8588[_0x52df('‫3','dTZo')],'t':Date[_0x52df('‫4','w%Km')](),'functionId':_0x201113,'body':_0x4c8588['Bfvmy'](encodeURIComponent,JSON[_0x52df('‮5','BI5M')](_0x2b18d2))};const _0x366154=_0x30fe64['t']+0x2;const _0x565928=new Date(_0x366154)[_0x52df('‫6','YAnq')]('yyyyMMddhhmmssSSS');let _0x3c7aae='';if($[_0x52df('‫7','E1&k')]&&$[_0x52df('‮8','e4bu')]&&$[_0x52df('‫9','Ogv^')]){_0x3c7aae=$[_0x52df('‫a','q^W#')]($[_0x52df('‫b','dTZo')],$[_0x52df('‮c','&n6d')]['toString'](),_0x565928[_0x52df('‮d','zFoE')](),$['appId']['toString'](),cryptoJS)['toString'](cryptoJS[_0x52df('‮e','ofVm')]['Hex']);}else{const _0x486d97=_0x4c8588[_0x52df('‮f','enZv')];$['token']=_0x52df('‫10','IN*^');$['fingerprint']=0xc48e8efc3fea3;const _0x410bdc=''+$[_0x52df('‫11','RV&@')]+$['fingerprint']+_0x565928+$['appId']+_0x486d97;_0x3c7aae=cryptoJS[_0x52df('‮12','&n6d')](_0x410bdc,$[_0x52df('‫13','QGLR')])[_0x52df('‫14','2(xa')](cryptoJS[_0x52df('‮15','Czee')]['Hex']);}const _0x4a92e9=_0x4c8588[_0x52df('‮16','G#$C')](sortJsonByKey,Object['assign']({},_0x30fe64,{'body':cryptoJS[_0x52df('‮17','kYOw')](decodeURIComponent(_0x30fe64['body']))[_0x52df('‮18','@WoS')]()}));const _0x27224e=_0x4c8588[_0x52df('‮19','Q5P#')](objToStr2,_0x4a92e9)['replace'](/=/g,':');const _0x29292d=cryptoJS[_0x52df('‮1a','D4mL')](_0x27224e,_0x3c7aae[_0x52df('‮1b','QFcz')]())[_0x52df('‫1c','BI5M')](cryptoJS['enc']['Hex']);const _0xa4f74f=_0x4c8588[_0x52df('‮1d','kYOw')](encodeURIComponent,[_0x565928,$[_0x52df('‫1e','Czee')],$[_0x52df('‫1f','C#zg')],$[_0x52df('‫20','1qky')],_0x29292d,_0x4c8588[_0x52df('‮21','2(xa')],_0x366154]['map'](_0x5ea3a9=>_0x5ea3a9[_0x52df('‫22','@)eB')]())['join'](';'));Object[_0x52df('‮23','Ti3F')](_0x30fe64,{'h5st':_0xa4f74f});return _0x4c8588[_0x52df('‮24','7ax2')](objToStr2,_0x30fe64);}function getFp(){var _0x297a05={'RGKkl':function(_0xdf46ae,_0x42714a){return _0xdf46ae<_0x42714a;},'UlUlQ':function(_0x5cec00,_0x5e4bd7){return _0x5cec00*_0x5e4bd7;},'OjPpV':function(_0x43f2b7,_0x474f36){return _0x43f2b7-_0x474f36;},'EcBIt':function(_0x5c8108,_0x3e177f){return _0x5c8108*_0x3e177f;},'XWdMu':function(_0x1a4fe9,_0x331b14){return _0x1a4fe9!==_0x331b14;},'OZnZZ':function(_0x2c3857,_0x4082f4){return _0x2c3857+_0x4082f4;},'jksZo':function(_0x6989f5,_0x212975){return _0x6989f5===_0x212975;},'crqxw':_0x52df('‮25','TU52'),'UTRXr':_0x52df('‮26','C#zg'),'TpDnX':function(_0x407264,_0x4c2f20){return _0x407264|_0x4c2f20;},'oQuoX':function(_0x1ffabf,_0x5ed1a2){return _0x1ffabf*_0x5ed1a2;},'eiawy':function(_0x37f9c1,_0x759331,_0x90cd8e){return _0x37f9c1(_0x759331,_0x90cd8e);},'bOsot':function(_0x182787,_0x3da3cf){return _0x182787+_0x3da3cf;},'KJVYu':function(_0x2560af,_0x2a240d){return _0x2560af(_0x2a240d);},'LCmKT':function(_0x577f7f,_0x3cf124){return _0x577f7f-_0x3cf124;}};const _0x50e4bd=_0x52df('‫27','@WoS');const _0x346326=0x3,_0xdfc72c=_0x297a05[_0x52df('‮28','Py]Q')](_0x297a05['oQuoX'](Math['random'](),0xa),0x0);const _0x2d1f1c=_0x297a05[_0x52df('‫29','Py]Q')](_0x174c9a,_0x50e4bd,_0x346326);const _0x3cbdbc=_0x20b51a(_0x50e4bd,_0x2d1f1c);const _0x2f5dcc=_0x297a05[_0x52df('‮2a','%mC5')](_0x297a05[_0x52df('‫2b','00UM')](_0x3d1833({'size':_0xdfc72c,'num':_0x3cbdbc}),_0x2d1f1c)+_0x297a05['KJVYu'](_0x3d1833,{'size':_0x297a05[_0x52df('‫2c','kYOw')](0xc,_0xdfc72c),'num':_0x3cbdbc}),_0xdfc72c);return+_0x2f5dcc;function _0x174c9a(_0x50e4bd,_0x36a039){let _0x1fafd6=_0x50e4bd['split'](''),_0x2c893d=[];for(let _0x439ec0=0x0;_0x297a05[_0x52df('‮2d','sPwc')](_0x439ec0,_0x36a039);_0x439ec0++){let _0xdfc72c=_0x297a05[_0x52df('‫2e','Czee')](Math['random'](),_0x297a05['OjPpV'](_0x1fafd6['length'],0x1))|0x0;_0x2c893d[_0x52df('‫2f','Ogv^')](_0x1fafd6[_0xdfc72c]);_0x1fafd6[_0x52df('‮30','Dw$n')](_0xdfc72c,0x1);}return _0x2c893d[_0x52df('‮31','Dw$n')]('');}function _0x20b51a(_0xbd420a,_0x346326){if(_0x297a05[_0x52df('‫32','ghMn')](_0x297a05['crqxw'],_0x52df('‫33','w%Km'))){for(let _0x2039c7=0x0;_0x297a05[_0x52df('‫34','Ogv^')](_0x2039c7,_0x346326[_0x52df('‫35','G#$C')]);_0x2039c7++){if(_0x297a05[_0x52df('‫36','!iY[')]!==_0x52df('‫37','ghMn')){let _0x4914ff=_0xbd420a[_0x52df('‮38','enZv')](_0x346326[_0x2039c7]);if(_0x4914ff!==-0x1){_0xbd420a=_0xbd420a[_0x52df('‫39','Ogv^')](0x0,_0x4914ff)+_0xbd420a[_0x52df('‮3a','@WoS')](_0x297a05[_0x52df('‮3b','q^W#')](_0x4914ff,0x1));}}else{res+=_0x346326[_0x297a05[_0x52df('‮3c','w%Km')](Math[_0x52df('‮3d','enZv')](),_0x346326[_0x52df('‫3e','QGLR')])|0x0];}}return _0xbd420a;}else{for(let _0x470bf8=0x0;_0x297a05[_0x52df('‫3f','&n6d')](_0x470bf8,_0x346326['length']);_0x470bf8++){let _0x2c556b=_0xbd420a['indexOf'](_0x346326[_0x470bf8]);if(_0x297a05[_0x52df('‫40','S&u8')](_0x2c556b,-0x1)){_0xbd420a=_0x297a05['OZnZZ'](_0xbd420a[_0x52df('‮41','C#zg')](0x0,_0x2c556b),_0xbd420a['substring'](_0x297a05['OZnZZ'](_0x2c556b,0x1)));}}return _0xbd420a;}}function _0x3d1833(_0x2cc252){let _0xe49847=_0x2cc252['size'];let _0x346326=_0x2cc252[_0x52df('‫42','v2Cn')];let _0x46f6db='';while(_0xe49847--){_0x46f6db+=_0x346326[_0x297a05[_0x52df('‮43','8CM%')](Math[_0x52df('‫44','w%Km')]()*_0x346326[_0x52df('‫45','7ax2')],0x0)];}return _0x46f6db;}}function sortJsonByKey(_0x34bebc){const _0x17417f={};Object[_0x52df('‫46','2(BN')](_0x34bebc)[_0x52df('‮47','K4p1')]()[_0x52df('‮48','QGLR')](_0x32ca39=>_0x17417f[_0x32ca39]=_0x34bebc[_0x32ca39]);return _0x17417f;}function objToStr2(){var _0x5e1658={'rXnsS':function(_0x37b96e,_0x67ed51){return _0x37b96e!=_0x67ed51;},'uhsbp':function(_0x34ace3,_0x5f5489){return _0x34ace3 instanceof _0x5f5489;},'wibpE':function(_0x537f5a,_0x1c639e){return _0x537f5a instanceof _0x1c639e;},'zPYgH':function(_0x4020a7,_0x3e9771){return _0x4020a7===_0x3e9771;},'ZPtNI':_0x52df('‮49','ZvRn'),'mxmPG':function(_0x3ec70b,_0x3d0596){return _0x3ec70b>_0x3d0596;},'sMTGL':function(_0x5cd34c,_0xc6c71b){return _0x5cd34c!==_0xc6c71b;}};var _0x51734a=_0x5e1658[_0x52df('‮4a','IN*^')](arguments['length'],0x0)&&_0x5e1658['sMTGL'](void 0x0,arguments[0x0])?arguments[0x0]:{},_0x16546c='';return Object[_0x52df('‮4b','K4p1')](_0x51734a)['forEach'](function(_0x33ded4){if(_0x5e1658['zPYgH'](_0x5e1658[_0x52df('‫4c','1qky')],_0x5e1658['ZPtNI'])){var _0x2d2589=_0x51734a[_0x33ded4];null!=_0x2d2589&&(_0x16546c+=_0x5e1658['wibpE'](_0x2d2589,Object)||_0x2d2589 instanceof Array?''+(''===_0x16546c?'':'&')+_0x33ded4+'='+JSON[_0x52df('‮4d','1qky')](_0x2d2589):''+(''===_0x16546c?'':'&')+_0x33ded4+'='+_0x2d2589);}else{var _0x4e63b7=_0x51734a[_0x33ded4];_0x5e1658[_0x52df('‫4e','sPwc')](null,_0x4e63b7)&&(_0x16546c+=_0x5e1658[_0x52df('‮4f','dTZo')](_0x4e63b7,Object)||_0x5e1658[_0x52df('‮50','Ogv^')](_0x4e63b7,Array)?''+(''===_0x16546c?'':'&')+_0x33ded4+'='+JSON[_0x52df('‮51','X6Wp')](_0x4e63b7):''+(_0x5e1658[_0x52df('‮52','@WoS')]('',_0x16546c)?'':'&')+_0x33ded4+'='+_0x4e63b7);}}),_0x16546c;};_0xodA='jsjiami.com.v6';

function getUA(){
  $.UA = `jdapp;iPhone;10.1.0;14.3;${randomString(40)};network/wifi;model/iPhone12,1;addressid/4199175193;appBuild/167774;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
}
function randomString(e) {
  e = e || 32;
  let t = "abcdef0123456789", a = t.length, n = "";
  for (i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
