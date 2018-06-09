const webpack = require('webpack')
const paths = require('./paths')

const config = {
  entry: {
    bundle: paths.inputPath,
  },
  output: {
    filename: '[name].[hash:8].js',
    path: paths.outputPath,
  },
  module: {
    rules: [
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: [/\.(jpe?g|png)$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
}

module.exports = config
