let {merge} = require('webpack-merge');
let commonConfig = require('./webpack.common');
let path = require('path');
module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map', // sourcemap是为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../src/'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 3000,
    stats: {
      colors: true,
    },
  },
});
