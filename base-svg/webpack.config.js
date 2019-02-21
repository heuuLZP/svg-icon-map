const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const svgoConfig = require("./svgo-config.json");

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'src/svgs')],
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        },
        {
          loader: 'svgo-loader',
          options: svgoConfig,
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      inject: true
    })
  ]
}