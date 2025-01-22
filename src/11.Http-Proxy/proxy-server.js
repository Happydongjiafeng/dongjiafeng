const http = require('node:http')

http.createServer((req,res) =>{ // 3000端口的服务器
  console.log('代理成功')
  console.log(req)
}).listen(3000, () => {
  console.log('Server running on port 3000')
})