const webpack = require('webpack');
const path = require('path');

const autoprefixer = require('autoprefixer');
const precss       = require('precss');
const mixins       = require('postcss-mixins');
const nested       = require('postcss-nested');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('./styles.css');

const miniExtractCSS = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

const appContext = path.join(__dirname, '/');

const NODE_ENV = process.env.NODE_ENV || "development";
console.log('env', NODE_ENV)

module.exports = {
  context: appContext,
  mode: 'development',
  entry: {
    index: ['babel-polyfill', './js/index']
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  devtool: 'eval-sourcemap',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, '/js')
    }, {
      test: /\.css?$/,
      use: [
        MiniCssExtractPlugin.loader,
        { 
          loader: 'css-loader' 
        },
        { 
          loader: 'postcss-loader', 
          options: { 
            ident: 'postcss', 
            plugins: [autoprefixer, precss, mixins, nested] 
          } 
        }
      ]
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[path][name].[ext]?[hash]'
    }, {
      test: /\.svg/,
      loader: 'svg-url-loader'
    }]
  },
  stats: {
    entrypoints: false,
    children: false
  },
  plugins: [
    miniExtractCSS,
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development'),
    })
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendors',
  //           enforce: true,
  //           chunks: 'all'
  //       }
  //     }
  //   }
  // }
};
