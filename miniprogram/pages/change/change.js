// pages/change/change.js
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
const db = wx.cloud.database();
Page({
  data: {
    inputVal: "", // 搜索框的内容
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
  doBinding: function (e) {
    const val = this.data.inputVal
    let user = wx.getStorageSync('user')
    let steamid = bigNumberAdd("76561197960265728", val)
    const that = this
    wx.showModal({
      title: 'warning',
      content: '你确定要绑定此ID吗？',
      confirmColor:"#606c38",
      cancelColor: "#000",
      success: function (res) {
        db.collection('user').where({
          avatarUrl: user.avatarUrl 
        }).get({
          success: function(res) {
            that.updateDocument(res.data[0]._id,val);
            user.steam = val;
            user.steamid = steamid
            wx.setStorageSync('user', user)
            wx.switchTab({
              url: '/pages/login/login',
            });
          },
          fail: err => {
            console.error('查询失败：', err);
          }
        })
      }
    })

  },
  updateDocument: function(docId,val) {
    let steamid = bigNumberAdd("76561197960265728", val)
    db.collection('user').doc(docId).update({
      data: {
        steam: val,
        steamid: steamid
      },
      success: function(res) {
        console.log('steamID更新成功', res);
      },
      fail: function(err) {
        console.error('文档更新失败', err);
      }
    });
  }

})