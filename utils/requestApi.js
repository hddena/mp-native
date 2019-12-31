// 基于mpvue微信小程序 promise+wx.request 封装请求
// https://blog.csdn.net/qq_34322905/article/details/83149699

// import requestAll from './request' // 此处，引入存放对promise处理的文件

const requestAll = require('./request'); // 此处，引入存放对promise处理的文件

const apiUrl = 'http://store.cmsya.com/' 
const webUrl = '域名'
 
class api {
	//首页分享
	indexShare(newsID){
		let data = {
			newsID
		}
		return requestAll.postRequest(apiUrl + 'api/news/getdetail', data);
	}
	//首页分享
	indexClassList(){
		return requestAll.postRequest(apiUrl + 'api/product/getclassList');
	}
}
 
//暴露接口
export default {
	api:api
}