module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  // NOTE 'Setting up Webpack'
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000, // most common port
    contentBase: './build',
    inline: true
  }
  // NOTE 'Adding babel to Webpack'
}
