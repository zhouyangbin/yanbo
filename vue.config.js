const path = require("path");
const projectRoot = path.resolve(__dirname);

const baseURL = process.env.VUE_APP_CDN || "/";

module.exports = {
  publicPath: baseURL,
  productionSourceMap: false,
  devServer: {
    // proxy: "http://api.gamesife.com"
    //proxy: "https://pingfeni-performance-api.chengjiukehu.com"
    //proxy: "http://pingfen.test.com:8080" //张建的开发接口
    //proxy: "https://pingfeni-performance-api-test.chengjiukehu.com" //张建的开发接口
    //proxy: "https:/1pingfen.test.com"
    //proxy: "https://pingfen-performance-api.chengjiukehu.com"
    proxy: "https://pingfen-performance-api-test.chengjiukehu.com"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  }
};
