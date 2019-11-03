
require("@babel/polyfill");
require('react-hot-loader');
const path = require('path');
console.log(process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ["@babel/polyfill", "react-hot-loader/patch", path.resolve(__dirname, './client/index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/build',
    proxy: {
      '/api': 'http://localhost:3000',
      '/' : 'http://localhost:3000'
    },
    clientLogLevel: 'debug',
    color: true,
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [

  ]
};