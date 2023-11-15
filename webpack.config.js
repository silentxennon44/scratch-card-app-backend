const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
 output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        // /\.(?:ico|gif|png|jpg|jpeg|svg)$/i
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          'img-loader', "url-loader", "file-loader"
          ],
        type: 'asset/resource',
      },
       {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
   extensions: ['.tsx', '.ts', '.js']
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "public"), // Serve files from this directory
  //   port: 3000, // Port for the development server
  //   open: true, // Open the default web browser when the server starts
  // },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    // open: true,
    compress: true,
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.PUBLIC_URL': JSON.stringify('.'),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Scratch Card APP Admin',
      filename: 'index.html'
    }),
    // new webpack.ProgressPlugin({
    //   handler: (percentage, message ) => {
    //     console.info(percentage, message);
    //   },
    // }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
};