const path = require('path')

module.exports = {
  localhostUrl: 'http://localhost:9000',
  inputPath: path.resolve(__dirname, '../', 'src'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  htmlTemplatePath: `${__dirname}/index.html`,
}
