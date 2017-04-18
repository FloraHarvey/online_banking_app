"strict mode";

describe("Statement", function() {
  var statement;
  var dummyAccount;
  var dummyCreditTransaction;
  var dummyDebitTransaction;

  beforeEach(function() {
    dummyCreditTransaction = {
      'amount': 100,
      'date': new Date()
    };
    dummyDebitTransaction = {
      'amount': -10,
      'date': new Date()
    };
    dummyAccount = {
      '_transactions': [dummyCreditTransaction, dummyDebitTransaction],
      '_balance': 90
    };
    statement = new Statement(dummyAccount);
  });

  it("takes an account on initialization", function() {
    expect(statement.account).toEqual(dummyAccount);
  });

  describe("viewing statement", function() {
    var date;
    var dateOptions;
    var formattedDate;

    beforeEach(function() {
      date = new Date();
      dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
      formattedDate = date.toLocaleDateString("en-UK", dateOptions);
    });

    it("prints table header for transaction history", function() {
      expect(statement.printStatementHeaders()).toEqual("date || credit || debit || balance");
    });

    it("prints details for a single positive transaction", function() {
      expect(statement.printTransactionDetails(dummyCreditTransaction)).toEqual(formattedDate + " || 100.00 ||   || ");
    });

    it("prints details for a single negative transaction", function() {
      expect(statement.printTransactionDetails(dummyDebitTransaction)).toEqual(formattedDate + " ||   || 10.00 || ");
    });

    it("prints details for list of transactions", function() {
      expect(statement.printAllTransactions()).toEqual(formattedDate + " ||   || 10.00 || 90.00\n" + formattedDate + " || 100.00 ||   || 100.00\n");
    });

  });


});
