
// let js = "amazing"
// console.log(40 + 20 * 2 / 3)

// let firstName = 'Jonas'

// console.log(firstName);

// console.log(js);


/*
let country = 'United States'
let continent = 'North America'
let population = 332000000

// console.log(country, continent);

let javascriptIsFun = true
// console.log(typeof javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof javascriptIsFun);


let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
*/

/*
const now = 2037;
const ageTitus = now - 1976;

console.log(ageTitus);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
*/

//Coding Challenge #1

let weightMarkData1 = 78;
let weightJohnData1 = 92;
let heightMarkData1 = 1.69;
let heightJohnData1 = 1.95;

let weightMarkData2 = 95;
let weightJohnData2 = 85;
let heightMarkData2 = 1.88;
let heightJohnData2 = 1.76;

const bmi = (mass, height) => {
    return (mass / (height ** 2)).toFixed(2)
}

let bmiMarkData1 = bmi(weightMarkData1, heightMarkData1);
console.log(bmiMarkData1);

let bmiMarkData2 = bmi(weightMarkData2, heightMarkData2);
console.log(bmiMarkData2);


let bmiJohnData1 = bmi(weightJohnData1, heightJohnData1);
console.log(bmiJohnData1);

let bmiJohnData2 = bmi(weightJohnData2, heightJohnData2);
console.log(bmiJohnData2);

const markHigherBMIData1 = bmiMarkData1 > bmiJohnData1
console.log(markHigherBMIData1);

const markHigherBMIData2 = () => bmiMarkData2 > bmiJohnData2
console.log(markHigherBMIData2());

// let bmiMarkData2 = weightMarkData2 / (heightMarkData2 ** 2);

// let bmiMarkData1 = weightMarkData1 / (heightMarkData1 ** 2);
// let bmiMarkData2 = weightMarkData2 / (heightMarkData2 ** 2);

// let bmiJohnData1 = weightJohnData1 / (heightJohnData1 ** 2);
// let bmiJohnData2 = weightJohnData2 / (heightJohnData2 ** 2);


