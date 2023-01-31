'use strict';

// function caldAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// caldAge(1991);

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   caldAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.caldAge();

// const addExpr = function (a, b) {
//   let sum = 0;
//   let args = Array.from(arguments);
//   // console.log(typeof arguments);
//   // console.log(arguments[3]);
//   args.forEach(arg => {
//     sum += arg;
//   });
//   // for (let i = 0; i < arguments.length; i++) {
//   //   sum += arguments[i];
//   // }
//   console.log(sum);
// };

// addExpr(2, 5, 4, 10, 16);

// copying objects (shallow copy)

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy);
