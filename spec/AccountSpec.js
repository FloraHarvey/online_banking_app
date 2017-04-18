"strict mode";

describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("initially has a balance of 0", function() {
    expect(account.balance).toEqual(0);
  });

  it("initially has an empty transaction history", function() {
    expect(account.transactions.length).toEqual(0);
  });

  describe("depositing", function() {
    it("adds the deposited amount to the account balance", function() {
      account.deposit(10);
      expect(account.balance).toEqual(10);
    });

    it("saves the transaction to the transaction history", function() {
      account.deposit(10);
      expect(account.transactions[0].amount).toEqual(10);
    });
  });

  describe("withdrawing", function() {
    it("minuses the withdrawn amount from the account balance", function() {
      account.deposit(100);
      account.withdraw(10);
      expect(account.balance).toEqual(90);
    });

    it("saves the transaction to the transaction history", function() {
      account.deposit(100);
      account.withdraw(10);
      expect(account.transactions[1].amount).toEqual(-10);
    });
  });



});
