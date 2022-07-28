const path = require("path");
const common = require("./webpack.common");

const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        include: [path.resolve(__dirname, "../src")],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    hot: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
    compress: true,
    bonjour: true,
  },
  devtool: "eval-source-map",
});
