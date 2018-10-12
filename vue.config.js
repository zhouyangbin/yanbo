const path = require("path");
const projectRoot = path.resolve(__dirname);
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  // baseUrl: "/",
  productionSourceMap: false,
  devServer: {
    // proxy: "http://api.gamesife.com"
    proxy: "http://test-pingfen-api.100tal.com"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
        compressionOptions: { level: 6 }
      })
    ]
  }
};
