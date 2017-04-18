"strict mode";

describe("Statement", function() {
  var statement;
  var dummyAccount;
  var dummyTransaction;

  beforeEach(function() {
    dummyTransaction = {
      'amount': 100,
      'date': new Date()
    };
    dummyAccount = {
      '_transactions': [dummyTransaction],
      '_balance': 100
    };
    statement = new Statement(dummyAccount);
  });

  it("takes an account on initialization", function() {
    expect(statement.account).toEqual(dummyAccount);
  });

  describe("viewing statement", function() {
    it("prints table header for transaction history", function() {
      expect(statement.printStatementHeaders()).toEqual("date || credit || debit || balance");
    });

    it("prints details for a single transaction", function() {
      var date = new Date();
      var dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
      var formattedDate = date.toLocaleDateString("en-UK", dateOptions);
      expect(statement.printTransactionDetails(dummyTransaction)).toEqual(formattedDate + " ||   || 100.00 || 100.00");
    });

  });


});
