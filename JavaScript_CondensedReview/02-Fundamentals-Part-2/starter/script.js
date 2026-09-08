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

//Assignments - Arrow Functions
let percentageOfWorld3 = (countryName, population) => `The ${countryName} is about ${(population/worldPop)*100} of the world population`

let percentageUS3 = percentageOfWorld3('United States',342600000)
let percentageJPN3 = percentageOfWorld3('Japan',122300000)
let percentagePI3 = percentageOfWorld3('Philippines',117800000)

console.log(percentageUS3,percentageJPN3,percentagePI3)

//Assignments - Functions calling other functions
//Here we call a function within a function. So I'm going to take the percentageOfWorld1 function and create one that just returns percentage.

let percentageOfWorld4 = (population) => (population/worldPop)*100;

let describePopulation = (country,population) => `${country} has ${population} million people,
which is about ${percentageOfWorld4(population)}% of the world`;

console.log(describePopulation("United States",342600000))
console.log(describePopulation("Japan",122300000))
console.log(describePopulation("Philippines",117800000))


//Assignments - Introduction to Arrays
//finland population is 5.65 million
populations = [342600000,122300000,117800000,5650000]

if (populations.length == 4){
    console.log("Array has 4 elements!")
}else{
    console.log("Array doesn't have 4 elements!")
}

percentages = [percentageOfWorld4(populations[0]),percentageOfWorld4(populations[1]),percentageOfWorld4(populations[2]),percentageOfWorld4(populations[3])];
console.log(percentages);

//Assignments - Basic Array Operations (Methods)
//Neighboring Countries of Austria:
neighbors = ['france','germany','poland','romania','italy'];
neighbors.push('utopia');
neighbors.pop()

if (!neighbors.includes('germany')){
    console.log('Probably not a central european country :D')
}else{
    console.log('Germany is a neighbor! :D')
}

neighbors[neighbors.indexOf('italy')] = 'DAS BOOT'
console.log(neighbors)

//Assignments - Introduction to Objects
let myCountry = {
    country: 'United States',
    capital: 'Washington D.C.',
    language: 'English',
    population: 342600000,
    neighbors: ['Canada','Mexico'],
    describe: function(){
        console.log(`My country's name is ${myCountry.country} and its capital is ${myCountry.capital}. The inhabitants speak ${myCountry.language} and its population is ${myCountry.population} million people. My country is ${this.checkIsland() ? 'a' : 'not an'} island.`)
    },
    checkIsland: function(){
        console.log(this.neighbors.length)
        return this.neighbors.length === 0;
    }
};
console.log(myCountry);

//Challenge - Video 44: Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: false,
    calcAge: function(){
        return 2037 - this.birthYeah;
    },
    summary: function() {
        if (this.hasDriversLicense){
            console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has a driver's license`)
        }else{
            console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he does not have a driver's license`)
        }
    }
};

console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`)

//Assignments - Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a captital called ${myCountry.capital}.`)

myCountry.population = myCountry.population + 2000000;
console.log(myCountry.population);
myCountry['population'] = myCountry['population'] - 2000000;
console.log(myCountry['population']);

//Challenge - Video 45: Object Methods
jonas.summary() //Edited the jonas object in Challenge - Video 44 section.

//Assignments - Object Methods
myCountry.describe();