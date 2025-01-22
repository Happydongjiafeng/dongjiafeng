/*
* 关于List的路由*/
import express from 'express'

const router = express.Router()

router.get('/getAllList',(req,res) => {
  res.json({
    code: 200,
    msg: '获取所有列表成功',
  })
})

export default router 