const path = require('path')

module.exports = {
  // entry: path(__dirname, )
  entry: './src/index.js',
  output: {
    // resolve is used to know where our project is based
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}
