const whiteNameList = ['localhost'] // 白名单

export const chain = (req,res,next) => {

  let referer = req.get('referer') // 获取referer
  console.log(referer)
  if(referer) {
    let {hostname} = new URL(referer) // 获取referer的hostname
    if(whiteNameList.includes(hostname)) {
      next()
    } else {
      console.log('非法请求')
      res.status(403).send('非法请求')
      return
    }
  }
}