module.exports = {
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