
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
// console.log(bmiMarkData1);

let bmiMarkData2 = bmi(weightMarkData2, heightMarkData2);
// console.log(bmiMarkData2);


let bmiJohnData1 = bmi(weightJohnData1, heightJohnData1);
// console.log(bmiJohnData1);

let bmiJohnData2 = bmi(weightJohnData2, heightJohnData2);
// console.log(bmiJohnData2);

const markHigherBMIData1 = bmiMarkData1 > bmiJohnData1
// console.log(markHigherBMIData1);

const markHigherBMIData2 = () => bmiMarkData2 > bmiJohnData2
// console.log(markHigherBMIData2());

// let bmiMarkData2 = weightMarkData2 / (heightMarkData2 ** 2);

// let bmiMarkData1 = weightMarkData1 / (heightMarkData1 ** 2);
// let bmiMarkData2 = weightMarkData2 / (heightMarkData2 ** 2);

// let bmiJohnData1 = weightJohnData1 / (heightJohnData1 ** 2);
// let bmiJohnData2 = weightJohnData2 / (heightJohnData2 ** 2);

//Coding Challenge #2

const whoHasHigherBMI = (mark, john) => {
    return mark > john ? `Mark's BMI is higher than John's!` : `John's BMI is higher than Mark's`
}

// console.log(whoHasHigherBMI(bmiMarkData1, bmiJohnData1));
// console.log(whoHasHigherBMI(bmiMarkData2, bmiJohnData2));

const inputYear = '1991'
// console.log(Number(inputYear), inputYear);

// console.log('1' + 1);


//Coding Challenge #3

const dolphinsTotalScore = 96 + 108 + 89;
const koalasTotalScore = 88 + 91 + 110;

const dolphinsTotalScoreBonus1 = 97 + 112 + 101;
const koalasTotalScoreBonus1 = 109 + 95 + 123;

const dolphinsTotalScoreBonus2 = 97 + 112 + 101;
const koalasTotalScoreBonus2 = 109 + 95 + 106;




const message = 'won the tournament!';
const team1 = 'Dolphins';
const team2 = 'Koalas';

const dolphinsAverage = (total) => total / 3;

const koalasAverage = (total) => total / 3;


/*
function tournamentResults() {
    if (dolphinsAverage(dolphinsTotalScore) === koalasAverage(koalasTotalScore)) {
        return `The tournament is a draw!`;
    } else if (dolphinsAverage(dolphinsTotalScore) > koalasAverage(koalasTotalScore)) {
        return `The ${team1} ${message}`;
    } else {
        return `The ${team2} ${message}`;
    }
}
*/
const tournamentResults = () => {
    if (dolphinsAverage(dolphinsTotalScore) === koalasAverage(koalasTotalScore)) {
        return `The tournament is a draw!`;
    } else if (dolphinsAverage(dolphinsTotalScore) > koalasAverage(koalasTotalScore)) {
        return `The ${team1} ${message}`;
    } else {
        return `The ${team2} ${message}`;
    }
}



console.log(tournamentResults());


function tournamentResultsBonus1() {
    if (dolphinsAverage(dolphinsTotalScoreBonus1) < koalasAverage(koalasTotalScoreBonus1) && koalasTotalScoreBonus1 >= 100) {
        return `The ${team2} ${message}`;
    } else if (dolphinsAverage(dolphinsTotalScoreBonus1) > koalasAverage(koalasTotalScoreBonus1) && dolphinsTotalScoreBonus1 >= 100) {
        return `The ${team1} ${message}`;
    } else {
        return `The tournament is a draw!`;
    }
}

console.log(tournamentResultsBonus1());


function tournamentResultsBonus2() {
    if (dolphinsAverage(dolphinsTotalScoreBonus2) < koalasAverage(koalasTotalScoreBonus2) && koalasTotalScoreBonus2 >= 100) {
        return `The ${team2} ${message}`;
    } else if (dolphinsAverage(dolphinsTotalScoreBonus2) > koalasAverage(koalasTotalScoreBonus2) && dolphinsTotalScoreBonus2 >= 100) {
        return `The ${team1} ${message}`;
    } else if ((dolphinsAverage(dolphinsTotalScoreBonus2) && koalasAverage(koalasTotalScoreBonus2)) >= 100 && dolphinsAverage(dolphinsTotalScoreBonus2) === koalasAverage(koalasTotalScoreBonus2)) {
        return `The tournament is a draw!`;
    } else {
        return 'No team wins the trophy!'
    }
}

console.log(tournamentResultsBonus2());








