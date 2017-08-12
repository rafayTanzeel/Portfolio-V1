const webpack = require('webpack')
const path = require('path')

const DIST_DIR = path.join(__dirname, 'dist')
const SRC_DIR = path.join(__dirname, 'src')

module.exports = {
  entry: {
    index: path.join(SRC_DIR, 'app', 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(DIST_DIR, 'app'),
    publicPath: '/app/',
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query:  {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  },
};
