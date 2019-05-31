const path = require("path");
const projectRoot = path.resolve(__dirname);

module.exports = {
  // baseUrl: "/",
  productionSourceMap: false,
  devServer: {
    // proxy: "http://api.gamesife.com"
    proxy: "https://api.pingfen.chengjiukehu.com"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@assets", path.join(projectRoot, "src/assets"));
  }
};
