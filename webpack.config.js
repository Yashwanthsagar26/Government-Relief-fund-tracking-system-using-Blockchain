const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins:
  [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/beneficiaryDetails.html", to: "html/beneficiaryDetails.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/centralGovernment.html", to: "html/centralGovernment.html" }]),
    new CopyWebpackPlugin([{ from: "./src/html/stateGovernment.html", to: "html/stateGovernment.html" }]),
    new CopyWebpackPlugin([{ from: "./src/css/bootstrap.css", to: "css/bootstrap.css" }]),
    new CopyWebpackPlugin([{ from: "./src/css/style.css", to: "css/style.css" }]),

  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};
