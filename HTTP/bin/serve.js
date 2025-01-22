const http = require('node:http')
const { handleRequest } = require('../app')

const server = http.createServer()

server.on('request', handleRequest)

server.listen(3000, () => {
  console.log('server running http://127.0.0.1:3000')
})