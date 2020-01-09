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
    motto: '乐社区',
    active: 0,
    communityList:[],
    productList:[],
  },
  //事件处理函数

  onLoad: function () {

  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }

    this.getData();
  },

  onChange(event) {
    // console.log(event.detail.title);
    wx.showToast({
      title: `切换到 ${event.detail.title}`,
      icon: 'none'
    });
  },

  toastFn(){
    console.log(toast);
    // toast('成功文案');
    // toast.success('成功文案');
  },
  getData(){
    let t = this;

    mockApi.communityAjax('', function (res) {  //这里既可以获取模拟的res
      // console.log(res);
        t.setData({
            communityList:res.list
        })
        // console.log(t.data.productList);
    });

    mockApi.productAjax('', function (res) {  //这里既可以获取模拟的res
        t.setData({
            productList:res.list
        })
        // console.log(t.data.productList);
    });

  },
})
