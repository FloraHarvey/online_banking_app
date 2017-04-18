"strict mode";

describe("Statement", function() {
  var statement;
  var dummyAccount;

  beforeEach(function() {
    dummyAccount = jasmine.createSpyObj('dummyAccount', ['_transactions', '_balance']);
    statement = new Statement(dummyAccount);
  });

  it("takes an account on initialization", function() {
    expect(statement.account).toEqual(dummyAccount);
  });

  describe("viewing statement", function() {
    it("prints table header for transaction history", function() {
      expect(statement.printStatementHeaders()).toEqual("date || credit || debit || balance");
    });

  });


});
