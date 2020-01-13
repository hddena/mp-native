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
    motto: '用户中心',
    goldNum:6723,
    productList:[],
    chooseAddress:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getData();
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4
      })
    }

    // this.indexClassList();
  },


  onChooseAddress(){
    let t = this;
    wx.chooseAddress({
      success (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)

        t.setData({
            chooseAddress:res.provinceName+res.cityName+res.countyName+res.detailInfo
        })

      wx.showToast({
        title: t.chooseAddress,
        icon:'none'
      })

      }
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
  //页面跳转
  goToIsLogin: function() {
    console.log('goToIsLogin')
    // wx.switchTab({
    wx.navigateTo({
      url: '../isLogin/index'
    })
  },
  goToSign: function() {
    let t = this;
    console.log(t.data.goldNum);
    // wx.switchTab({
    wx.navigateTo({
      url: '../sign/index?goldNum=' + t.data.goldNum
    })
  },
  getData(){
    let t = this;
    mockApi.productAjax('', function (res) {  //这里既可以获取模拟的res
        t.setData({
            productList:res.list
        })
        // console.log(t.data.productList);
    });
  },
  onSorry() {
    console.log('暂无后续逻辑~');
      wx.showToast({
        title: '暂无后续逻辑~',
        icon:'success'
      })

  }
})
