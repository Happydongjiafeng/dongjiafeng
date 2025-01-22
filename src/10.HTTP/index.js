import http from 'node:http'
import url from 'node:url'
const server = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  if(req.method.toLowerCase() === 'get') {
    return res.end('GET请求');
  }
  if(req.method.toLowerCase() === 'post') {
    return res.end('POST请求')
  }
})
server.listen(3000, () => {
  console.log('服务运行在3000端口')
})