//index.js
//获取应用实例
const app = getApp()
// import Toast from '../../components/vant-weapp/toast/toast';
const toast = app.toast;
const requestApi = app.requestApi.default;
// console.log(requestApi.api);

Page({
  data: {
    motto: '乐社区',
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

    // this.indexClassList();
  },
  toastFn(){
    console.log(toast);
    // toast('成功文案');
    // toast.success('成功文案');
  },

})
