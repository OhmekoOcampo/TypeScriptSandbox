'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Small Array Destructing Example
//Without the technique of destructuring we do this to access all the elements of an array and assign them to variables.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //unpacking the data in array into each variable respectively.
console.log(x, y, z);
console.log(arr);

//Messing around with the objects above.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//How to swap variables the old fashion way.
const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);

//How to swap variables using the destructring array way.
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values form a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [element1, , element3] = nested;
console.log(element1, element3);

const [element4, , [element5, element6]] = nested;
console.log(element4, element5, element6);

//If we don't know the size of the array, we can do default values when destructuring.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
