const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('./client/src/index.jsx'),
  output: {
    path: path.resolve('./client/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
