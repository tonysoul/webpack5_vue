const path = require("path");

module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024 * 4,
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".vue"],
  },
};
