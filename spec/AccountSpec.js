"strict mode";

describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("initially has a balance of 0", function() {
    expect(account._balance).toEqual(0);
  });

  it("initially has an empty transaction history", function() {
    expect(account._transactions.length).toEqual(0);
  });

  describe("depositing", function() {
    it("adds the deposited amount to the account balance", function() {
      account.deposit(10);
      expect(account._balance).toEqual(10);
    });

    it("saves the transaction to the transaction history", function() {
      account.deposit(10);
      expect(account._transactions[0].amount).toEqual(10);
    });
  });

  describe("withdrawing", function() {
    it("minuses the withdrawn amount from the account balance", function() {
      account.deposit(100);
      account.withdraw(10);
      expect(account._balance).toEqual(90);
    });

    it("saves the transaction to the transaction history", function() {
      account.deposit(100);
      account.withdraw(10);
      expect(account._transactions[1].amount).toEqual(-10);
    });
  });

  describe("viewingStatement", function() {
    it("creates a new statement passing in itself", function() {
      account.deposit(100);
      account.withdraw(10);
      expect(account.generateStatement()).toEqual("date || credit || debit || balance\n04/18/2017 ||   || 10.00 || 90.00\n04/18/2017 || 100.00 ||   || 100.00\n");
    });
  });

});
