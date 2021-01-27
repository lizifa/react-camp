let path = require('path');
let HtmlWebPackPlugin = require('html-webpack-plugin');
let webpack = require('webpack'); //增加导入webpack

module.exports = {
  entry: './src/index.js', //在entry字段中添加触发文件配置
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          // loader 是 babel
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), {modules: false}],
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
};
