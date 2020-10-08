/**
 * Chain Of Responsibility Design Pattern [ Very Nice One Commonly Used in Our Development Cycle ]
 * Use Case:
 * Having a Request From Client And Needing This Request
 * Pass Through Multiple Functions Or Logic To Get The Result
 * EX: >> Buy Something Online
 * 1- Logged in
 * 2- Address
 * 3- Calculate Taxes
 * 4- Shipping
 * 5- Process Payment
 * ?? Solution
 *
 * ******  Abstract Handler  *******
 * So The Request Going Through This Abstract Handler
 * 1- Login Handler
 * 2- Check Address Handler
 * 3- Taxes Handler
 * 4- Shipping Handler
 * 5- Payment Process Handler
 */

// 1- We Will Start By MoneyStacks abstract Class
var MoneyStack = function (billSize) {
  this.billSize = billSize;
  this.next = null;
};
MoneyStack.prototype = {
  withdraw: function (amount) {
    var numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
      // Eject the bills
      this._ejectMoney(numOfBills);
      // Shrink the amount by how much money we ejected
      amount = amount - this.billSize * numOfBills;
    }

    // If there is any money left to withdraw and if we have
    // another stack in the line, pass the request on
    amount > 0 && this.next && this.next.withdraw(amount);
  },
  // set the stack that comes next in the chain
  setNextStack: function (stack) {
    this.next = stack;
  },
  // private method that ejects the money
  _ejectMoney: function (numOfBills) {
    console.log(numOfBills + " $" + this.billSize + " bill(s) has/have been spit out");
  },
};
var ATM = function () {
  // Create the stacks of money
  // We'll show you the implementation for this next
  var stack100 = new MoneyStack(100),
    stack50 = new MoneyStack(50),
    stack20 = new MoneyStack(20),
    stack10 = new MoneyStack(10),
    stack5 = new MoneyStack(5),
    stack1 = new MoneyStack(1);

  // Set the hierarchy for the stacks
  stack100.setNextStack(stack50);
  stack50.setNextStack(stack20);
  stack20.setNextStack(stack10);
  stack10.setNextStack(stack5);
  stack5.setNextStack(stack1);

  // Set the top stack as a property
  this.moneyStacks = stack100;
};

ATM.prototype.withdraw = function (amount) {
  this.moneyStacks.withdraw(amount);
};

// USAGE
var atm = new ATM();
atm.withdraw(186);
/* outputs:
  1 $100 bill(s) has/have been spit out
  1 $50 bill(s) has/have been spit out
  1 $20 bill(s) has/have been spit out
  1 $10 bill(s) has/have been spit out
  1 $5 bill(s) has/have been spit out
  1 $1 bill(s) has/have been spit out
*/
atm.withdraw(72);
/* outputs:
  1 $50 bill(s) has/have been spit out
  1 $20 bill(s) has/have been spit out
  2 $1 bill(s) has/have been spit out
*/
