const http = require('node:http')
const url = require('node:url')
const util = require('node:util')
const fs = require('node:fs')
const {createProxyMiddleware} = require('http-proxy-middleware')
const proxyMiddleWare = require('./proxy-middleware.config.js')

const httpServer = http.createServer((req, res) => {
  const {pathname} = url.parse(req.url)
  if (pathname === '/index' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    // 读取index.html文件并且返回回去
    let readHtmlFile = util.promisify(fs.readFile)
    readHtmlFile(__dirname + '/index.html').then(data => {
      return res.end(data)
    })
  }
  const proxyList = Object.keys(proxyMiddleWare.server.proxy)
  if (proxyList.includes(pathname)) { // 如果代理的路径里面包含 .form 就跳转到我代理的路径
    const proxyServer = createProxyMiddleware(proxyMiddleWare.server.proxy[pathname])
    proxyServer(req,res)
  }
})

httpServer.listen(80, () => {
  console.log('Server is running on port 80')
})