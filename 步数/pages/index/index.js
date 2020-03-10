//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    appId:'wxc4015bc8b3fef256',
    sessionKey:'d99b01304db144dd66d0db0f4f5583b4',
    encryptedData:'',
    iv:'',
    data:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var _this=this
    wx.login({
      success(res){
        wx.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx2352fd4e7827db94&secret=d99b01304db144dd66d0db0f4f5583b4&js_code=${res.code}&grant_type=authorization_code`,
          success(hhh){
            // console.log(hhh)
            wx.getWeRunData({
              success(www) {
                // console.log(www)
                _this.setData({
                  encryptedData: www.encryptedData,
                  iv:www.iv,
                })
                wx.request({
                  url: 'http://localhost:3000/users',
                  data:{
                    appId: 'wxc4015bc8b3fef256',
                    sessionKey: hhh.data.session_key,
                    encryptedData: www.encryptedData,
                    iv: www.iv,
                  },
                  success(kkk){
                    console.log()
                    _this.setData({
                      data: kkk.data.stepInfoList[kkk.data.stepInfoList.length-1]
                    })
                    console.log(_this.data.data)
                  }
                })
              }
            })
          }
        })
        
        
      }
      
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
