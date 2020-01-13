Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#f00",
    list: [{
        pagePath: "/pages/lequbu/index",
        iconPath: "/images/tabBar/icon_lequbu.png",
        selectedIconPath: "/images/tabBar/icon_lequbu_HL.png",
        text: "乐趣步"
      }, {
        pagePath: "/pages/community/index",
        iconPath: "/images/tabBar/icon_community.png",
        selectedIconPath: "/images/tabBar/icon_community_HL.png",
        text: "乐社区"
      }, {
        pagePath: "/pages/store/index",
        iconPath: "/images/tabBar/icon_store.png",
        selectedIconPath: "/images/tabBar/icon_store_HL.png",
        text: "乐惠商城"
      }, {
        pagePath: "/pages/cart/index",
        iconPath: "/images/tabBar/icon_cart.png",
        selectedIconPath: "/images/tabBar/icon_cart_HL.png",
        text: "购物车"
      }, {
        pagePath: "/pages/user/index",
        iconPath: "/images/tabBar/icon_user.png",
        selectedIconPath: "/images/tabBar/icon_user_HL.png",
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