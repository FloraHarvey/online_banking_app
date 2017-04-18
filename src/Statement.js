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
    return date + " ||   || " + transaction.amount.toFixed(2) + " || " + this.account._balance.toFixed(2);
  };

  Statement.prototype._formatDate = function (date) {
    var dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-UK", dateOptions);
  };

  exports.Statement = Statement;

})(this);
