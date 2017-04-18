"strict mode";

(function(exports) {

  function Statement(account) {
    this.account = account;
  }

  Statement.prototype.printStatementHeaders = function () {
    return "date || credit || debit || balance";
  };

  Statement.prototype.printTransactionDetails = function (transaction) {
    var date = this._formatDate(transaction.date);
    return date + this._printCredit(transaction) + this._printDebit(transaction) + this.account._balance.toFixed(2);
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
