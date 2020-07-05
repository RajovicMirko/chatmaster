const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@c': path.resolve(__dirname, 'src/components'),
        '@a': path.resolve(__dirname, 'src/assets'),
        '@sc': path.resolve(__dirname, 'src/scss'),
        '@st': path.resolve(__dirname, 'src/store'),
        '@v': path.resolve(__dirname, 'src/views'),
        '@l': path.resolve(__dirname, 'src/locals'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData:`
          @import "@/scss/global/_variables.scss";
          @import '@/scss/global/_flex.scss';
          @import '@/scss/global/_display-size-control.scss';
          @import '@/scss/global/_input-button-border.scss';
          @import '@/scss/global/_form.scss';
          @import '@/scss/global/_loaders.scss';
        `
      }
    }
  }
};