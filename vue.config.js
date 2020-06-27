module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:`
          @import "@/scss/global/_variables.scss";
          @import '@/scss/global/_flex.scss';
          @import '@/scss/global/_display-size-control.scss';
        `
      }
    }
  }
};