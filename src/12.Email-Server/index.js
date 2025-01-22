const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const mime = require('mime-types') //用于获取文件类型
const {createProxyMiddleware} = require('http-proxy-middleware')
const proxyConfig = require('./http-middle-ware-config.js') // 引入http反向代理
const url = require('node:url')

const server = http.createServer()

server.on('request', (req, res) => { //监听请求
  const { pathname } = url.parse(req.url) //解析请求路径
  if(req.method === 'GET' && pathname === '/') { //跳转到/login页面
    res.writeHead(302, { 'Location': '/login' })
    return res.end()
  }
  if(req.method === 'GET' && pathname === '/login') { //登录页面，展示给用户静态资源
    const filePath = path.join(process.cwd(),'static', 'login.html') //获取静态资源路径，方便后续读取文件内容
    const fileType = mime.lookup(filePath) //获取文件类型
    fs.readFile(filePath, (err, data) => {
      if(err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        return res.end('读取文件失败！请联系管理员')
      }
      res.writeHead(200, {
        'Content-Type': fileType + ';charset=utf-8',
        'cache-control': 'public,max-age=3600' // 静态资源缓存1个小时
      })
      res.end(data)
    })
  }
  if(req.method === 'POST' && pathname === '/api/getCaptcha') { // 处理请求验证码的请求
    const proxy = createProxyMiddleware(proxyConfig.sever.proxy['/api'])
    proxy(req,res)
  }
})

server.listen(80, () => {
  console.log('Server is running on port 80')
})
