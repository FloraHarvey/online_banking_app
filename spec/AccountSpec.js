"strict mode";

describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("initially has a balance of 0", function() {
    expect(account.balance).toEqual(0);
  });

});
