/*
* 处理关于商品的一些请求
* */
const {goods_list, goods_price} = require('./URL_STATIC')

const goods_request = (req) => {
  if(req.url === goods_list) { //处理url路径为/api/all_goods
    console.log('处理url路径为/api/all_goods');
  }else if(req.url === goods_price) { //处理url路径为/api/good_price
    console.log('处理url路径为/api/good_price');
  }
}

module.exports = {
  goods_request
}