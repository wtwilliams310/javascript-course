"use strict";




// const calcAge = (birthYear) => 2022 - birthYear
// const age2 = calcAge(1976)

// console.log(age2)

//Coding Challenge #1
/*
let scoreTotalDolphins = 44 + 23 + 71; //data 1
let scoreTotalKoalas = 65 + 54 + 49; //data 1

// const numberOfGames = 3;

const calcAverage = (scoresTotal, numberOfScores) => {
	return scoresTotal / numberOfScores;
}

let dolphinsAverage = calcAverage(scoreTotalDolphins, 3);
let koalasAverage = calcAverage(scoreTotalKoalas, 3);

// console.log(dolphinsAverage);
// console.log(koalasAverage);

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log(`No team wins the trophy!`);
	}
}

checkWinner(dolphinsAverage, koalasAverage)
checkWinner(576, 111)

scoreTotalDolphins = 85 + 54 + 41; //data 2
scoreTotalKoalas = 23 + 34 + 27; //data 2

dolphinsAverage = calcAverage(scoreTotalDolphins, 3);
koalasAverage = calcAverage(scoreTotalKoalas, 3);

checkWinner(dolphinsAverage, koalasAverage)

*/

//ARRAYS
/*
const friends = ['Jesse', 'Vino', 'Bubbles', 'Sweet-Pea']
console.log(friends);
const y = new Array(1991, 1984, 1976, 'Titus')
// console.log(years);

// console.log(friends[2]);

// console.log(y[y.length - 2]);

friends[3] = 'Jay'
// console.log(friends);

const firstName = 'Titus'
const titus = [firstName, 'Williams', 2037 - 1976, 'programmer', friends];

// console.log(titus);
const calcAge = (birthYear) => 2022 - birthYear

const years = [1990, 1987, 1956, 2002, 2010, 2018];

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])

console.log(age1, age2, age3);

const ages = [age1, age2, age3]

console.log(ages);

*/
/*
const friends = ['Jesse', 'Vino', 'Bubbles', 'Sweet-Pea']

//Add elements
const newLength = friends.push('Tommy');
console.log(friends);

console.log(newLength);

friends.unshift('Snuffles')
console.log(friends);

//Remove elements
// friends.pop();
const popped = friends.pop()
console.log(popped);

friends.shift()
console.log(friends);

// friends.includes('Vino')
console.log(friends.includes('Vino'));
*/


//Coding Challenge #2
/*
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		return bill * .15;
// 	} return bill * .20;
// }

//refactored from above

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

const bills = [125, 556, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

// console.log(tips);
console.log(total);

function allTips(arrays) {
	const result = []
	arrays.forEach(bill => {			//<---Using .forEach
		result.push(calcTip(bill))
	});
	return result;
}

// function allTips(array) {
// 	const result = [];
// 	for (let i = 0; i < array.length; i++) {  //<---Using for-loop
// 		result.push(calcTip(array[i]))
// 	}
// 	return result;
// }

console.log(allTips(bills));
*/


//Dot vs. Bracket Notation
/*
const titus = {
	firstName: "Titus",
	lastName: "Williams",
	job: 'programmer',
	age: 46,
	friends: ['Bubbles', 'Vino', 'Sweet-Pea']
};

console.log(titus);

titus.location = 'San Antonio';
titus.email = 'wtwilliams310@gmail.com'
console.log(titus);

const numberOfFriends = titus.friends.length
// console.log(numberOfFriends);
console.log(`${titus.firstName} has ${titus.friends.length} friends, and his best friend is called ${titus.friends[0]}`);

*/



//Object Methods
/*
const titus = {
	firstName: "Titus",
	lastName: "Williams",
	job: 'programmer',
	birthYear: 1976,
	cats: ['Bubbles', 'Vino', 'Sweet-Pea'],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear
	// }

	// calcAge: function () {
	// 	return 2037 - this.birthYear
	// }

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age
	},

	information: function () {
		return `${this.firstName} is a ${this.calcAge()} year old programmer, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
	}
};

// console.log(titus.calcAge());

console.log(titus.information());

//Challenge

*/

//Coding Challenge #3

const mark = {
	firstName: 'Mark',
	lastName: 'Miller',
	weight: 78,
	height: 1.69,

	calcBMI: function () {
		this.bmi = Number((this.weight / (this.height ** 2)).toFixed(2));
		// this.bmi = result
		return this.bmi
	}
};



const john = {
	firstName: 'John',
	lastName: 'Smith',
	weight: 92,
	height: 1.95,

	calcBMI: function () {
		this.bmi = Number((this.weight / (this.height ** 2)).toFixed(2));
		return this.bmi
	}
};

mark.calcBMI();
john.calcBMI();

const comparison = () => {
	return mark.bmi > john.bmi ? `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})` : `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
}

console.log(comparison());