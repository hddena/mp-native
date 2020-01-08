//index.js
//获取应用实例
const app = getApp()
// import Toast from '../../components/vant-weapp/toast/toast';
const base = app.base;
const toast = app.toast;
const requestApi = app.requestApi.default;

// 模拟数据
var mockApi = require('../../libs/mock/mockApi.js');
// var mockApiData = require('../../libs/mock/mockApiData.js');

Page({
  data: {
    motto: '乐趣步',
    stepNum:3691,
    productList:[],
    active: 1,
    switch1Change: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getData();
    console.log(base);

  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

    // this.indexClassList();
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
  getData(){
    let t = this;
    mockApi.productAjax('', function (res) {  //这里既可以获取模拟的res
        t.setData({
            productList:res.list
        })
        // console.log(t.data.productList);
    });
  },
  onRankingChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,
      icon: 'none'
    });
  },


  switchChange (e) {
    console.log(`switchChange发生change事件，携带值为`, e.detail);

      if (e.detail.value) {
        wx.showToast({
          title: '=开=开=开=',
        })
      } else {
        wx.showToast({
          title: '-关-关-关-',
        })
      }
    // var obj = {}
    // obj[`switch1Checked`] = e.detail.value
    // this.setData(obj)
    // obj = {}
    // obj[`switch${index}Style`] = e.detail.value ? '' : 'text-decoration: line-through'
    // this.setData(obj)

  },

  onStepSync(){
      console.log(this.data.stepNum);
      let num = this.data.stepNum + 174;
      this.setData({
        stepNum:num
      })
      wx.showToast({
        title: '同步成功！',
      })
  },
  toastFn(){
    console.log(toast);
    // toast('成功文案');
    // toast.success('成功文案');
  },

})
