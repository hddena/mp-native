/* global Component wx */

Component({
  properties: {

    title: {          // 属性名
      type: String,   // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '',     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },

    num: {      // 属性名
      type: Number,   // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 100,     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },

    nickNameList: {    // 属性名
      type: Object,   // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '',      // 属性初始值（可选），如果未指定则会根据类型选择一个
    },

    painting: {
      type: Object,
      value: {view: []},
      observer (newVal, oldVal) {
        if (!this.data.isPainting) {
          if (newVal.width && newVal.height) {
            this.setData({
              isPainting: true
            })
            this.readyPigment()
          }
        }
      }
    }
  },
  data: {
    width: 100,
    height: 100,
    index: 0,
  },
  ctx: null,
  cache: {},
  ready () {
    // console.log(this.data.nickNameList);
    wx.removeStorageSync('canvasdrawer_pic_cache')
    this.cache = wx.getStorageSync('canvasdrawer_pic_cache') || {}
    this.ctx = wx.createCanvasContext('canvasdrawer', this)
  },
  methods: {
    readyProList (e) {
      let id = e.currentTarget.dataset.id + 1
      let title = e.currentTarget.dataset.title
      //console.log(e.currentTarget.dataset);
      wx.showToast({
        title: title,
      })
    },

  }
})
