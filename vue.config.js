const path = require("path");
const projectRoot = path.resolve(__dirname);

const baseURL = process.env.VUE_APP_CDN || "/";

module.exports = {
  publicPath: baseURL,
  productionSourceMap: false,
  devServer: {
    // proxy: "http://api.gamesife.com"
    // proxy: "https://pingfen-api.chengjiukehu.com"
    proxy: "http://pingfen-executive-api.chengjiukehu.com/"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  }
};
