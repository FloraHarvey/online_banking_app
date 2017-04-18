"strict mode";

(function(exports) {

  function Account() {
    this._balance = 0;
    this._transactions = [];
  }

  Account.prototype.deposit = function (amount) {
    this._saveTransaction(amount);
    this._incrementBalance(amount);
  };

  Account.prototype.withdraw = function (amount) {
    this._saveTransaction(-Math.abs(amount));
    this._decrementBalance(amount);
  };

  Account.prototype._saveTransaction = function (amount) {
    var transaction = new Transaction(amount);
    this._transactions.push(transaction);
  };

  Account.prototype._incrementBalance = function (amount) {
    this._balance += amount;
  };

  Account.prototype._decrementBalance = function (amount) {
    this._balance -= amount;
  };

  exports.Account = Account;

})(this);
