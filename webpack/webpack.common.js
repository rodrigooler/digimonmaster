const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: Path.resolve(__dirname, "../src/scripts/index.js"),
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, "../public"), to: "public" },
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/index.html"),
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/news.html"),
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/media.html"),
      filename: "media.html",
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/download.html"),
      filename: "download.html",
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/news-page.html"),
      filename: "news-page.html",
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/media-page.html"),
      filename: "media-page.html",
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/support.html"),
      filename: "support.html",
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, "../src/signup.html"),
      filename: "signup.html",
    }),
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
};
