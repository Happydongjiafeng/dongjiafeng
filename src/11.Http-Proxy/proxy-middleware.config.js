module.exports = {
  server: {
    proxy: {
      '/form' : {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/form': ''
        }
      }
    }
  }
}