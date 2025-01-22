module.exports = {
  sever : {
    proxy: {
      '/api' :{
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/get-verification-code' // rewrite path改为获取验证码
        }
      }
    }
  }
}