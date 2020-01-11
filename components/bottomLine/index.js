Page({
  data: {
    contentText: '猜你可能还想要，我就帮你推荐了', //竖向
  },


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
