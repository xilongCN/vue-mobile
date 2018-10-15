module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({ rootValue: 75 }) // 换算的基数
        ]
      }
    }
  }
}
