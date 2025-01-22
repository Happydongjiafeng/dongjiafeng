import express from 'express';

const app = express();

app.use('/public', express.static('static'))

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream') // 设置响应头为服务器发送事件流
  res.write('event: message\n') // 发送事件类型
  setInterval(() => {
    res.write('data: 服务器发送事件流\n\n') // 发送数据
  }, 1000)

})

app.listen(3000, () => {
  console.log('服务运行在3000端口');
})