const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const isDev = process.env.NODE_ENV === "development";

const defaultPlugin = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../public/index.html"),
  }),
];

const devServer = {
  open: true,
  port: 8888,
  compress: true,
  hot: true,
};

let config = {};

if (isDev) {
  config = merge(baseConfig, {
    mode: "development",
    output: {
      filename: "bundle-[name].js",
    },
    devServer,
    plugins: [...defaultPlugin],
  });
} else {
  config = merge(baseConfig, {
    mode: "production",
    output: {
      filename: "bundle-[name].min.js",
      path: path.resolve(__dirname, "../dist"),
    },
    plugins: [...defaultPlugin],
  });
}

console.log(config)

module.exports = config;
