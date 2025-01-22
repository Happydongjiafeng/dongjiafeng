import http from 'http'
import fs from 'fs'
import yaml from 'js-yaml'
import nodemailer from 'nodemailer'

// 获取email配置
const emailConfig = yaml.load(fs.readFileSync(process.cwd() + '/emil.info.yaml', 'utf8'))
// 创建nodemailer实例
const transporter = nodemailer.createTransport({
  service: 'qq',
  port: 587,
  host: 'smtp.qq.com',
  secure: true,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass
  }
})

http.createServer((req, res) => {
  if (req.url === '/get-verification-code/getCaptcha' && req.method === 'POST') { // 给用户邮箱发送验证码
    let toEmailUserInfo = ''
    req.on('data', (chunk) => {
      toEmailUserInfo += chunk.toString()
    })
    req.on('end', () => {
      toEmailUserInfo = JSON.parse(toEmailUserInfo)
      let randomCode = '' // 生成的随机验证码
      for (let i = 0; i < 6; i++) {
        randomCode += (Math.ceil(Math.random() * 9) + '')
      }
      console.log('生成的验证码为:' + randomCode)
      try {
        transporter.sendMail({
          from: emailConfig.user,
          to: toEmailUserInfo.username,
          subject: '验证码',
          html: '<p style="font-size: 20px;color: red;">您的验证码为：' + randomCode + ' ，请在 5 分钟内输入。</p><p style="font-size: 14px;">如非本人操作，请忽略此邮件。大美女00</p>'
        })
      } catch (err) {
        console.log(err)
        res.writeHead(500, {
          'Content-Type': 'application/json;charset=utf-8'
        })
        res.end(JSON.stringify(
            {
              code: 500,
              message: '发送验证码失败'
            }
        ))
      }
      res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8'
      })
      res.end(JSON.stringify(
          {
            code: 200,
            message: '验证码已发送至' + toEmailUserInfo.username
          }
      ))
    })

    req.on('error', (err) => {
      console.log(err)
    })

  }
}).listen(3000, () => {
  console.log('Proxy server is running on port 3000')
})