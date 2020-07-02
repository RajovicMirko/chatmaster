export const Loader = ((global) => {
  const bodyDiv = global.body;
  const loaderPage = global.createElement('div');
  const loaderCenter = global.createElement('div');
  loaderPage.classList = 'loader-page';
  loaderCenter.classList = 'loader';
  loaderPage.appendChild(loaderCenter)

  function start(){
    bodyDiv.appendChild(loaderPage)
  }

  function end(){
    bodyDiv.removeChild(loaderPage);
  }

  return{
    start,
    end
  }
})(document);