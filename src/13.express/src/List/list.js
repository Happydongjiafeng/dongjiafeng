/*关于请求文件列表的方法*/
import express from 'express'

const router = express.Router()

router.get('/getAll', (req, res) => { // 用户登录接口
  res.json({
    code: 200,
    msg: '获取全部数据成功',
  })
})

export default router