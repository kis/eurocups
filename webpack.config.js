var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

var appContext = path.join(__dirname, '/');

module.exports = {
  context: appContext,
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './js/index'
  ],
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: "http://localhost:3001/"
    // publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader?stage=0&optional=runtime'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'js')
    }, {
      test: /\.css?$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }
};