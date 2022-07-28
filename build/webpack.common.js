/*
 * @Author: cxw
 * @Date: 2022-07-27 16:11:34
 * @LastEditors: cxw
 * @LastEditTime: 2022-07-28 11:54:33
 * @Description:
 *
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[chunkhash:8].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [autoprefixer({}), "postcss-preset-env"],
          //     },
          //   },
          // },
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/i,
        loader: "url-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "file-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: { "@": path.resolve(__dirname, "../src") },
  },
};
