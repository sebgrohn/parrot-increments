'use strict';

(app => {
  app.TransactionsComponent = ng.core
    .Component({
      selector: 'my-transactions',
      templateUrl: 'app/transactions.component.html',
      viewProviders: [app.AccountService],
    })
    .Class({
      constructor: [app.AccountService, function(accountService) {
        this.transactions = accountService.getTransactions(0);
      }],
    });
})(window.app || (window.app = {}));
