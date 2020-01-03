//index.js
//获取应用实例
const app = getApp()

// import Toast from '../../components/vant-weapp/toast/toast';
const toast = app.toast;
const requestApi = app.requestApi.default;
// console.log(requestApi.api);

// console.log(toast);

Page({
  data: {
    //CountDown 倒计时
    time: 96 * 60 * 60 * 1000,
    timeData: {},
    active: 0, // Tab 标签页
    //Request: requestApi.api.prototype, //请求头
    motto: '乐趣商城',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iconA: [
      {
        title: '正品保证',
        icon: 'fire-o'
      },
      {
        title: '厂家直供',
        icon: 'star-o'
      },
      {
        title: '专属客服',
        icon: 'comment-o'
      },
      {
        title: '大牌优惠',
        icon: 'like-o'
      },
    ],
    iconB:[
      {
        title: '营养保健',
        icon:'gift-o'
      },
      {
        title: '洗护用品',
        icon: 'fire-o'
      },
      {
        title: '美妆护肤',
        icon: 'star-o'
      },
      {
        title: '0元购',
        icon: 'comment-o'
      },
      {
        title: '每日签到',
        icon: 'https://img11.360buyimg.com/n1/jfs/t1/82736/30/12363/411527/5d9c21b2Ea1ac09b6/d77d8dfa01ca0acd.jpg'
      },
    ],
    miaosha:[
      {
        title: 'AAA',
        priceA: '100',
        priceB: '200',
        imgurl:'https://img11.360buyimg.com/n1/jfs/t1/82736/30/12363/411527/5d9c21b2Ea1ac09b6/d77d8dfa01ca0acd.jpg'
      },
      {
        title: 'BBB',
        priceA: '100',
        priceB: '200',
        imgurl: 'https://img10.360buyimg.com/n1/jfs/t4435/235/3547441852/143410/41b99b0a/58ff0fe8N705a8cb2.jpg'
      },
      {
        title: 'CccCC',
        priceA: '100',
        priceB: '200',
        imgurl: 'https://img10.360buyimg.com/n1/jfs/t4111/9/19221110/103638/aa61d051/5837e828Nf5beecc5.jpg'
      },
      {
        title:'DDD',
        priceA: '100',
        priceB: '200',
        imgurl:'https://img.alicdn.com/imgextra/i3/876270265/O1CN01Yz1THT1DpPWc0SPk9_!!0-item_pic.jpg_430x430q90.jpg'
      }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }

    // this.indexClassList();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  indexClassList() {
    var that = this;
    that.Request.indexClassList()
      .then(res => {
        //成功
        console.log('indexClassList', res.data)
      })
      .catch(res => {
        //失败
        console.log('indexClassList', res)
      })
  },
  toastFn(){
    console.log(toast);
    // toast('成功文案');
    // toast.success('成功文案');
  },
  bushu(){
    // 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口。步数信息会在用户主动进入小程序时更新。
    wx.getWeRunData({
      success(res) {
        console.log("获取用户步数：",res);
        // 拿 encryptedData 到开发者后台解密开放数据
        const encryptedData = res.encryptedData
        // 或拿 cloudID 通过云调用直接获取开放数据
        const cloudID = res.cloudID
      }
    })
  },
  onChangeCountDown(e) { //CountDown 倒计时
    // console.log(e.detail);
    this.setData({
      timeData: e.detail
    });
  },
  onChangeTab(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  }

})
