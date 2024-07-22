// pages/shop/shop.js
const GEMTD_HERO_LIST = {
  "h101": "npc_dota_hero_enchantress",
  "h102": "npc_dota_hero_puck",
  "h103": "npc_dota_hero_omniknight",
  "h104": "npc_dota_hero_wisp",
  "h105": "npc_dota_hero_ogre_magi",
  "h106": "npc_dota_hero_lion",
  "h107": "npc_dota_hero_keeper_of_the_light",
  "h108": "npc_dota_hero_rubick",
  "h109": "npc_dota_hero_jakiro",
  "h110": "npc_dota_hero_sand_king",
  "h111": "npc_dota_hero_ancient_apparition",
  "h112": "npc_dota_hero_earth_spirit",
  "h201": "npc_dota_hero_crystal_maiden",
  "h202": "npc_dota_hero_death_prophet",
  "h203": "npc_dota_hero_templar_assassin",
  "h204": "npc_dota_hero_lina",
  "h205": "npc_dota_hero_tidehunter",
  "h206": "npc_dota_hero_naga_siren",
  "h207": "npc_dota_hero_phoenix",
  "h208": "npc_dota_hero_dazzle",
  "h209": "npc_dota_hero_warlock",
  "h210": "npc_dota_hero_necrolyte",
  "h211": "npc_dota_hero_lich",
  "h212": "npc_dota_hero_furion",
  "h213": "npc_dota_hero_venomancer",
  "h214": "npc_dota_hero_kunkka",
  "h215": "npc_dota_hero_axe",
  "h216": "npc_dota_hero_slark",
  "h217": "npc_dota_hero_viper",
  "h218": "npc_dota_hero_tusk",
  "h219": "npc_dota_hero_abaddon",
  "h220": "npc_dota_hero_winter_wyvern",
  "h221": "npc_dota_hero_ember_spirit",
  "h301": "npc_dota_hero_windrunner",
  "h302": "npc_dota_hero_phantom_assassin",
  "h303": "npc_dota_hero_sniper",
  "h304": "npc_dota_hero_sven",
  "h305": "npc_dota_hero_luna",
  "h306": "npc_dota_hero_mirana",
  "h307": "npc_dota_hero_nevermore",
  "h308": "npc_dota_hero_queenofpain",
  "h309": "npc_dota_hero_juggernaut",
  "h310": "npc_dota_hero_pudge",
  "h311": "npc_dota_hero_shredder",
  "h312": "npc_dota_hero_slardar",
  "h313": "npc_dota_hero_antimage",
  "h314": "npc_dota_hero_bristleback",
  "h315": "npc_dota_hero_lycan",
  "h316": "npc_dota_hero_lone_druid",
  "h317": "npc_dota_hero_storm_spirit",
  "h318": "npc_dota_hero_obsidian_destroyer",
  "h319": "npc_dota_hero_grimstroke",
  "h401": "npc_dota_hero_vengefulspirit",
  "h402": "npc_dota_hero_invoker",
  "h403": "npc_dota_hero_alchemist",
  "h404": "npc_dota_hero_spectre",
  "h405": "npc_dota_hero_morphling",
  "h406": "npc_dota_hero_techies",
  "h407": "npc_dota_hero_chaos_knight",
  "h408": "npc_dota_hero_faceless_void",
  "h409": "npc_dota_hero_legion_commander",
  "h410": "npc_dota_hero_monkey_king",
  "h411": "npc_dota_hero_razor",
  "h412": "npc_dota_hero_tinker",
  "h413": "npc_dota_hero_pangolier",
  "h414": "npc_dota_hero_dark_willow",
  "h415": "npc_dota_hero_terrorblade",
  "h416": "npc_dota_hero_enigma",
}

