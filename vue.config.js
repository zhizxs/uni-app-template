const Timestamp = new Date().getTime();
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack: {
    // output: {
    //   filename: `[name].${process.env.NODE_ENV}.${Timestamp}.js`,
    //   chunkFilename: `[name].${process.env.NODE_ENV}.${Timestamp}.js`
    // }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@style", resolve("src/assets/style"));
    config.resolve.alias.set("@components", resolve("src/components"));
    config.resolve.alias.set("@img", resolve("src/assets/img"));
    config.resolve.alias.set("@com", resolve("src/common"));
  }
};