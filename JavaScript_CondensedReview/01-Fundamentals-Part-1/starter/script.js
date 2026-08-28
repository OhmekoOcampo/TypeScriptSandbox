let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

const country = "United States";
const continent = "North America";
let population = 349000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
const language = "English";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//language = "Japanese";

//Basic Operators
halfPop = population / 2;
console.log(halfPop);

population++;
console.log(population);

finlandPop = 6000000;
console.log("Is USA population greater than Finland population?");
console.log(population > finlandPop);
avgCountryPop = 33000000;
console.log("Does USA have less people than the average country?");
console.log(population < avgCountryPop);

let state = "California";
let description =
  state +
  " is in the " +
  country +
  " and its " +
  population +
  " million people speak " +
  language;

console.log(description);

//Strings and Template Literals
let descriptionNew = `${state} is in the ${country} and its ${population} million people speak ${language}`

console.log(descriptionNew)

//Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> False
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//Equality Operators == & === and Prompt function

let numNeighbors = Number(prompt('How many neighbor countries does your country have?'))

if(numNeighbors === 1){
  console.log('Only 1 border!')
}else if(numNeighbors > 1){
  console.log('More than 1 border!')
}else{
  console.log('No border')
}