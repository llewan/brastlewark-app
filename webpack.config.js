var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.[contentHash].js'
  },
  mode: "development",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};