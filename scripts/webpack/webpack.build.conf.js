const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge.smart(baseWebpackConfig, {
  output: {
    filename: 'index.js',
    library: 'wtable',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    pathinfo: false
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([
      'lib'
    ], {
      root: path.resolve(__dirname, '../..')
    }),
    new UglifyjsPlugin({
      parallel: true,
      sourceMap: true,
      cache: path.resolve(__dirname, '../..', '.uglcache')
    })
  ]
});
