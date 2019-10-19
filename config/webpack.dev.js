const merge = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Coupon Finder',
    }),
  ],
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    port: 3000,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    hot: true,
    open: true,
  },
});
