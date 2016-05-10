import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './client/index',
  ],
  output: {
    path: resolve(__dirname, 'client'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel',
    }, {
      test: /\.styl$/,
      exclude: /node_modules/,
      loader: 'style!css!stylus',
    }],
  },
  devServer: {
    hot: true,
    port: 5000,
  },
};
