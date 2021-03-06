const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'inline-source-map' : false,
  entry: {
    main: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js'
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      notify: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hot: true
    }),
    new HtmlWebpackPlugin({
      template: './src/404.html',
      filename: './404.html',
      hot: true
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new StyleLintPlugin(),
    new CleanWebpackPlugin(['dist']),
    new FriendlyErrorsWebpackPlugin(),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './'
                }
              },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(json)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: devMode
    ? {}
    : {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      }
};
