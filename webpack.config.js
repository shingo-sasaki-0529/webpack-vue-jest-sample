const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/js/app.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "src/js")
    }
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: "vue-loader"
      },
      {
        test: /.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
