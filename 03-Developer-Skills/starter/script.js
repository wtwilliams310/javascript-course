// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperatture amplitude. Keep in mind that sometimes ther might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplituede? Answer: difference between highest and lowest temp
// - How to compute mas and mon temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sup-problems
// - How to ignore errors?
// - Find max value in temp array?
// - Find min value in temp array?
// - Subtract min from max temp?
// - Return result?

// 3) Write pseudo-code
// function temp(array)
// loop through array
// if typeof element is string push to empty array
// use reduce method to compare each element of array to find least push leastGreatest array
// use reduce method to find greatest then push to leastGreatest array
// subtrach index 0 from index 1
// return result

const emptyArray = [];

const minTemps = array => {
  array.forEach(number => {
    if (typeof number !== 'string') emptyArray.push(number);
  });

  const min = emptyArray.reduce((a, b) => (a < b ? a : b));

  const max = emptyArray.reduce((a, b) => (a > b ? a : b));

  return max - min;
};

console.log(minTemps(temperatures));

// Problem 2:
// Function should now receive 2 arrays of temps

const array1 = [2, 4, 1, 16, 'error'];
const array2 = [5, 4, 1, 16, 'error'];

const array3 = array1.concat(array2);

console.log(array3);
