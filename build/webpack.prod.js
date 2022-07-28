/*
 * @Author: cxw
 * @Date: 2022-07-27 16:12:35
 * @LastEditors: cxw
 * @LastEditTime: 2022-07-27 17:27:40
 * @Description:
 *
 */
const path = require("path");
const os = require("os");

const HappyPack = require("happypack");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        include: [path.resolve(__dirname, "../src")],
        exclude: /node_modules/,
        use: [
          {
            loader: "happypack/loader?id=happybabel",
          },
        ],
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: "happybabel",
      loaders: ["babel-loader"],
      threadPool: happyThreadPool,
      verbose: true,
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: { "@": path.resolve(__dirname, "../src") },
  },
});
