const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const webpack = require("webpack");
// MODE ? production or development
const MODE = "production";
const enableSourceMap = MODE === "development";

module.exports = {
  // エントリーファイル
  entry: `./src/index.js`,
  // ファイルの出力先
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
  },
  mode: MODE,
  // デベロッパーサーバの設定
  devServer: {
    contentBase: "public",
    open: true,
  },
  module: {
    rules: [
      {
        // sass or scss or css files
        test: /\.(sa|sc|c)ss$/,
        // node_modules は対象外
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              // .css 内でのinport
              url: false,
              // sourceMap の出力
              sourceMap: enableSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            // sass のロード
            loader: "sass-loader",
            options: {
              // sourceMap の 出力
              sourceMap: enableSourceMap,
            },
          },
        ],
      },
      {
        // html ファイルを対象とする
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
            },
          },
          {
            loader: 'image-webpack-loader',
          }
        ],
      },
    ],
  },
  plugins: [
    // CSSファイルを外に置く処理
    new MiniCssExtractPlugin({
      // ファイル名の指定
      filename: "style.css",
    }),
    // html をsrcからdistに移す処理
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: './src/img/favicon.svg',
      cache: true,
      prefix: 'assets/',
    })
  ],
};