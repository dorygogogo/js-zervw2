function getFullName(firstName, lastName, callbackFunc) {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
  callbackFunc(fullName);
}

function displayFunction(fullName) {
  console.log('displayFunction is called', fullName);
}

//anonymous function // 匿名函数

getFullName('steven123', 'zhao', function (fullName) {
  console.log('one function is called', fullName);
});

const people = [
  { firstName: 'Junkai', lastName: 'Wang', age: 18 },
  { firstName: 'Yuan', lastName: 'Wang', age: 19 },
  { firstName: 'Qianxi', lastName: 'Yiyang', age: 20 },
  { firstName: 'Kris', lastName: 'Wu', age: 25 },
];

// for (let i = 0; i < people.length; i++) {
//   const person = people[i];
//   const fullName = `${person.firstName} ${person.lastName}`;
//   console.log(fullName, person.age);
// }

function forEach(array, callbackFunc) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    callbackFunc(item, i, array);
  }
}

people.forEach(function (person, index, originalArray) {
  // console.log('forEach callback is called', person, index, originalArray);
  const fullName = `${person.firstName} ${person.lastName}`;
  console.log(fullName, person.age);
});

/*

Filtering

Before 
[
  { firstName: 'Junkai', lastName: 'Wang', age: 18 },
  { firstName: 'Yuan', lastName: 'Wang', age: 19 },
  { firstName: 'Qianxi', lastName: 'Yiyang', age: 20 },
  { firstName: 'Kris', lastName: 'Wu', age: 25 },
];

After
[
  { firstName: 'Junkai', lastName: 'Wang', age: 18 },
  { firstName: 'Yuan', lastName: 'Wang', age: 19 },
  { firstName: 'Qianxi', lastName: 'Yiyang', age: 20 },
];
*/

// const peopleUnder23 = [];
// for (let i = 0; i < people.length; i++) {
//   const person = people[i];
//   if (person.age <= 23) {
//     peopleUnder23.push(person);
//   }
// }

// console.log('peopleUnder23', peopleUnder23);

const peopleUnder23 = people.filter(function (person, index, originalArray) {
  console.log('filter function is called');
  // if (person.age <= 23) {
  //   return true;
  // } else {
  //   return false;
  // }
  return person.age <= 23;
});
console.log('peopleUnder23', peopleUnder23);
//Create your own filter function

/*
 Mapping / 映射
  before: [
    { firstName: 'Junkai', lastName: 'Wang', age: 18 },
    { firstName: 'Yuan', lastName: 'Wang', age: 19 },
    { firstName: 'Qianxi', lastName: 'Yiyang', age: 20 },
  ]

  after: [
    'Junkai wang',
    'Yuan wang',
    'Qianxi Yiyang',
  ]
*/

// const fullNames = [];
// for (let i = 0; i < peopleUnder23.length; i++) {
//   const person = peopleUnder23[i];
//   const fullName = `${person.firstName} ${person.lastName}`;
//   fullNames.push(fullName);
// }
// console.log(fullNames);

const fullNames = peopleUnder23.map(function (person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  return fullName;
});

console.log(fullNames);

/*
 before: [
   "Junkai Wang",
   "Yuan Wang",
   "Qianxi Yiyang"
  ]

  after: 'TF boys are: Junkai Wang, yuan Wang, Qianxi Yiyang'
*/

// let resultStr = 'TF boys are:';
// for (let i = 0; i < fullNames.length; i++) {
//   const fullName = fullNames[i];
//   // resultStr = resultStr + fullName + ', ';
//   resultStr = `${resultStr} ${fullName}, `;
// }
// console.log(resultStr);

const finalResult = fullNames.reduce(function (
  acc,
  fullName,
  index,
  originalArray
) {
  console.log('acc', acc);
  // acc = acc + fullName + ', ';
  acc = `${acc} ${fullName}, `;
  return acc;
},
'TF boys are:');

console.log(finalResult);

//Chainable
const finalStr = people
  .filter(function (person) {
    return person.age <= 23;
  })
  .map(function (person) {
    return `${person.firstName} ${person.lastName}`;
  })
  .reduce(function (acc, fullName, index, originalArray) {
    acc = `${acc} ${fullName}, `;
    return acc;
  }, 'TF boys are:');

console.log('finalStr', finalStr);

// Implement a bill calculator

// Each bill is an object that has prices and taxRate
// { prices: [5, 15, 33], taxRate: 1.13}
// a bill subtotal is (sum of prices) * taxRate

//should have a getSubTotal function

// should have a calcTips function that
// if a bill is less than 30, return 0
// if a bill is greater than or equal to 30 and less than 300,return bill subTotal * 0.1
// if a bill is greater than or equal to 300, return subTotal * 0.25;

// The bill calculator should take an array of bills as input and return the array of total(billSubtotal + tip);
// The bill calculator function should be named as `billCalculator`

const bills = [
  { prices: [5, 15, 33], taxRate: 1.13 },
  { prices: [3], taxRate: 1.15 },
  { prices: [150, 77, 68], taxRate: 1.05 },
];

function sum(numArr) {
  // let result = 0;
  // for (let i = 0; i < numArr.length; i++) {
  //   const num = numArr[i];
  //   result += num;
  // }
  // return result;
  return numArr.reduce(function (acc, num) {
    acc += num;
    return acc;
  }, 0);
}

function getSubTotal(bill) {
  const pricesTotal = sum(bill.prices);

  return pricesTotal * bill.taxRate;
}

function calcTips(total) {
  if (total < 30) {
    return 0;
  } else if (total >= 30 && total < 300) {
    return total * 0.1;
  } else {
    return total * 0.25;
  }
}

function billCalculator(bills) {
  // let result = 0;
  // for (let i = 0; i < bills.length; i++) {
  //   const bill = bills[i];
  //   const subTotal = getSubTotal(bill);
  //   const tips = calcTips(subTotal);
  //   const total = subTotal + tips;
  //   result += total;
  // }

  const billTotalArr = bills.map(function (bill) {
    const subTotal = getSubTotal(bill);
    const tips = calcTips(subTotal);
    const total = subTotal + tips;
    return total;
  });

  return sum(billTotalArr);

  // return bills.reduce(function (acc, bill) {
  //   const subTotal = getSubTotal(bill);
  //   const tips = calcTips(subTotal);
  //   const total = subTotal + tips;
  //   acc += total;
  //   return acc;
  // }, 0);

  // return result; //number
}

console.log(billCalculator(bills));

/*
find intersection
*/
const nArrays = [
  [1, 2, 3, 5, 6, 8],
  [2, 3, 4, 6, 8],
  [9, 2, 3, 5, 6],
];

// initial  -> {}

// {
//   1: 1,
//   2: 3,
//   3: 3,
//   4: 1,
//   5: 2,
//   6: 3,
//   8: 2,
//   9: 1
// }

function findIntersection(nArrays) {
  let freqTable = {};
  nArrays.forEach(function (array) {
    array.forEach(function (num) {
      if (freqTable[num] !== undefined) {
        freqTable[num] += 1;
      } else {
        freqTable[num] = 1;
      }
    });
  });
  const result = Object.keys(freqTable)
    .filter(function (key) {
      const freqCount = freqTable[key];
      if (freqCount === nArrays.length) {
        return true;
      } else {
        return false;
      }
    })
    .map(function (key) {
      return Number(key);
    });
  return result;
}

console.log(findIntersection(nArrays));
