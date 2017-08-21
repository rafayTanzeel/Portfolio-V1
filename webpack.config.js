const webpack = require('webpack')
const path = require('path')

const DIST_DIR = path.join(__dirname, 'dist')
const SRC_DIR = path.join(__dirname, 'src')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: path.join(SRC_DIR, 'javascripts','index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(DIST_DIR),
    publicPath: '/',
  },
  module : {
    loaders : [{
        test : /\.js?/,
        include : path.resolve(SRC_DIR, 'javascripts'),
        loader : 'babel-loader',
        query:  {
          presets: ['react', 'es2015', 'stage-2']
        }
    }],
    loaders : [{
        test: /\.scss$/,
        include : path.resolve(SRC_DIR, 'styles'),
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      // minify: {collapseWhitespace : true},
      template: './src/index.pug'
    })
  ]
};
