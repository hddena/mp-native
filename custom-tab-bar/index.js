Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/images/tabBar/icon_component.png",
        selectedIconPath: "/images/tabBar/icon_component_HL.png",
        text: "乐趣步"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "乐社区"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "乐惠商城"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "购物车"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "我"
      }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data);
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})