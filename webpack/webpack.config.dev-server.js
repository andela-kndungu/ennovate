var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '..', 'public', 'assets');

module.exports = {
  // The configuration for the server-side rendering
  name: 'server-side rendering',
  context: path.join(__dirname, '..', 'app'),
  entry: {
    server: './server.js'
  },
  target: 'node',
  output: {
    // The output directory as absolute path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: 'server.js',
    // The output path from the view of the Javascript
    publicPath: '/assets/',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders:[{
      test: /\.js$|\.jsx$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      include: path.join(__dirname, '..', 'app'),
      exclude: path.join(__dirname, '..', 'node_modules')
    }]
  },
  resolve: {
    root: [path.join(__dirname, '..', 'app')],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVCLIENT__: false,
      __DEVSERVER__: true
    }),
    new webpack.IgnorePlugin(/vertx/)
  ]
}
