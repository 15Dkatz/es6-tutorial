const path = require('path');

// TODO: why do we HAVE to use the path module. Can't we write the absolute
// path? Well this helps automatically create the absolute path.
module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    // 8080 is default, but let's be explicit
    port: 8080, // TODO: signifance of this port num in particular?
    contentBase: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
