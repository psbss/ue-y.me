const { defineConfig } = require("@vue/cli-service");
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/common.scss";',
      },
    },
  },
};
