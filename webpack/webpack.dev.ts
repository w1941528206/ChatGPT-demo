import merge from 'webpack-merge';
import baseConfig from './webpack.base';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const devConfig = {
  mode: 'development',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    })
  ],
  module: {
    rules: [{
      test: /.(less|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader',
        'css-loader',
        'less-loader',
      ]
    }]
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 8080,
  }
}

export default merge(baseConfig, devConfig as any);