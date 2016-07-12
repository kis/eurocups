var path = require('path');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var appContext = path.join(__dirname, '/');

module.exports = {
  context: appContext,
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './js/index'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: "http://localhost:3001/"
    // publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader?stage=0&optional=runtime'],
      include: path.join(__dirname, '/js')
    }, {
      test: /\.css?$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin("[name].css", { allChunks: true })
  ],
  postcss: function () {
    return [autoprefixer, precss];
  },
  devServer: {
    host: 'localhost',
    port: 3001
  },
  // watch: true
};