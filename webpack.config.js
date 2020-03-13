const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");

const _module = {
  rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
    plugins = [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ]
        }
      })
    ]
  ]
}

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          publicPath: '../images',
          outputPath: 'assets/images',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'assets/styles/app.css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {},
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: 'index.html',
      template: './src/index.hbs'
    }),
    new HtmlWebpackPlugin({
      title: 'Take action',
      filename: 'take-action.html',
      template: './src/take-action.hbs'
    }),
  ]
};