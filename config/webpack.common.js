const path = require('path');

const {
  miniCSSExtractPlugin,
} = require('./webpack.plugins');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg|eps|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
  plugins: [miniCSSExtractPlugin],
};
