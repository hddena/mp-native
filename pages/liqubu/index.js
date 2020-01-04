//index.js
//获取应用实例
const app = getApp()
// import Toast from '../../components/vant-weapp/toast/toast';
const base = app.base;
const toast = app.toast;
const requestApi = app.requestApi.default;
// console.log(requestApi.api);
var mockApi = require('../../libs/mock/mockApi.js');

// var mock = require('../../libs/mock/mock.js');
var mockApiData = require('../../libs/mock/mockApiData.js');

Page({
  data: {
    motto: '乐趣步',
    list:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //console.log(mockApi);
    console.log(base);
        var that = this
        // 使用 Mock
        mockApi.ajax('', function (res) {
            //这里既可以获取模拟的res
            //console.log(res.data[0])
            that.setData({
                list:res.data
            })
        });
        //console.log(this.data.list)
        mockApi.indexAjax('', function (res) {
            //这里既可以获取模拟的res
            console.log(res.section2.list);
            that.setData({
                //list:res.data
            })
        });

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
  toastFn(){
    console.log(toast);
    // toast('成功文案');
    // toast.success('成功文案');
  },

})
