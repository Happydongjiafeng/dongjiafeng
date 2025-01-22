import express from 'express'
import listRoute from './src/List/list.js' // 引入list路由模块
import userRoute from './src/User/user.js' // 引入user路由模块
import {logMiddleware} from './middleWare/log.js'

const app = express()
app.use(logMiddleware) // 注册日志中间件
app.use('/list', listRoute) // 注册list路由
app.use('/user', userRoute) // 注册user路由

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})