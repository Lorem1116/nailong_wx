function getRandomInt(min, max) {
  min = Math.ceil(min); // 向上取整
  max = Math.floor(max); // 向下取整
  return Math.floor(Math.random() * (max - min + 1)) + min; // 含最小值，含最大值 
}

function formatTime(seconds) {
  seconds = Math.floor(seconds)
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

const taskList = {
  "q101": "不合成白银完成全部关卡。",
  "q102": "不合成孔雀石完成全部关卡。",
  "q103": "不合成星彩红宝石完成全部关卡。",
  "q104": "击杀小飞象Zard-并完成全部关卡。",
  "q105": "65分钟内完成全部关卡。",
  "q106": "没有一回合合成任何塔完成全部关卡。",
  "q107": "宝石城堡满血完成全部关卡。",
  "q108": "合出任意隐藏塔并完成全部关卡。",
  "q109": "任意关卡的怪物数量达到20并完成全部关卡。",
  "q110": "合成任意闪亮的石板并完成全部关卡。",
  "q111": "队伍中有完成全部关卡",
  "q201": "不合成玉完成全部关卡。",
  "q202": "不保留钻石完成全部关卡。",
  "q203": "不保留蓝宝石完成全部关卡。",
  "q204": "不保留红宝石完成全部关卡。",
  "q205": "不保留黄玉完成全部关卡。",
  "q206": "不保留紫晶完成全部关卡。",
  "q207": "不保留海晶石完成全部关卡。",
  "q208": "不保留翡翠完成全部关卡。",
  "q209": "55分钟内完成全部关卡。",
  "q210": "合成任意超级塔并完成全部关卡。",
  "q211": "不使用任何英雄技能完成全部关卡。",
  "q301": "不合成深海珍珠完成全部关卡。",
  "q302": "45分钟内完成全部关卡。",
  "q303": "击杀黄金肉山宝宝并完成全部关卡。",
  "q304": "升级五个MVP-MAX的塔并完成全部关卡。",
  "xuechi":"血池",
  "jili":"激励",
  "baonu":"暴怒",
  "aojiao":"傲娇",
  "jihan":"极寒",
  "xietong":"协同",
  "yinhun":"阴魂",
  "anye":"暗夜",
  "guwu":"鼓舞",
  "q399":"在『丛林挑战』中完成全部关卡。",
	"q398":"在『暗夜挑战』中完成全部关卡。",

}

function checkAndUpdateCache() {
  const lastUpdateTime = wx.getStorageSync('lastUpdate');
  const currentTime = new Date().getTime();
  const fiveMinutes = 600000; // 十分钟的毫秒数

  if (lastUpdateTime) {
    // 计算时间差，判断是否超过五分钟
    if (currentTime - lastUpdateTime > fiveMinutes) {
      console.log('超过十分钟，需要更新缓存');
      return true
    } else {
      console.log('未超过十分钟，使用现有缓存');
      return false
    }
  } else {
    console.log('无缓存数据，首次更新');
    return true
  }
}

Page({
  data: {
    person: {},
    ondutyHero: {},
    heroList: []
  },
  setPerson: function (steamid) {
    const randomNumber = getRandomInt(1, 10000);
    let url = "http://gemtd.ppbizon.com/gemtd/202203/heros/get/@" + steamid + "?hehe=" + randomNumber
    wx.cloud.callFunction({
      name: 'requestGEM',
      data: {
        url: url
      },
      success: res => {
        let person = {}
        const gemInfo = res.result.data[steamid]
        const word = res.result.word_object
        console.log(gemInfo)
        person.id = gemInfo.rank_info.user
        person.totalRank = gemInfo.rank_info.score + 1
        person.gameRank = gemInfo.rank_info.rankall
        person.gameIcon = this.gamelevel(person.gameRank)
        person.coopRank = 26 - gemInfo.rank_info.coop_level
        person.coopIcon = "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/coop_rank_" + gemInfo.rank_info.coop_level + ".png"
        person.info1 = gemInfo.rank_info.best_kills.p1
        person.info2 = gemInfo.rank_info.best_kills.p2
        person.info3 = gemInfo.rank_info.best_kills.p3
        person.info4 = gemInfo.rank_info.best_kills.p4
        person.shell = gemInfo.shell
        person.ice = gemInfo.ice
        person.candy = gemInfo.candy
        if(gemInfo.extend_tool){
          person.extend_tool = gemInfo.extend_tool
        }else{
          person.extend_tool = 0
        }
        person.topic = taskList[word.name]
        person.topicurl = "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/words/" + word.name + ".png"
        person.nexttopic = taskList[word.word_next]
        person.nexttopicurl = "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/words/" + word.word_next + ".png"
        person.time = formatTime(word.expire)
        if(gemInfo.quest.quest_expire == -2){
          person.task = taskList[gemInfo.quest.quest]
          person.tasktime = "ready"
        }else{
          person.task =  "已做完等待刷新"
          person.tasktime = formatTime(gemInfo.quest.quest_expire)
        }
        if(gemInfo.quest.pass == -2){
          person.passTasktime = "ready"
        }else{
          person.passTasktime = formatTime(gemInfo.quest.pass)
        }
        person.quest_finish_count = gemInfo.quest.quest_finish_count

        this.setData({
          person: person
        })
        wx.setStorageSync('person', person)
        wx.setStorageSync('lastUpdate', new Date().getTime());
      }
    })



  },
  onShow() {
    let person = wx.getStorageSync('person')
    var user = wx.getStorageSync('user');
    if (user) {
      if (person && person.id == user.steamid && !checkAndUpdateCache()) {
        console.log("使用用户缓存")
        this.setData({
          userInfo: user,
          person: person
        })
      } else {
        if (user.steamid) {
          this.setPerson(user.steamid)
        }
        this.setData({
          userInfo: user
        })
      }

    }
  },
  onLoad() {},
  goPlayInfo: function() {
    const searchId = this.data.userInfo.steamid;
    wx.showLoading({
      title: '请稍等',
      mask: true // 可选，表示是否显示透明蒙层，防止触摸穿透
    });
    // 执行搜索操作
    let url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0A73E70ED398C36AD29C0AB210F71B3D&steamids=" + searchId
    // 调用云函数进行搜索
    wx.cloud.callFunction({
      name: 'requestGEM',
      data: {
        url: url
      },
      success: res => {
        const app = getApp();
        app.globalData.steamInfo = res.result.response.players[0];
        app.eventHandler.emit('steamInfoUpdate', res.result.response.players[0]);
        wx.setStorageSync('steamInfo', res.result.response.players[0])
        let avatarInfo = wx.getStorageSync('avatarInfo')
        if (!avatarInfo) {
          wx.setStorageSync('avatarInfo', [])
          avatarInfo = wx.getStorageSync('avatarInfo')
        }
        if (!avatarInfo.some(element => element["id"] === res.result.response.players[0].steamid)) {
          let avatar = {}
          avatar.avatarUrl = res.result.response.players[0].avatarmedium
          avatar.name = res.result.response.players[0].personaname
          avatar.id = res.result.response.players[0].steamid
          avatarInfo.push(avatar)
          console.log("存储缓存")
        }
        wx.setStorageSync('avatarInfo', avatarInfo)
      },
      fail: res => {
        console.error(res)
      }
    });
    const randomNumber = getRandomInt(1, 10000);
    url = "http://gemtd.ppbizon.com/gemtd/202203/heros/get/@" + searchId + "?hehe=" + randomNumber
    wx.cloud.callFunction({
      name: 'requestGEM',
      data: {
        url: url
      },
      success: res => {
        wx.setStorageSync('gemInfo', res.result.data[searchId])
        wx.navigateTo({
          url: '/pages/playerInfo/playerInfo'
        });
      }
    })
    wx.hideLoading()
  },
  goChange() {
    wx.navigateTo({
      url: '/pages/change/change',
    })
  },
  //退出登录
  tuichu() {
    wx.setStorageSync('person', null)
    wx.setStorageSync('user', null)
    this.setData({
      userInfo: null,
      person: null
    })
  },
  closeTank(e) {
    if (!this.data.userInfo_tank) {
      wx.cloud.database().collection('user')
        .get()
        .then(res => {
          console.log("用户信息====", res);
          if (res.data.length) {
            if (res.data[0].steamid) {
              this.setPerson(res.data[0].steamid)
            }
            this.setData({
              userInfo: res.data[0],
              userInfo_tank: false
            })
            wx.setStorageSync('user', res.data[0]);
          } else {
            console.log("还未注册====", res)
            this.setData({
              userInfo_tank: true
            })
          }
        }).catch(res => {
          console.log('编程小石头提醒你请添加user表')
        })
    } else {
      this.setData({
        userInfo_tank: false
      })
    }

  },
  gamelevel: function (rank) {
    if (0 < rank <= 100 && typeof rank === 'number') {
      return "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/all_rank_6.png"
    } else if (rank.slice(0, -1) == +"2") {
      return "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/all_rank_5.png"
    } else if (rank.slice(0, -1) <= +"10") {
      return "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/all_rank_4.png"
    } else if (rank.slice(0, -1) <= +"20") {
      return "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/all_rank_3.png"
    } else if (rank.slice(0, -1) <= +"50") {
      return "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/all_rank_2.png"
    } else {
      return "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/rank/all_rank_1.png"
    }
  },
  /**
   * 获取头像
   */
  onChooseAvatar(e) {
    console.log(e);
    this.setData({
      avatarUrl: e.detail.avatarUrl
    })
  },
  getNickName(e) {
    console.log(e);
    this.setData({
      nickName: e.detail.value
    })
  },
  submit(e) {
    if (!this.data.avatarUrl) {
      return wx.showToast({
        title: '请选择头像',
        icon: 'error'
      })
    }
    if (!this.data.nickName) {
      return wx.showToast({
        title: '请输入昵称',
        icon: 'error'
      })
    }
    this.setData({
      userInfo_tank: false
    })
    wx.showLoading({
      title: '正在注册',
      mask: 'true'
    })
    let tempPath = this.data.avatarUrl

    let suffix = /\.[^\.]+$/.exec(tempPath)[0];
    console.log(suffix);

    //上传到云存储
    wx.cloud.uploadFile({
      cloudPath: 'userimg/' + new Date().getTime() + suffix, //在云端的文件名称
      filePath: tempPath, // 临时文件路径
      success: res => {
        console.log('上传成功', res)
        let fileID = res.fileID
        wx.hideLoading()
        wx.cloud.database().collection('user')
          .add({
            data: {
              avatarUrl: fileID,
              nickName: this.data.nickName
            }
          }).then(res => {
            let user = {
              avatarUrl: fileID,
              nickName: this.data.nickName
            }
            // 注册成功
            console.log('注册成功')
            wx.setStorageSync('user', user);

            this.setData({
              userInfo: user,
            })
          }).catch(res => {
            console.log('注册失败', res)
            wx.showToast({
              icon: 'error',
              title: '注册失败',
            })
          })

      },
      fail: err => {
        wx.hideLoading()
        console.log('上传失败', res)
        wx.showToast({
          icon: 'error',
          title: '上传头像错误',
        })
      }
    })
  },
})