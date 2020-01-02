Page({
  data: {
    textContent:['甲','乙','丙','丁'],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4'],
    indicatorDots: true, //指示点
    vertical: false, //竖向
    autoplay: true,  //自动播放
    circular: false, //衔接滑动
    interval: 2000,  //自动播放间隔时长(ms)
    duration: 500,  //幻灯片切换时长(ms)
    previousMargin: 0,  //前边距(px)
    nextMargin: 0  //后边距(px)
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

/*
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
*/

  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
