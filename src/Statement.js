"strict mode";

(function(exports) {

  function Statement(account) {
    this.account = account;
  }

  Statement.prototype.printStatementHeaders = function () {
    return "date || credit || debit || balance";
  };

  exports.Statement = Statement;

})(this);
