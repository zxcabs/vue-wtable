const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge.smart(baseWebpackConfig, {
  entry: {
    index: 'example/index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('example/index.html'),
      inject: true
    })
  ],

  devServer: {
    compress: true,
    port: process.env.DEV_PORT || 8080,
    host: process.env.DEV_HOST || '0.0.0.0'
  }
});
