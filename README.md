# 原生小程序


## Build Setup

``` bash
# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:mAxure 项目原型图
https://fchqpn.axshare.com/

快速上手
http://mpvue.com/mpvue/quickstart.html

微信小程序开发文档
https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html

mpvue——API请求封装(小程序原生)
https://www.cnblogs.com/wangyang0210/p/10436833.html
https://blog.csdn.net/qq_38867237/article/details/90374209

mpvue页面跳转及传值
https://cloud.tencent.com/developer/article/1401177

mpvue使用过程中注意事项和不支持的语法
https://www.jianshu.com/p/8aef9d6510f6

mpvue 微信小程序 获取用户权限open-type="getUserInfo"
https://blog.csdn.net/weixin_36934930/article/details/80706820

模拟数据
http://mockjs.com/

# 生成 bundle 分析报告
npm run build --report

# 微信小程序分享传递参数

分享流程大致如下：
1：在onShareAppMessage内设置分享参数
2：在onLoad里获取分享参数，进行逻辑处理

<button open-type='share'>分享</button>

onLoad(options) {
  //判断是否包含分享的参数
  if (options != null && options != undefined &&
    options.sharetype != null && options.sharetype > 0) {
    var longitude = options.longitude;
    var latitude = options.latitude;
 
    //拿到经纬度，然后就处理自己逻辑，比如显示该位置地图
  }
},
onShareAppMessage: function (res) {
  //设置分享参数
  var that = this;
  var longitude = 114.0322103;
  var latitude = 22.5353646;
  return {
    title: '位置收藏大师',
    path: '/pages/home/home?sharetype=1&longitude=' + longitude + '&latitude=' + latitude
  }
}

下拉刷新动画设置
https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
