'use strict';

(app => {

  const accounts = [
    {
      id: '123456',
      name: 'My account',
      type: 'Savings account',
      transactions: [
        { amount: 100 },
        { amount: -100 },
        { amount: 200 },
        { amount: 150 },
        { amount: -1000 },
      ],
    }
  ];

  app.AccountService = ng.core
    .Injectable()
    .Class({
      constructor: function constructor() {
        this.accounts = accounts;
      },

      getAccount: function getAccount(id) {
        const account = this.accounts[0];
        return {
          id: account.id,
          name: account.name,
          type: account.type,
          balance: this.getBalance(id),
        };
      },

      getBalance: function getBalance(id) {
        const account = this.accounts[0];
        return account.transactions.reduce((acc, t) => acc + t.amount, 0);
      },

      getTransactions: function getBalance(id) {
          const account = this.accounts[0];
          return account.transactions;
      }

      // getAccounts: function getAccounts() {
      //   return this.accounts;
      // },
    });
})(window.app || (window.app = {}));
