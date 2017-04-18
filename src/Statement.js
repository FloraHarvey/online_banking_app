"strict mode";

(function(exports) {

  function Statement(account) {
    this.account = account;
  }

  Statement.prototype.printStatementHeaders = function () {
    return "date || credit || debit || balance";
  };

  Statement.prototype.printAllTransactions = function () {
    var balance = this.account._balance;
    var toPrint = "";
    for (var i=this.account._transactions.length; i > 0; i--) {
      var transaction = this.account._transactions[i - 1];
      toPrint += this.printTransactionDetails(transaction) + balance.toFixed(2) + "\n";
      balance -= transaction.amount;
    }
    return toPrint;
  };

  Statement.prototype.printTransactionDetails = function (transaction) {
    var date = this._formatDate(transaction.date);
    return date + this._printCredit(transaction) + this._printDebit(transaction);
  };

  Statement.prototype._printCredit = function (transaction) {
    if (transaction.amount > 0) {
      return " || " + transaction.amount.toFixed(2);
    } else {
      return this._printBlankCell();
    }
  };

  Statement.prototype._printDebit = function (transaction) {
    if (transaction.amount < 0) {
      return Math.abs(transaction.amount).toFixed(2) + " || ";
    } else {
      return this._printBlankCell();
    }
  };

  Statement.prototype._printBlankCell = function () {
    return " ||   || ";
  };

  Statement.prototype._formatDate = function (date) {
    var dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-UK", dateOptions);
  };

  exports.Statement = Statement;

})(this);
