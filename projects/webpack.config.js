const path = require('path');
const webpack = require('webpack')
// import webpack from 'webpack' // (if you're using ESM)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//TODO dev/prod version split
// externals
// hot recompile

module.exports = {
  mode: 'development',
  entry: './static/projects/src/js/youviz.js',
  plugins: [
      new MiniCssExtractPlugin({
          //filename: "[name][contenthash].css",
          filename: "[name].css",
          chunkFilename: "[id].css",
          ignoreOrder: false,
        }),
      new HtmlWebpackPlugin({
       title: 'Caching',
      }),
      // fix "process is not defined" error:
      new webpack.ProvidePlugin({
      process: 'process/browser',
      }),
    ],
  devtool: 'inline-source-map',
  output: {
    //filename: '[name].[contenthash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/projects/dist/'),
    clean: true,
    //assetModuleFilename: '[path][name].[hash][ext][query]'
  },
  optimization: {
     moduleIds: 'deterministic',
     runtimeChunk: 'single',
     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
    },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.woff2?$/,
        type: "asset/resource",
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|map)$/,
        type: "asset/resource",
        generator: {
            filename: '[name][ext]'
        }
      },
    ],
  },
};