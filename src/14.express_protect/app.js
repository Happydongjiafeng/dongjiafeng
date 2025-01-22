import express from 'express';
import listRouter from './src/List/index.js'
import UserRouter from './src/User/index.js'
import {logMiddleware} from './middleWare/log4j/log.js' // 引入日志文件中间件

const app = express();
app.use(logMiddleware); // 使用日志文件中间件
app.use('/list', listRouter);
app.use('/user', UserRouter);

app.listen(3000, () =>{
  console.log('Server is running on port 3000');
})