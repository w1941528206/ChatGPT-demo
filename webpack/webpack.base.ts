import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const baseConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]_[chunkhash:8].js',
  },
  module: {
    rules: [{
      test: /.(js|ts)x?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env", // 智能的babel预设, 让你能使用最新的JavaScript语法
            "@babel/preset-react", // 解析jsx语法
            "@babel/preset-typescript", // 解析ts语法
          ],
        },
      }]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};

export default baseConfig;
