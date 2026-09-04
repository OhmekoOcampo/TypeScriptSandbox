//Assignments - Functions
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

let unitedStates = describeCountry('United States','342.6','Washington D.C.');
let japan = describeCountry('Japan','122.3','Tokyo');
let philippines = describeCountry('Philippines','117.8','Manila');

console.log(unitedStates)
console.log(japan)
console.log(philippines)

//Assignments - Function Declarations vs. Expressions
const worldPop = 7900000000

function percentageOfWorld1(countryName, population){
    return `The ${countryName} is about ${(population/worldPop)*100} of the world population`
}

let percentageUS = percentageOfWorld1('United States',342600000)
let percentageJPN = percentageOfWorld1('Japan',122300000)
let percentagePI = percentageOfWorld1('Philippines',117800000)

console.log(percentageUS,percentageJPN,percentagePI)

const percentageOfWorld2 = function(countryName, population){
    return `The ${countryName} is about ${(population/worldPop)*100} of the world population`
}

let percentageUS2 = percentageOfWorld2('United States',342600000)
let percentageJPN2 = percentageOfWorld2('Japan',2*122300000)
let percentagePI2 = percentageOfWorld2('Philippines',117800000)

console.log(percentageUS2,percentageJPN2,percentagePI2)
