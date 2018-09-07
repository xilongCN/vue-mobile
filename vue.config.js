// import px2rem from 'postcss-plugin-px2rem';
let px2rem = require('postcss-plugin-px2rem')
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    // module: {
    //     loaders: [
    //         {
    //             test: /\.css$/,
    //             loader: 'style-loader!css-loader!postcss-loader',
    //         },
    //     ],
    // },
    postcss: [px2rem({ rootValue: 75 })]
  }
}