const shop_translation = {
  "b201711":"原谅宝箱",
  "e101":"圣洁精华",
  "e102":"玛瑙光泽",
  "e103":"芳晓之庆",
  "e104":"水晶裂痕",
  "e105":"腐化触须",
  "e106":"毒虫肆虐",
  "e107":"夜魇腐化",
  "e108":"夜魇荒芜",
  "e201":"暗淡幻象",
  "e202":"冥魂大帝",
  "e203":"翡翠外质",
  "e204":"祸乱之源",
  "e205":"毒蕈之径",
  "e206":"2012",
  "e207":"2013",
  "e208":"2014",
  "e301":"骄阳之炎",
  "e302":"嬉戏蝴蝶",
  "e303":"水晶室女",
  "e304":"幸福之赐",
  "e305":"绽放莲花",
  "e306":"迎霜冰雪",
  "e307":"燃烧末日",
  "e308":"鱼泡泡",
  "e401":"燃焰之触",
  "e402":"霜寒之触",
  "e403":"迈达斯之触",
  "e404":"离子之汽",
  "e109":"大地灵气",
  "e110":"蓝色风暴",
  "e309":"紫色激情",
  "e310":"白雪飘零",
  "e311":"一股邪火",
  "e209":"霓虹蝴蝶",
  "e210":"旋转火花",
  "e312":"金币飞舞",
  "e313":"光辉岁月",
  "e314":"紫色星云",
  "e315":"噩梦缠绕",
  "e111":"一起哈啤",
  "e112":"宝石光泽",
  "e211":"雾气环绕",
  "e212":"迷幻缠绕",
  "e405":"光芒万丈",
  "e316":"星星",
  "e113":"污污污污",
  "e499":"金龙鱼",
  "e114":"雾里看花",
  "e317":"心心相印",
  "e318":"2017",
  "e319":"灿若繁星",
  "e320":"大漩涡",
  "e407":"飞沙走石",
  "e406":"星光蓝宝石",
  "e409":"血之环",
  "e408":"暗月来袭",
  "e213":"小家碧玉",
  "e214":"欲火焚身",
  "e321":"通灵术",
  "e410":"雪精灵",
  "e450":"虚无之焰",
  "e451":"虚无之焰红",
  "e452":"虚无之焰橙",
  "e453":"虚无之焰黄",
  "e454":"虚无之焰绿",
  "e455":"虚无之焰青",
  "e456":"虚无之焰蓝",
  "e457":"虚无之焰紫",
  "e458":"虚无之焰白",
  "e459":"虚无之焰粉",
  "npc_dota_hero_enchantress": "魅惑魔女",
  "npc_dota_hero_puck": "帕克",
  "npc_dota_hero_omniknight": "全能骑士",
  "npc_dota_hero_wisp": "艾欧",
  "npc_dota_hero_ogre_magi": "食人魔法师",
  "npc_dota_hero_lion": "莱恩",
  "npc_dota_hero_keeper_of_the_light": "光之守卫",
  "npc_dota_hero_rubick": "拉比克",
  "npc_dota_hero_jakiro": "杰奇洛",
  "npc_dota_hero_sand_king": "沙王",
  "npc_dota_hero_ancient_apparition": "远古冰魂",
  "npc_dota_hero_earth_spirit": "大地之灵",
  "npc_dota_hero_crystal_maiden": "水晶室女",
  "npc_dota_hero_death_prophet": "死亡先知",
  "npc_dota_hero_templar_assassin": "圣堂刺客",
  "npc_dota_hero_lina": "莉娜",
  "npc_dota_hero_tidehunter": "潮汐猎人",
  "npc_dota_hero_naga_siren": "娜迦海妖",
  "npc_dota_hero_phoenix": "凤凰",
  "npc_dota_hero_dazzle": "戴泽",
  "npc_dota_hero_warlock": "术士",
  "npc_dota_hero_necrolyte": "瘟疫法师",
  "npc_dota_hero_lich": "巫妖",
  "npc_dota_hero_furion": "先知",
  "npc_dota_hero_venomancer": "剧毒术士",
  "npc_dota_hero_kunkka": "昆卡",
  "npc_dota_hero_axe": "斧王",
  "npc_dota_hero_slark": "斯拉克",
  "npc_dota_hero_viper": "冥界亚龙",
  "npc_dota_hero_tusk": "巨牙海民",
  "npc_dota_hero_abaddon": "亚巴顿",
  "npc_dota_hero_winter_wyvern": "寒冬飞龙",
  "npc_dota_hero_ember_spirit": "灰烬之灵",
  "npc_dota_hero_windrunner": "风行者",
  "npc_dota_hero_phantom_assassin": "幻影刺客",
  "npc_dota_hero_sniper": "狙击手",
  "npc_dota_hero_sven": "斯温",
  "npc_dota_hero_luna": "露娜",
  "npc_dota_hero_mirana": "米拉娜",
  "npc_dota_hero_nevermore": "影魔",
  "npc_dota_hero_queenofpain": "痛苦女王",
  "npc_dota_hero_juggernaut": "主宰",
  "npc_dota_hero_pudge": "帕吉",
  "npc_dota_hero_shredder": "伐木机",
  "npc_dota_hero_slardar": "斯拉达",
  "npc_dota_hero_antimage": "敌法师",
  "npc_dota_hero_bristleback": "钢背兽",
  "npc_dota_hero_lycan": "狼人",
  "npc_dota_hero_lone_druid": "德鲁伊",
  "npc_dota_hero_storm_spirit": "风暴之灵",
  "npc_dota_hero_obsidian_destroyer": "殁境神蚀者",
  "npc_dota_hero_grimstroke": "天涯墨客",
  "npc_dota_hero_vengefulspirit": "复仇之魂",
  "npc_dota_hero_invoker": "祈求者",
  "npc_dota_hero_alchemist": "炼金术士",
  "npc_dota_hero_spectre": "幽鬼",
  "npc_dota_hero_morphling": "变体精灵",
  "npc_dota_hero_techies": "工程师",
  "npc_dota_hero_chaos_knight": "混沌骑士",
  "npc_dota_hero_faceless_void": "虚空假面",
  "npc_dota_hero_legion_commander": "军团",
  "npc_dota_hero_monkey_king": "齐天大圣",
  "npc_dota_hero_razor": "闪电幽魂",
  "npc_dota_hero_tinker": "修补匠",
  "npc_dota_hero_pangolier": "石鳞剑士",
  "npc_dota_hero_dark_willow": "邪影芳灵",
  "npc_dota_hero_terrorblade": "恐怖利刃",
  "npc_dota_hero_enigma": "谜团",
  "a101": "回春",
  "a102": "闪避",
  "a103": "守护",
  "a104": "石头",
  "a105": "背水一战",
  "a201": "蓝色祈祷",
  "a202": "蛋白祈祷",
  "a203": "白色祈祷",
  "a204": "红色祈祷",
  "a205": "绿色祈祷",
  "a206": "海浪祈祷",
  "a207": "黄色祈祷",
  "a208": "紫色祈祷",
  "a209": "精英祈祷",
  "a210": "普通许愿",
  "a211": "乾坤小挪移",
  "a212": "巨石阵",
  "a301": "快速射击",
  "a302": "暴击",
  "a303": "瞄准",
  "a304": "风暴之锤",
  "a305": "无暇许愿",
  "a306": "回到过去",
  "a307": "致命链接",
  "a308": "乌索尔旋风",
  "a401": "移形换位",
  "a402": "完美许愿",
  "a403": "糖果道标",
  "t301":"南瓜头",
  "t302":"大雪球",
  "t303":"沙滩椅",
  "t304":"地渊孢林",
  "t401":"甜奶酪",
  "t402":"贪魔蛋",
  "t403":"贝壳"
}
function getSecondsToTarget() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 目标时间 10:55:00 上午
  const targetMorning = new Date();
  targetMorning.setHours(10, 55, 0, 0);

  // 目标时间 10:55:00 下午
  const targetEvening = new Date();
  targetEvening.setHours(22, 55, 0, 0);

  // 当前时间距离目标时间的秒数
  let diffMorning = (targetMorning - now) / 1000;
  let diffEvening = (targetEvening - now) / 1000;

  // 如果目标时间已过，则计算下一次目标时间
  if (diffMorning < 0) {
    targetMorning.setDate(targetMorning.getDate() + 1);
    diffMorning = (targetMorning - now) / 1000;
  }

  if (diffEvening < 0) {
    targetEvening.setDate(targetEvening.getDate() + 1);
    diffEvening = (targetEvening - now) / 1000;
  }

  // 返回距离较近的目标时间的秒数
  return Math.floor(Math.min(diffMorning, diffEvening));
}

