const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader'
      }]
    }]
  },
  devServer: {
    static: './public/images',
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:5050')
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html'
    })
  ]
})
