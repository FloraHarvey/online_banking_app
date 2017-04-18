"strict mode";

(function(exports) {

  function Transaction(amount) {
    this.amount = amount;
    this.date = new Date();
  }


  exports.Transaction = Transaction;

})(this);