function formatTime(seconds) {
  let days = Math.floor(seconds / 86400); // 计算天数
  let hours = Math.floor((seconds % 86400) / 3600); // 计算剩余小时数
  let minutes = Math.floor((seconds % 3600) / 60); // 计算分钟数
  let secs = seconds % 60; // 计算秒数

  // 使用padStart来确保小时、分钟和秒钟都是双位数表示
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  secs = secs.toString().padStart(2, '0');

  // 格式化输出
  if (days > 0) {
    return `${days} days ${hours}:${minutes}:${secs}`;
  } else {
    return `${hours}:${minutes}:${secs}`;
  }
}
const typescore = { 'h': 1000, 't': 2000, 'a': 4000, 'e': 3000 };
function CalcIndex(key) {
  let val = key.length * 10000;
  if (key.length === 4) {
    val = val + typescore[key[0]] - 100 * key[1] + 10 * key[2] + key[3];
  }
  return val;
}
// 获取今天的指定时间点
function getTodayTargetTime(hour, minute) {
  const target = new Date();
  target.setHours(hour, minute, 0, 0);
  return target;
}
function areSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}
// 检查是否需要更新缓存
function checkIfUpdateNeeded() {
  const now = new Date();
  const morningTargetTime = getTodayTargetTime(10, 55);
  const eveningTargetTime = getTodayTargetTime(22, 55);

  const lastUpdateTime = wx.getStorageSync('lastUpdateTime');
  if (!lastUpdateTime) {
      // 如果没有记录，表示需要更新
      return true;
  }

  const lastUpdateDate = new Date(lastUpdateTime);
  if(!areSameDay(lastUpdateDate, now)){
    return true
  }
  // 如果当前时间在早上或晚上10:55之后
  if (now > eveningTargetTime) {
    return lastUpdateDate < eveningTargetTime;
  } else if (now > morningTargetTime) {
    return lastUpdateDate < morningTargetTime;
  }

  return false;
}


