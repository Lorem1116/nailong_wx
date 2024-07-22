// index.js

const towers1 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/stone.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_gudaidejixueshi.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_tianranzumulv.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_shenhaizhenzhu.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/q.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/d.png']
const towers2 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_baiyin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_baiyinqishi.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_fenhongzuanshi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_juxingfenhongzuanshi.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_keyinuoerguangmingzhishan.png']
const towers3 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_kongqueshi.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xianyandekongqueshi.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_you238.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_you235.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_shuaibiankaipayou.png']
const towers4 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xingcaihongbaoshi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xuehonghuoshan.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_jixueshi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_heiwangzihuangguanhongbaoshi.png']
const towers5 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_yu.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_haiyangqingyu.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_huaguoshanxiandan.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_jingangshikulinan.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_furongshi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_jixiangdezhongguoyu.png']
 const towers6 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_mirendeqingjinshi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_huguoshenyishi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_jin.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_aijijin.png']
  const towers7 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_heianfeicui.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_feicuimoxiang.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_palayibabixi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_jingxindiaozhuodepalayibabixi.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_sililankazhixing.png']
  const towers8 = [ 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_heisemaoyanshi.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_hongshanhu.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_yijiazhishi.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_huangcailanbaoshi.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_haibao.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xingguanglanbaoshi.png']
  const towers9 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/105.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/106.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_heiyaoshi.png',       'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_manao.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_ranshaozhishi.png',    'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xiameishi.png']
const towers10 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/b.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/e.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/g.png',    'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/p.png',  'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/r.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/y.png']
const towers11 = ['cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_kongheshiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_kongheshiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_kongheshiban_yin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xuwushiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xuwushiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_xuwushiban_yin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_haojiaoshiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_haojiaoshiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_haojiaoshiban_yin.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_youbushiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_youbushiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_youbushiban_yin.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_hongliushiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_hongliushiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_hongliushiban_yin.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_zhangqishiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_zhangqishiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_zhangqishiban_yin.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_mabishiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_mabishiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_mabishiban_yin.png','cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_suanwushiban.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_suanwushiban_jin.png', 'cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/gemtd_suanwushiban_yin.png',]

let stone = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 41, 42, 43, 44, 47, 50, 51, 53, 54, 55, 56, 58, 59, 62, 65, 68, 71, 74, 76, 81, 83, 86, 90, 91, 95, 98, 99, 100, 101, 104, 105, 106, 107],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 42, 43, 44, 45, 48, 49, 51, 52, 54, 55, 56, 57, 59, 60, 61, 63, 66, 69, 72, 73, 75, 77, 82, 84, 85, 87, 91, 92, 96, 97, 99, 100, 101, 102, 105, 106, 107, 108]
]

