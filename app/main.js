(app => {
  document.addEventListener('DOMContentLoaded', () => {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
