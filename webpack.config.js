const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MODE = "development"

module.exports + {
  // entry
  entry: `./src/index.js`,
  // outputs
  output: {
    path: `${__dirname}/public`,
    filename: `bundle.js`,
  },
  mode: MODE,
  devServer: {
    contentBase: "dist",
    open: true,
  },
  module: {
    rules: [
      {
        // sass or scss or css
        test: /\.(sass | scss | css)$/,
        exclude: /node_module/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /.html$/,
        loader: "html-loader",
      },
    ],
  },
};