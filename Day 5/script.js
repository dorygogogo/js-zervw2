// String
console.log('hello world'); // single quote
console.log('hello world'); // double quote
console.log(`hello world`);

// Number
console.log(99, 99.99, -1);
console.log(1 + 2);
console.log(1 - 2);
console.log(4 * 2);
console.log(10 / 5);
console.log(10 / 0);

// Boolean
console.log(true);
console.log(false);

// null / undefined
console.log(null);
console.log(undefined);

// NaN, Not a number
console.log(1 * 'a', NaN);

// Variable
const name = 'Steven'; // Cannot re-assign value later
let age = 25; // Can re-assign value later
// var age = 25; // legacy syntax, not use

console.log(age);
// name = 'steven2';
age = 28;
console.log(age);

// String concat
const firstName = 'Steven';
const lastName = 'Zhao';
// const fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName}'s age is ${age}`;

console.log('full name:', fullName);

// logic operator
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!true);
console.log(!false);

// comparasion
console.log('---comparasion----');
console.log(3 > 2);
console.log(3 < 2);
console.log(2 <= 2);

console.log(firstName === 'Steven');
console.log(1 === '1');
// console.log(1 == '1'); // NEVER USE ==

// Control flow
if (age === 26 || age === 28) {
  console.log('the age is 26 or 28');
} else if (age === 28) {
  console.log('the age is 28');
} else if (age === 30) {
  console.log('the age is 30');
} else {
  console.log('the age is not 26');
}

// Switch
const day = 'Tuesday';

switch (day) {
  case 'Monday':
    console.log('it is Monday');
    break;
  case 'Tuesday':
    console.log('it is Tuesday');
    break;
  default:
    console.log('It is other day');
}

// Ternary operator

// let count = 0;
// if (day === 'Monday') {
//   count = 1;
// } else {
//   count = 2;
// }

let count = day === 'Monday' ? 1 : 2;

console.log(count);

// Variable Naming convention
const myCurrentAddress = '123, Canada'; // CamelCase To define a regular variable
const MY_CONSTANT_VALUE = 3.1415926; // To define a constant value
const MyClass = 'my-class'; // PascalCase to define a Class

// i++ equals to
// i = i + 1

console.log('----loops----');
// for loop
console.log(' for loop');
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // break;
    continue;
  }
  console.log('i', i);
}

console.log('while loop');
let n = 0;
while (n < 7) {
  console.log('while loop n', n);
  n++;
}

let m = 0;
do {
  console.log('do while loop', m);
  m++;
} while (m < 7);

// Function
function getFullName(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  console.log(`getFullname is called ${fullName}`);
  return fullName;
}

const fullName1 = getFullName('Steven', 'Zhao');
const fullName2 = getFullName('Steven', 'Lim');
const fullname3 = getFullName('Wendy', 'Feng');
console.log(fullName1, fullName2, fullname3);

// Array
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
const firstElement = array1[5];
console.log(firstElement);
array1[6] = 99;
console.log(array1);
console.log(array1.length);

// 遍历 // iterate 挨个访问
for (let i = 0; i < array1.length; i++) {
  const item = array1[i];
  console.log(i, item);
}
// for (let item of array1) {
//   console.log(item);
// }

array1.push(6);
console.log(array1);
array1.unshift(-1);
console.log(array1);
const popedValue = array1.pop();
console.log(array1, popedValue);
const shiftedValue = array1.shift();
console.log(array1, shiftedValue);

// Object / key-value pair
const person = {
  firstName: 'Steven',
  lastName: 'Zhao',
  age: 25,
  eat: function (food) {
    console.log(`eat ${food}`);
  },
  hobbies: ['football', 'baseball', 'basketball'],
  address: {
    street: '123 street',
    phone: {
      model: 'iphone',
      number: '12345',
    },
  },
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

person.firstName = 'Dory';
console.log(person);
person.eat('burger');
person.eat('bbq');

const key = 'firstName';

console.log(person[key], person.firstName);

console.log(person.hobbies[2]);

console.log(person.address.phone.number);
