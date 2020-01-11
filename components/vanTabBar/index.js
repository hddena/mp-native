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
  goTolequbu: function() {
    console.log('goTolequbu')
    // wx.navigateTo({
   	wx.switchTab({
      url: '../lequbu/index'
    })
  },
  goToCommunity: function() {
    console.log('goToCommunity')
    // wx.switchTab({
    wx.switchTab({
      url: '../community/index'
    })
  },
  goToStore: function() {
    console.log('goToStore')
    // wx.switchTab({
    wx.switchTab({
      url: '../store/index'
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



