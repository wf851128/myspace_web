module.exports = {
  devServer: {
    // host: '0.0.0.0',
    // port: 8080,
    // open: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:8081', // 接口域名
        changeOrigin: true, // 是否跨域
        // ws: true, // 是否代理 websockets
        // secure: true, // 是否https接口
        pathRewrite: { // 路径重置
          '^/api/': ' '
        }
      }
    }
  }
}
