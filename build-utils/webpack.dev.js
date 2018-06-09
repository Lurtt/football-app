const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const paths = require('./paths')

const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.inputPath,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.htmlTemplatePath,
    }),
    new OpenBrowserPlugin({ url: paths.localhostUrl }),
  ],
}

module.exports = config
