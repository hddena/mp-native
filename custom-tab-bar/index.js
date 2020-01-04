Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/liqubu/index",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "乐趣步"
      }, {
        pagePath: "/pages/community/index",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "乐社区"
      }, {
        pagePath: "/pages/store/index",
        iconPath: "/images/tabBar/icon_component.png",
        selectedIconPath: "/images/tabBar/icon_component_HL.png",
        text: "乐惠商城"
      }, {
        pagePath: "/pages/cart/index",
        iconPath: "/images/tabBar/icon_API.png",
        selectedIconPath: "/images/tabBar/icon_API_HL.png",
        text: "购物车"
      }, {
        pagePath: "/pages/user/index",
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