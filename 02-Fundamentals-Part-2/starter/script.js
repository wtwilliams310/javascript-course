"use strict";




const calcAge = (birthYear) => 2022 - birthYear
const age2 = calcAge(1976)

// console.log(age2)

//Coding Challenge #1

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




