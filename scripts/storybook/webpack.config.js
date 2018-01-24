const merge = require('webpack-merge');
const conf = require('../webpack/webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (storyConf) => {
  conf.entry = {};

  const vueLoaderIndex = storyConf.module.rules.findIndex((rule) => {
    return rule.loader.indexOf('vue-loader') > -1;
  });

  if (vueLoaderIndex > -1) {
    storyConf.module.rules.splice(vueLoaderIndex, 1);
  }

  conf.plugins = conf.plugins.filter((pluginInstance) => {
    return !(pluginInstance instanceof HtmlWebpackPlugin);
  });

  return merge.smart(merge.smart(conf, {

  }), storyConf);
};
