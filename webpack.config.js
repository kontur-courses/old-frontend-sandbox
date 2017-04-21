var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: 'build',
    path: path.resolve(__dirname, 'build')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      { test: /\.css$/, loader: "style-loader!css-loader?modules" },
      { test: /\.(jpg|png|gif)$/, exclude: /node_modules/, use: "file-loader" }
    ]
  }
};