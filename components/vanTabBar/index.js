const app = getApp();

Page({
  data: {
    motto: 'Van TabBar',
    active: 'home'
  },

  onShow: function () {
    console.log('TabBar123456');
  },

  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    console.log(event.detail);
  },

  //页面跳转
  goToHome: function() {
    console.log('goToHome')
    // wx.switchTab({
   	wx.navigateTo({
      url: '../index/index'
    })
  },
  goToCommunity: function() {
    console.log('goToCommunity')
    // wx.switchTab({
    wx.switchTab({
      url: '../community/index'
    })
  },
  goToLiqubu: function() {
    console.log('goToLiqubu')
    // wx.switchTab({
    wx.switchTab({
      url: '../liqubu/index'
    })
  },
  goToCart: function() {
    console.log('goToCart')
    // wx.switchTab({
    wx.switchTab({
      url: '../cart/index'
    })
  },
  goToUser: function() {
    console.log('goToUser')
    // wx.switchTab({
    wx.switchTab({
      url: '../user/index'
    })
  },

})



