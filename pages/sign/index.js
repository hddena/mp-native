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
    motto: '签到',
    goldNum:5123,
    stepsActive:0,
    steps: [
      {
        text: '第1天',
        desc: '5',
        num:5
      },
      {
        text: '第2天',
        desc: '10',
        num:10
      },
      {
        text: '第3天',
        desc: '15',
        num:15
      },
      {
        text: '第4天',
        desc: '20',
        num:20
      },
      {
        text: '第5天',
        desc: '25',
        num:25
      },
      {
        text: '第6天',
        desc: '30',
        num:30
      },
      {
        text: '第7天',
        desc: '35',
        num:35
      }
    ],

    productList:[],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    let t = this;
    // console.log(options.goldNum);
    if (options.goldNum == undefined) {
      wx.showToast({
        title: '乐趣币为默认值~',
        icon:'success'
      })
      t.setData({
        goldNum:3810,
      })
    } else {
      t.setData({
        goldNum:parseInt(options.goldNum),
      })
    }


    this.getData();
  },
  onShow: function () {

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
  activeProgress(){
    let t = this , active = t.data.stepsActive;

    if (active >= 7) {
      t.setData({
        stepsActive:0,
      })
      wx.showToast({
        title: '签满七天啦！',
        icon:'success'
      })
    } else {
      t.setData({
        stepsActive:active+1,
        goldNum:t.data.goldNum + t.data.steps[t.data.stepsActive].num
      })
      wx.showToast({
        title: '签到第'+(t.data.stepsActive)+'天成功！',
        icon:'success'
      })
    }
    console.log(t.data.goldNum);
    //console.log(t.data.stepsActive);

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
    wx.showToast({
      title: '暂无后续逻辑~',
      icon:'success'
    })
  }
})