Page({
  data: {
    shopList: [],
    rows: []
  },
  onLoad: function () {
    setInterval(() => {
      const secondsToTarget = getSecondsToTarget();
      this.setData({
        time:formatTime(secondsToTarget)
      })
    }, 1000);
  },
  onShow: function(){
    let rows = wx.getStorageSync('rows')
    if(rows && !checkIfUpdateNeeded()){
      console.log("加载商城缓存")
      this.setData({ rows });
    }else{
      wx.cloud.callFunction({
        name: 'requestGEM',
        data: {
          url: "http://gemtd.ppbizon.com/gemtd/201803/goods/list/@0"
        },
        success: res => {
          const shopSale = res.result.onsale
          
          console.log(res.result)
          const shopToday = res.result.list
          let items=[]
          let title = "",price = "",image = "",icon=""
          for (let key in shopToday) {
            let onsale=true
            if(shopToday[key].id.startsWith("h")){
              image = shopToday[key].pic.replace("hero_avatar","cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/heros/" + GEMTD_HERO_LIST[shopToday[key].id] + ".png")
              title = shop_translation[GEMTD_HERO_LIST[shopToday[key].id]]
            }else{
              image = shopToday[key].pic.replace("file://{images}/custom_game/","cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/")
              title = shop_translation[shopToday[key].id]
            }
            if(shopToday[key].id == shopSale){ 
              onsale = false
              price = parseInt(shopToday[key].price/2)
            }else{
              price = shopToday[key].price
            }
            if(price > 500){
              icon = "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/lottery/award_ice.png"
            }else{
             icon = "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/lottery/award_shell.png"
            }
            
            items.push({
              "key": key,
              "level":shopToday[key].id[1],
              "title":title,
              "imageSrc":image,
              "onsale":onsale,
              "icon": icon,
              "footer":price,
            })
          }
          this.setData({
            shopList:items
          })
          this.processData();
        }
      })
    }
  },
  processData: function() {
    let shopList = this.data.shopList
    shopList.sort((a, b) => {
      return CalcIndex(a.key) - CalcIndex(b.key);
    });
    const rows = [];
    for (let i = 0; i < shopList.length; i += 4) {
      rows.push(shopList.slice(i, i + 4));
    }
    this.setData({ rows });
    const now = new Date();
    wx.setStorageSync('rows', rows)
    wx.setStorageSync('lastUpdateTime', now);
  }
})