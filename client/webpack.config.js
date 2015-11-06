'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: [
    './index.js',
    './index.html'
  ],
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {stage: 0, plugins: ['./relay.config.js']}
      },
      {
        test: /index\.html$/,
        loader: 'file?name=index.html'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file?name=assets/[hash].[ext]"
      }
    ]
  }
};
