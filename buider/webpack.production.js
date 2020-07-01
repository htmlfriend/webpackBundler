const MiniCsssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCsssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new MiniCsssExtractPlugin()],
});
