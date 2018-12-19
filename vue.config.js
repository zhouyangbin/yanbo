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
    function generateLoaders(loader) {
      config.module
        .rule(loader)
        .oneOf("vue")
        .use("px2rem-loader")
        .loader("px2rem-loader")
        .before("postcss-loader")
        .options({
          remUnit: 75
        })
        .end();
      config.module
        .rule(loader)
        .oneOf("normal")
        .use("px2rem-loader")
        .loader("px2rem-loader")
        .before("postcss-loader")
        .options({
          remUnit: 75
        })
        .end();
    }
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
    generateLoaders("css");
    generateLoaders("scss");
    generateLoaders("sass");
  },
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        compressionOptions: { level: 6 }
      })
    ]
  }
};
