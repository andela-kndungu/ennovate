var path = require('path');
var webpack = require('webpack');

var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var publicPath = '/assets/';

module.exports = [{
  name: 'Non-server-side',
  entry: path.join(__dirname, '../app/index.js'),
  devtool: 'source-map',
  output: {
    path: assetsPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      exclude: path.join(__dirname, '..', 'node_modules')
    }]
  }
}];

