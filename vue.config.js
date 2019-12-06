const path = require("path");
const projectRoot = path.resolve(__dirname);

const baseURL = process.env.CDN || "/";

module.exports = {
  publicPath: baseURL,
  productionSourceMap: false,
  devServer: {
    // proxy: "http://api.gamesife.com"
    //proxy: "https://pingfen-performance-api.chengjiukehu.com"
    proxy: "https://pingfen-performance-api.chengjiukehu.com"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  }
};
