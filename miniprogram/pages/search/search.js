function bigNumberAdd(a, b) {
  // 反转字符串，使得最低位在前
  let i = a.length - 1,
    j = b.length - 1;
  let carry = 0,
    result = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum = (i >= 0 ? parseInt(a[i], 10) : 0) + (j >= 0 ? parseInt(b[j], 10) : 0) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    i--;
    j--;
  }
  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // 向上取整
  max = Math.floor(max); // 向下取整
  return Math.floor(Math.random() * (max - min + 1)) + min; // 含最小值，含最大值 
}

const app = getApp();


Page({
  data: {
    inputVal: "", // 搜索框的内容
    history: [] // 历史搜索记录
  },

  onLoad: function () {
    // 页面加载时，从本地缓存获取历史搜索记录
    this.setData({
      history: wx.getStorageSync('searchHistory') || []
    });
  },
  deleteItem:function(e){
    const deleteCount = e.currentTarget.dataset.index
    let history = this.data.history
    history.splice(deleteCount, 1);
    wx.setStorageSync('searchHistory', history)
    this.setData({history:history})
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  updateInput: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  doSearch: function () {
    wx.showLoading({
      title: '请稍等',
      mask: true // 可选，表示是否显示透明蒙层，防止触摸穿透
    });    
    // 执行搜索操作
    const searchId = this.data.inputVal;
    let steamid = bigNumberAdd("76561197960265728", searchId)
    let url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=0A73E70ED398C36AD29C0AB210F71B3D&steamids=" + steamid
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
        console.log(res.result.response.players[0])
        wx.setStorageSync('steamInfo', res.result.response.players[0])
        let avatarInfo = wx.getStorageSync('avatarInfo')
        if(!avatarInfo){
          wx.setStorageSync('avatarInfo', [])
          avatarInfo = wx.getStorageSync('avatarInfo')
        }
        if(!avatarInfo.some(element => element["id"] === res.result.response.players[0].steamid)){
          let avatar = {}
          avatar.avatarUrl = res.result.response.players[0].avatarmedium
          avatar.name = res.result.response.players[0].personaname
          avatar.id = res.result.response.players[0].steamid
          avatarInfo.push(avatar)
          console.log("存储缓存")
        }
        wx.setStorageSync('avatarInfo', avatarInfo)
        // 检查搜索ID是否已在历史记录中
        let historyId = this.data.history.map(item => item.id)
        if (!historyId.includes(searchId)) {
          let new_ = {
            "id": searchId,
            "name": res.result.response.players[0].personaname
          };
          // 将新的搜索ID加入历史记录并缓存
          let newHistory = [...this.data.history, new_];
          this.setData({
            history: newHistory
          });
          wx.setStorageSync('searchHistory', newHistory);
        }

      },
      fail: res => {
        console.error(res)
      }
    });
    const randomNumber = getRandomInt(1, 10000);
    url = "http://gemtd.ppbizon.com/gemtd/202203/heros/get/@" + steamid + "?hehe=" + randomNumber
    wx.cloud.callFunction({
      name: 'requestGEM',
      data: {
        url: url
      },
      success: res => {
        app.globalData.fromPageA = true;
        wx.setStorageSync('gemInfo', res.result.data[steamid])
        wx.switchTab({
          url: '/pages/index/index',
        });
      }
    })
    wx.hideLoading()
  },

  clearHistory: function () {
    // 清空历史搜索记录
    this.setData({
      history: []
    });
    wx.removeStorageSync('searchHistory');
  },

  searchFromHistory: function (e) {
    // 从历史记录中搜索
    const searchId = e.currentTarget.dataset.hero;
    this.setData({
      inputVal: searchId
    });
    this.doSearch();
  }
});