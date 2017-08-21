const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const SRC_DIR = path.join(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(SRC_DIR, 'javascripts', 'index.js'),
    // index: path.join(SRC_DIR, 'styles', 'index.scss'),
    // index: path.join(SRC_DIR, 'index.pug'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(DIST_DIR),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(SRC_DIR, 'styles'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        }),
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.pug$/,
        include: path.resolve(SRC_DIR),
        loader: ['html-loader', 'pug-html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // minify: {collapseWhitespace : true},
      // template: './src/index.pug',
      // filetype: 'pug',
    }),
    new ExtractTextPlugin('[name].css'),
  ],
};
