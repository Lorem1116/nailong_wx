// pages/SearchSelect/SearchSelect.js
Page({
  data: {
    res: [],
    yearList:[],
    selectedItem: '', // 当前选中的项目
    select:''
  },
  onLoad: function(){
    const db = wx.cloud.database();
    const that = this
    db.collection('rank').field({
      time: true,
      topic: true
    }).get({
      success: function(res) {
        let yearList = []
        res.data.forEach(element => {
          yearList.push(element.time + " 主题：" + element.topic)
        });
        yearList.reverse();
        res.data.reverse(); 
        that.setData({
          yearList:yearList,
          selectedItem: yearList[0],
          select: res.data[0].time,
          res: res.data
        })
      },
      fail: console.error
    })
  },
  onPickerChange: function(e) {
    const selectedIndex = e.detail.value;
    this.setData({
      selectedItem: this.data.yearList[selectedIndex],
      select:this.data.res[selectedIndex].time
    });
  },
  onConfirm: function() {
    wx.navigateTo({
      url: '/pages/history/history?selectedItem=' + this.data.select
    });
  }
})