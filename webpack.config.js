var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = './src/js/';
var entries = [ path.resolve(ROOT_PATH, 'app.js') ];


// dev mode, boot up the dev server and live reload on file changes
if (process.env.NODE_ENV !== 'production') {
  entries.push('webpack-dev-server/client?http://localhost:8080');
}


module.exports = {
  entry: entries,
  output: {
    path: './public',
    publicPath: 'public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass', { publicPath: '' })
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
