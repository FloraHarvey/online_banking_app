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
- I will later implement a controller to deal with messaging to the model
