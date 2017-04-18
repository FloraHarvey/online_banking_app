"strict mode";

describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction(100);
  });

  it("takes an amount as a parameter", function() {
    expect(transaction.amount).toEqual(100);
  });

});
