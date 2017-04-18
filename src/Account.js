"strict mode";

(function(exports) {

  function Account() {
    this.balance = 0;
    this.transactions = [];
  }

  Account.prototype.deposit = function (amount) {
    var transaction = new Transaction(amount);
    this.transactions.push(transaction);
    this._incrementBalance(amount);
  };

  Account.prototype._incrementBalance = function (amount) {
    this.balance += amount;
  };


  exports.Account = Account;

})(this);
