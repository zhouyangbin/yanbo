const path = require("path");
const projectRoot = path.resolve(__dirname);

const baseURL = process.env.VUE_APP_CDN || "/";

module.exports = {
  publicPath: baseURL,
  productionSourceMap: false,
  devServer: {
    // proxy: "http://api.gamesife.com"
<<<<<<< HEAD
    proxy: "https://pingfen-performance-api.chengjiukehu.com"
=======
    // proxy: "https://pingfen-api.chengjiukehu.com"
    proxy: "http://pingfen-executive-api.chengjiukehu.com"
>>>>>>> 63d5506f14f95859dedbc81caa772c22e91904e5
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  }
};
