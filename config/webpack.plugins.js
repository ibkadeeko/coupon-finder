const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

dotenv.config();
const devMode = process.env.NODE_ENV !== 'production';

const terserPlugin = new TerserPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
});

const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({});

const miniCSSExtractPlugin = new MiniCSSExtractPlugin({
  filename: devMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  terserPlugin,
  optimizeCSSAssetsPlugin,
  miniCSSExtractPlugin,
  cleanWebpackPlugin,
};
