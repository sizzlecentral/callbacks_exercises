var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/
var numSales = 0;

var filterSales = transactions.filter(isSale);

function isSale(transaction) {
  if (transaction.type === 'sale') {
    numSales++;
  }
}

console.log( 'The total number of sales is:', numSales );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
var numPurchases = 0;

var filterPurchases = transactions.filter(isPurchase);

function isPurchase(transaction) {
  if (transaction.type === 'purchase') {
    numPurchases++;
  }
}

console.log( 'The total number of purchases is:', numPurchases );


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/
var numCashSales = 0;

var filterCashSales = transactions.filter(isCashSale);

function isCashSale(transaction) {
  if (transaction.paymentMethod === 'cash') {
    numCashSales++;
  }
}

console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/
var numCreditPurchases = 0;

var filterCreditPurchases = transactions.filter(isCreditPurchase);

function isCreditPurchase(transaction) {
  if (transaction.paymentMethod === 'credit' && transaction.type === 'purchase') {
    numCreditPurchases++;
  }
}

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
var uniqueVendors = [];

transactions.filter(hasVendor);

function hasVendor(transaction) {
  if (transaction.vendor != undefined) {
    uniqueVendors.push(transaction.vendor);
  }
}

console.log( 'The unique vendors are:', uniqueVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/
var uniqueCustomers = [];
var customers = [];

transactions.filter(isCustomer);
customers.filter(isUnique);

function isCustomer(transaction) {
  if (transaction.customer != undefined) {
    customers.push(transaction.customer);
  }
}

function isUnique(name, index, array) {
  if (array.indexOf(name) === index) {
    uniqueCustomers.push(name);
  }
}

console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/
var bigSpenders = [];
custID = 0;

transactions.filter(isBigSpender);

function isBigSpender(transaction) {
  if (transaction.items.length >= 5) {
    custID++;
    numItems = transaction.items.length + ' items';
    custName = 'Big Spender ' + custID;
    bigSpenders.push(custName, numItems);
  }
}

console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/

var allSales = transactions.filter(isSale);
var items = allSales[0]['items'];

var sumSales = items.reduce(function(sum, item) {
  return sum + item['price'];
}, 0);

function isSale(transaction) {
  if (transaction.type === 'sale') {
    return true;
  }
}

console.log( 'The sum of all items in the first sale is: $', sumSales );


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

var sumPurchases = isPurchase(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isPurchase(transactions) {
  var purchases = [];
  for (var b = 0; b < transactions.length; b++) {
  if (transactions[b].type === 'purchase') {
    for (var i = 0; i < transactions[b].items.length; i++) {
      purchases.push(transactions[b].items[i].price);
    }
  }
}
  return purchases;
}

console.log( 'The sum of all purchases is: $', sumPurchases );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/

var totalPurchases = isAPurchase(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isAPurchase(transactions) {
  var purchases = [];
  for (var b = 0; b < transactions.length; b++) {
  if (transactions[b].type === 'purchase') {
    for (var i = 0; i < transactions[b].items.length; i++) {
      purchases.push(transactions[b].items[i].price);
    }
  }
}
  return purchases;
}

var totalSales = isASale(transactions).reduce(function(sum, value) {
  return sum + value;
}, 0);

function isASale(transactions) {
  var sales = [];
  for (var b = 0; b < transactions.length; b++) {
  if (transactions[b].type === 'sale') {
    for (var i = 0; i < transactions[b].items.length; i++) {
      sales.push(transactions[b].items[i].price);
    }
  }
}
  return sales;
}

var netProfit = totalSales + totalPurchases;

console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/

function doStuff(highest, transaction) {
  var numItems = transaction['items'].length;
  if (numItems > highest) {
    return numItems;
  } else {
    return highest;
  }
}

var mostItems = transactions.reduce(doStuff, 0);

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
  Copied Jenni's answer, thanks Jenni.
*/

function leastItems(array) {
  var leastCount = 0;
  for (var index = 0; index < array.length; index++) {
    if (leastCount === 0) {
      leastCount = array[index];
    } else if (leastCount >= array[index].length) {
      leastCount = array[index];
    }
  }
  return leastCount;
}

var sumOfSmallestPurchase = transactions.filter(filterPurchases).map(mapTransactionsItems);

console.log( 'The sum of the smallest purchase is:', leastItems(sumOfSmallestPurchase).map(getPrices).reduce(getSum) );
