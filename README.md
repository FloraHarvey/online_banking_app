## Bank

## Product Requirements

- Deposits, withdrawal
- Account statement (date, amount, balance)
- Statement printing

## User Stories

```
As a customer,
So I can save money
I want to deposit it in my account

As a customer,
So I can spend money
I want to withdraw it from my account

As a customer,
So I know how much money I have
I want to see my current balance

As a customer,
So I can see my spending
I want to see a list of transactions

As a customer,
So I can understand my statement
I want to see the date on which transactions took place
```

## My Approach

- First I created user stories based on the product requirements specified
- Next, I considered the design of the programme - my model will have an Account object that will save an array of Transaction objects. The Account will have a balance property, and functions to make deposits/withdrawals, and save the transactions to the account history. Each Transaction object will have properties amount and date. I will probably later on extract the responsibility printing of the statement to a Printer class.

## Technologies used
- Javascript
- Jasmine for testing

## How to use
- Clone this repo
- Run SpecRunner.js in Chrome to view tests
- Open console to interact with the application
- Copy/paste the following commands in console to view an example bank statement
```
account = new Account();
account.deposit(1000);
account.deposit(2000);
account.withdraw(500);
account.generateStatement();
```

## Further improvements
- To extend this code, I would add a controller that would send requests to the Account and Statement models (for example, I would move the generateStatement function out of the Account and into a controller, so that the Account does not need to deal with the Statement class)
- Although a user interface was not part of the spec, it could easily be implemented, with buttons that when clicked would call the deposit, withdraw, and generateStatement functions via the controller.
- Some of the Statement functions are rather fiddly in order to print blank cells, pipes and spacing to the console. I would prefer to move functions to generate an HTML table into a View, if there were a user interface.