Page({
  data: {
    gridCells: Array.from({
      length: 108
    }, (_, index) => ({
      id: index + 1,
      row: Math.floor(index / 12) + 1,
      col: (index % 12) + 1,
      imageUrl: '', // Initialize with no image
      isStone: false,
      max:false
    })),
    showPopup: false,
    imageUrls1: [], // Store URLs of images
    imageUrls2: [], // Store URLs of images
    imageUrls3: [], // Store URLs of images
    imageUrls4: [], // Store URLs of images
    imageUrls5: [], // Store URLs of images
    imageUrls6: [], // Store URLs of images
    imageUrls7: [], // Store URLs of images
    imageUrls8: [], // Store URLs of images
    imageUrls9: [], // Store URLs of images
    imageUrls10: [], // Store URLs of images
    imageUrls11: [], // Store URLs of images
    selectedCell: null, // To keep track of the last clicked cell
    isUrsol: false,
    isExchange:false,
    change:[],
    gold:0,
    grid_clsss:"",
    cell_clsss:"",
    curClip:0,
    clip:[]
  },
  // 在你的小程序页面的 methods 中定义这个函数
  rotateNeighborStones: function (targetId) {
    let gridCells = this.data.gridCells;
    const ursol = [-13,-12,-11,1,13,12,11,-1]
    let sol = []
    ursol.forEach(element => {
      if((Number(targetId) + element) > 0 && (Number(targetId) + element) <= 108){
        let sto = Number(targetId) + element - 1
        if(gridCells[sto].isStone){
          sol.push(sto)
        }
      }
    });
    let temp = gridCells[sol[0]].imageUrl
    let temp_max = gridCells[sol[0]].max
    for(let i=0;i<sol.length;i++){
      if(i < sol.length-1){
        gridCells[sol[i]].max = gridCells[sol[i+1]].max
        gridCells[sol[i]].imageUrl = gridCells[sol[i+1]].imageUrl
      }else{
        gridCells[sol[i]].imageUrl = temp
        gridCells[sol[i]].max = temp_max
      }
    }
    this.setData({
      gridCells:gridCells,
      gold:this.data.gold + 50,
    })
  },
  ExchangeStones:function(cellId) {
    let change = this.data.change
    let gridCells = this.data.gridCells;
    let gold = 0
    if(gridCells[Number(cellId)-1].imageUrl != "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/stone.png"){
      gold = gold + 200
    }
    if(change.length == 0 && gridCells[Number(cellId)-1].isStone){
      change.push(Number(cellId) - 1)
      this.setData({change:change,gold:this.data.gold + gold})
    }else if(change.length == 1 && gridCells[Number(cellId)-1].isStone){
      let cel = change[0]
      let temp = gridCells[cel].imageUrl
      let temp_max = gridCells[cel].max
      gridCells[cel].imageUrl = gridCells[Number(cellId) - 1].imageUrl
      gridCells[cel].max = gridCells[Number(cellId) - 1].max
      gridCells[Number(cellId) - 1].imageUrl = temp
      gridCells[Number(cellId) - 1].max = temp_max


      this.setData({
        change:[],
        gridCells:gridCells,
        gold:this.data.gold + gold,
      })
    }
  },
  onShow: function (paams) {
    const screenWidth = wx.getSystemInfoSync().windowWidth;
    this.setData({
      grid_class:"width:" + screenWidth + "px;height:" + Number(screenWidth/12*9) + "px;",
      cell_class:"width:" + Number(screenWidth/12) + "px;height:" + Number(screenWidth/12) + "px;",
      imageUrls1: towers1,
      imageUrls2: towers2,
      imageUrls3: towers3,
      imageUrls4: towers4,
      imageUrls5: towers5,
      imageUrls6: towers6,
      imageUrls7: towers7,
      imageUrls8: towers8,
      imageUrls9: towers9,
      imageUrls10: towers10,
      imageUrls11: towers11,
    })
    
  },
  onCellTap: function (e) {
    const cellId = e.currentTarget.dataset.id;
  
    // 深拷贝当前的 gridCells
    let gridCellsCopy = JSON.parse(JSON.stringify(this.data.gridCells));
    let clip = this.data.clip.slice(); // 创建clip的副本
  
    if (this.data.isUrsol) {
      this.rotateNeighborStones(cellId);
      // 保存操作前的状态
      clip.push(gridCellsCopy);
    } else if (this.data.isExchange) {
      // 保存操作前的状态
      clip.push(gridCellsCopy);
      this.ExchangeStones(cellId);
    } else {
      this.setData({
        showPopup: true,
        selectedCell: cellId
      });
      return; // 不进行下面的 setData 操作
    }
  
    // 更新 clip 和 curClip
    this.setData({
      clip: clip,
      curClip: this.data.curClip + 1
    });
  },

  closePopup: function () {
    this.setData({
      showPopup: false
    });
  },
  selectImage: function (e) {
    const url = e.currentTarget.dataset.url;
    let isStone = true
    if (url.includes("shiban")) {
      isStone = false
    }
    const selectedCellId = this.data.selectedCell;
    const newGridCells = this.data.gridCells.map(cell => {
      if (cell.id == selectedCellId) {
        return {
          ...cell,
          imageUrl: url,
          isStone: isStone
        };
      }
      return cell;
    });
    let clip = this.data.clip
    clip.push(newGridCells)
    this.setData({
      clip:clip,
      curClip:this.data.curClip + 1,
      gridCells: newGridCells,
      showPopup: false,
       // Close the popup after selection
    });
  },
  setMax:function (e) {
    const selectedCellId = this.data.selectedCell;
    const newGridCells = this.data.gridCells.map(cell => {
      if (cell.id == selectedCellId) {
        return {
          ...cell,
          max:!this.data.gridCells[Number(selectedCellId)-1].max
        };
      }
      return cell;
    });
    let clip = this.data.clip
    clip.push(newGridCells)
    this.setData({
      gridCells: newGridCells,
      showPopup: false,
      clip:clip,
      curClip:this.data.curClip + 1
       // Close the popup after selection
    });
  },
  emptyImage: function (e) {
    const selectedCellId = this.data.selectedCell;
    const newGridCells = this.data.gridCells.map(cell => {
      if (cell.id == selectedCellId) {
        return {
          ...cell,
          imageUrl: "",
          isStone:false,
          max:false
        };
      }
      return cell;
    });
    let clip = this.data.clip
    clip.push(newGridCells)
    this.setData({
      gridCells: newGridCells,
      showPopup: false, // Close the popup after selection,
      clip:clip,
      curClip:this.data.curClip + 1
    });
  },
  refresh: function () {
    let grid = this.data.gridCells
    grid.forEach(element => {
      element.imageUrl = ""
      element.isStone = false,
      element.max = false
    });
    this.setData({
      gridCells: grid,
      gold:0
    })
  },
  emptystone: function (e) {
    this.refresh();
  },
  usestone: function (e) {
    const data = e.currentTarget.dataset.id;
    this.refresh();
    let grid = this.data.gridCells
    stone[Number(data)].forEach(element => {
      grid[element - 1].imageUrl = "cloud://rebecca-2gbizwon5538bd4f.7265-rebecca-2gbizwon5538bd4f-1306855380/towers/stone.png"
      grid[element - 1].isStone = true
    });
    let clip = this.data.clip
    clip.push(grid)
    this.setData({
      gridCells: grid,
      gold:0,
      clip:clip,
      curClip:this.data.curClip + 1
    })
  },
  ursol: function (params) {
    this.setData({
      isUrsol: true,
      isExchange:false
    })
  },
  exchange: function (params) {
    this.setData({
      isExchange: true,
      isUrsol: false,
    })
  },
  stop: function (params) {
    this.setData({
      isUrsol: false,
      isExchange:false
    })
  },
  huancun:function (e) {
    const id = e.currentTarget.dataset.id;
    wx.setStorageSync('cells' + id, this.data.gridCells)
    wx.setStorageSync('gold'  + id, this.data.gold)
  },
  zairu:function (e) {
    const id = e.currentTarget.dataset.id;

    if(wx.getStorageSync('cells'+ id)){
      let clip = this.data.clip
      clip.push(wx.getStorageSync('cells'+ id))
      this.setData({
        gridCells: wx.getStorageSync('cells'+ id),
        gold:wx.getStorageSync('gold'+ id),
        clip:clip,
        curClip:this.data.curClip + 1
      })
    }
  },

  emptygold:function (params) {
    this.setData({gold:0})
  },
  lastclip: function() { 
    let curClip = this.data.curClip
    let clip = this.data.clip
    if(clip.length > 0 && curClip > 1){
      this.setData({
        gridCells: clip[curClip - 2],
        curClip: curClip - 1
      })
    }
  },
  nextclip: function() {
    let curClip = this.data.curClip
    let clip = this.data.clip
    if(curClip < clip.length){
      this.setData({
        gridCells: clip[curClip],
        curClip: curClip + 1
      })
    }
  },
});