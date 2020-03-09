const app = getApp()

Page({
  data:{
    ind:0,
    arr:"",
    list: [{ img: '/images/chuyu.jpg' },
          { img: '/images/qita.jpg' },
          {img: '/images/youhai.jpg' },
          { img: '/images/kehui.jpg' }
    ]
    
  },
  navTo() {
    console.log(111)
    wx.switchTab({
      url: '../four/four',
    })
  },
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  tapitem(ev){
    // console.log(ev)
    this.setData({
      ind: ev.currentTarget.dataset.index
    })
  },
  onLoad(){
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/category',
      data: { },
      header: {
        'content-type': 'application/json' 
      },
      success:(res)=>{
        for(var i=0;i<res.data.data.length;i++){
          res.data.data[i].common = res.data.data[i].common.split("、")
        }
        this.setData({
          arr: res.data.data
        })
      }
    })
  }
})
