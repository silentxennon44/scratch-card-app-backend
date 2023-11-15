const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')

const paths = require('./path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: false,
            },
          },
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(scss|css)$/,
      //   exclude: /\.module\.scss$/, // Exclude SCSS module
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         importLoaders: 1,
      //         modules: false
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true,
      //         sassOptions: {
      //           outputStyle: "compressed",
      //         },
      //       },
      //     }
      //   ]
      // },
      // {
      //   test: /\.module\.(scss|css)$/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         importLoaders: 1,
      //         modules: {
      //           localIdentName: "[hash:base64:20]",
      //         }
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true,
      //         sassOptions: {
      //           outputStyle: "compressed",
      //         },
      //       },
      //     }
      //   ]
      // },
    ],
  },
  plugins: [
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})