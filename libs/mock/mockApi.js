let API_HOST = "http://xxx.com/xxx";
let DEBUG = true;//切换数据入口
var Mock = require('./mock.js');
var Random = Mock.Random;

let titleAll = [
    '东阿阿胶',
    '复方阿胶浆',
    '桃花姬阿胶糕',
    '东阿阿胶真颜小粉支',
    '真颜小分子阿胶',
    '东阿阿胶速溶块',
    '冻干驴乳粉',
    '海龙胶口服液',
    '阿胶金丝枣(蓝帽子)'
];

let imgPathAll = [
    'https://www.dongeejiao.com/upload/image/20180413/20180413161657_89164.png',
    'https://www.dongeejiao.com/upload/image/20180327/20180327162733_86873.png',
    'https://www.dongeejiao.com/upload/image/20181122/20181122143549_64466.png',
    'https://www.dongeejiao.com/upload/image/20191016/20191016174322_69171.jpg',
    'https://www.dongeejiao.com/upload/image/20180327/20180327182730_39304.png',
    'https://www.dongeejiao.com/upload/image/20181114/20181114194811_51258.png',
    'https://www.dongeejiao.com/upload/image/20181120/20181120115347_76971.png',
    'https://www.dongeejiao.com/upload/image/20190722/20190722183650_58959.png',
    'https://www.dongeejiao.com/upload/image/20181127/20181127133907_89970.png'
];

function indexAjax(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: config.API_HOST + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
                fn(res);
            }
        });
    } else {
        // 模拟数据
        var res = Mock.mock({

  "swiper|4":[
    {
      'imgPath':Random.image('800x400', '#04a1f7', '#FFF', 'png', ''),
      'id|+1': 1
    }
  ],

  'section1':{
    'list|4':[{
      'imgPath':Random.image('400x400', '#b7ddf2', '#333', 'png', ''),
      'id|+1': 1
    }],
    'banner':Random.image('400x100', '#ffcc33', '#FFF', 'png', 's1-banner')
  },
  'section2|10':{
    'list|10':[{
        'title|1': titleAll,
        'price|99-1000':100,
        'intro': Random.paragraph(),
        'imgPath|1':imgPathAll,
        'id|+1': 1
      }],
      'banner':Random.image('400x100', '#b97cc9', '#FFF', 'png', 's2-banner')
  },

  'section3':{
      'list|4':[{
        'start':Random.time('HH:mm'),
        // 在end数组里随机取一个
        'imgPath':Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
        'id|+1': 1,
        'price|99-1000':100,
        'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
      }],
      'banner':Random.image('400x100', '#30f673', '#FFF', 'png', 's3-banner'),

  },


  'section4':{
    'list|4':[{
      'imgPath':Random.image('400x400', '#e2f630', '#333', 'png',''),
      'price|99-1000':100,
      'intro': Random.paragraph(),
      'id|+1': 1
    }],
    'banner':Random.image('400x100', '#ffcc33','#FFF', 'png', 's4-banner')
  }




        })
        // 输出结果
       // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
}


function ajax(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: config.API_HOST + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
                fn(res);
            }
        });
    } else {
        // 模拟数据
        var res = Mock.mock({
            'error_code': '1',
            'error_msg': '2',
            'data|10': [{
                'id|+1': 1,
                'img': "@image('200x100', '#4A7BF7','#fff','pic')",
                'title': '@ctitle(3,8)',
                'city': "@county(true)",
                'stock_num': '@integer(0,100)',//库存数量  
                'marketing_start': '@datetime()',
                'marketing_stop': '@now()',
                'price': '@integer(100,2000)',//现价，单位：分  
                'original_price': '@integer(100,3000)'
            }]
        })
        // 输出结果
       // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
}
function detailApi(data = '', fn, method = "get", header = {}) {
    if (!DEBUG) {
        wx.request({
            url: config.API_HOST + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
                fn(res);
            }
        });
    } else {
        // 模拟数据
        var res = Mock.mock({

              "view|1": [{
                'title|1': ['一加手机5 (A5000) 全网通  移动联通电信4G手机','三星 Galaxy S8 移动联通电信4G手机 ','荣耀9 全网通 标配版 4GB+64GB 移动联通电信4G手机 ','OPPO R11 全网通 手机','小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 ','新诺基亚（NOKIA）105 移动联通2G手机 老人手机','小辣椒 红辣椒4A 标准版  全网通 移动联通电信4G手机 ','锤子 坚果Pro 全网通 移动联通电信4G手机 ','360手机 N5 全网通 移动联通电信4G手机 ','乐视 S3 爵迹版  移动联通电信4G手机 '
                ],
                'intro':  "@cparagraph(2)",
                'id':'@id',
                'price|99-1000':100,
                'chose|3':[{
                  'col|+1':['土豪金','东北银','喜庆红'],
                  'size|+1':['128g','64g','32g']
                }]
              }],

              'swiper|2':[{
                'imgSrc':"@image('400x400', '#ffcc33','#FFF', 'png', '')",
                'id':'@id'
              }],

              'contentImgSrc|8':[{
                'imgSrc':"@image('600x600', '#5a9e6e','#FFF', 'png', '')"
              }]

        })
        // 输出结果
       // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
}

module.exports = {
    indexAjax:indexAjax,
    ajax: ajax ,
    detailApi: detailApi
}