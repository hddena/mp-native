Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/images/tabBar/icon_component.png",
        selectedIconPath: "/images/tabBar/icon_component_HL.png",
        text: "组件"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "接口"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "AAA"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "BBB"
      }, {
        pagePath: "/pages/logs/logs",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "CCC"
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