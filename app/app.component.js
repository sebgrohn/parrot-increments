'use strict';

(app => {
  app.AppComponent = ng.core
    .Component({
      selector: 'my-app',
      templateUrl: 'app/app.component.html',
      directives: [app.AccountComponent, app.TransactionsComponent],
    })
    .Class({
      constructor: function constructor() {},
    });
})(window.app || (window.app = {}));
