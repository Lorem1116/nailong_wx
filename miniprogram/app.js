// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // 这里填写你的云环境ID
        env: 'rebecca-2gbizwon5538bd4f',
        traceUser: true,
      });
    }
  },
  globalData: {
    fromPageA: false,
    steamInfo: null,
  },
  eventHandler: {
    events: {},
    emit(eventName, data) {
      (this.events[eventName] || []).forEach(callback => {
        callback(data);
      });
    },
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    },
    off(eventName, callback) {
      const callbacks = this.events[eventName];
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    }
  }
})
