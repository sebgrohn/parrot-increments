'use strict';

(app => {
  app.AccountComponent = ng.core
    .Component({
      selector: 'my-account',
      templateUrl: 'app/account.component.html',
      viewProviders: [app.AccountService],
    })
    .Class({
      constructor: [app.AccountService, function(accountService) { //
        const account = accountService.getAccount(0);

        this.name = account.name;
        this.balance = account.balance;
        this.type = account.type;
        this.id = account.id;
      }],
    });
})(window.app || (window.app = {}));
