const querystring = require('querystring')
const {goods_request} = require('../HTTP/router/handleGoods')

const initParam = (req) => { //处理请求
  let routeUrl = req.url.split('?')[0] //获取url地址
  req.method = req.method.toLowerCase() //将请求方法统一小写
  return new Promise((resolve, reject) => {
    if (req.method === 'get') {
      req.query = querystring.parse(req.url.split('?')[1])  // 获取get请求的参数
      resolve('ok')
    } else if (req.method === 'post') { //post请求，请求的参数放在body中
      let postParam = '' //接受post分块传来的数据
      req.on('data', (chunk) => {
        postParam += chunk
      })
      req.on('end', () => {
        req.body = querystring.parse(postParam)
        resolve('ok')
      })
    }
    req.url = routeUrl
  })
}

/*处理各种请求*/
const handleRequest = (req, res) => {
  initParam(req).then(val => {
    if (val === 'ok') { //请求参数处理完成
      goods_request(req)
    }
  })
}

exports.handleRequest = handleRequest