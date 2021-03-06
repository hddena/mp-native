//index.js
//获取应用实例
const app = getApp()

// import Toast from '../../components/vant-weapp/toast/toast';
const toast = app.toast;
const requestApi = app.requestApi.default;
// console.log(requestApi.api);

// 模拟数据
var mockApi = require('../../libs/mock/mockApi.js');
// var mockApiData = require('../../libs/mock/mockApiData.js');

Page({
  data: {
    //CountDown 倒计时
    time: 96 * 60 * 60 * 1000,
    timeData: {},
    active: 0, // Tab 标签页
    //Request: requestApi.api.prototype, //请求头
    motto: '乐趣商城',
    searchValue: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    productList:[],
    productTopList:[],
    hotSearchTags:['阿胶','桃花姬','固原胶','阿胶片','补血','固原糕'],
    advertisement:['left','right'],
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
        icon:'location-o'
      },
      {
        title: '日用品',
        icon: 'like-o'
      },
      {
        title: '限时抢卷',
        icon: 'star-o'
      },
      {
        title: '每日签到',
        icon: 'phone-o'
      },
      {
        title: '扫一扫',
        icon: 'https://www.dongeejiao.com/upload/image/20180327/20180327182730_39304.png'
      },
      {
        title: '0元购',
        icon:'setting-o'
      },
      {
        title: '超值拼团',
        icon: 'fire-o'
      },
      {
        title: '每日领币',
        icon: 'coupon-o'
      },
      {
        title: '权益专场',
        icon: 'comment-o'
      },
      {
        title: '领红包',
        icon: 'https://img11.360buyimg.com/n1/jfs/t1/82736/30/12363/411527/5d9c21b2Ea1ac09b6/d77d8dfa01ca0acd.jpg'
      }
    ],
    seckill:[
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
  onLoad: function (options) {
    // console.log(options);
    let t = this;
    this.getData();

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

//下拉刷新
onPullDownRefresh:function(){
  console.log('下拉刷新');
  wx.showNavigationBarLoading() //在标题栏中显示加载
  //模拟加载
  setTimeout(function(){
    // complete
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
    console.log('完成停止加载，停止下拉刷新！');
  },1000);
},

  onChangeSearch(e) {
    this.setData({
      searchValue: e.detail
    });
  },

  onSearch() {
    Toast('搜索' + this.data.searchValue);
  },

  onClickSearch() {
    if (this.data.searchValue == '') {
      wx.showToast({
        title: '请输入搜索内容',
        icon:'none'
      })
    } else {
      wx.showToast({
        title: '搜索：' + this.data.searchValue,
        icon:'none'
      })
    }
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
      title: `切换到标签 ${event.detail.title}`,
      icon: 'none'
    });
  },
  getData(){
    let t = this;
    mockApi.productTopAjax('', function (res) {  //这里既可以获取模拟的res
        t.setData({
            productTopList:res.list
        })
        console.log(t.data.productTopList);
    });
    mockApi.productAjax('', function (res) {  //这里既可以获取模拟的res
        t.setData({
            productList:res.list
        })
        // console.log(t.data.productList);
    });
  },
})
