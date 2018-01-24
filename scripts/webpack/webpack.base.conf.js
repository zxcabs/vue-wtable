const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(),

  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve('lib'),
    filename: '[name].js',
    pathinfo: true
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve()
    ],
    extensions: ['.js', '.vue']
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {},
            esModule: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin([
      'NODE_ENV'
    ].reduce((s, n) => Object.assign(s, { ['process.env.' + n]: JSON.stringify(process.env[n]) }), {
    }))
  ]
};
