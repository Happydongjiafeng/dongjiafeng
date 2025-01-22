/*
* 创建一个服务器，测试一下防盗链的行为
* */
import express from 'express';
import {chain} from './Anti-theftChain/chain.js'

const app = express();

app.use(chain) // 注册防盗链中间件

app.use(express.static('static'))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});