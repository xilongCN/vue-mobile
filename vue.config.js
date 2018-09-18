// import px2rem from 'postcss-plugin-px2rem';
// let px2rem = require('postcss-plugin-px2rem')
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: (loader) => [
            require('postcss-plugin-px2rem')({ rootValue: 75 })
          ]
        }
      }
    }
  }
}
