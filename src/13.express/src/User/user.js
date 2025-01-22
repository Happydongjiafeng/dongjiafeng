/*关于用户相关的api*/
import express from 'express'
const router = express.Router()

router.post('/login', (req,res) => { // 用户登录接口
  res.json({
    code: 200,
    msg: '登录成功',
  })
})

router.post('/register', (req,res) => { // 用户注册接口
  res.json({
    code: 200,
    msg: '注册成功',
  })
})

export default router