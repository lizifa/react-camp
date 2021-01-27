let {merge} = require('webpack-merge');
let commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
});
