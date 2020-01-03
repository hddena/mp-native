Page({
  data: {
    motto: 'navBar',
  },
  onClickLeft() {
    console.log('onClickLeft');
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  onClickRight() {
    console.log('onClickRight');
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
})
