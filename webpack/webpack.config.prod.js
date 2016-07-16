var path = require('path');
var webpack = require('webpack');

var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var publicPath = '/assets/';

module.exports = {
  // The configuration for the client
  name: 'browser',
  // SourceMap without column-mappings
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, '..', 'app'),
  output: {
    // The output directory as absolute path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'bundle.js',
    // The output path from the view of the Javascript
    publicPath: publicPath
  },
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
      include: path.join(__dirname, '..', 'app'),
      exclude: path.join(__dirname, '..', 'node_modules')
    }]
  },
  resolve: {
    root: [path.join(__dirname, '..', 'app')],
    extensions: ['', '.js', '.jsx']
  },
};

