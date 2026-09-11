/*
Need to create a function.
    * Takes in an array. 
    * console logs "... 17C in 1 days... 21C in 2 days... 23C in 3 days..."
        * May need to use concatenation
        * Definitely needs a loop to iterate through array.   
*/

let testData1 = [17, 21, 23];
let testData2 = [12, 5, -5, 0, 4];
let forecast = '';

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast = forecast + `${arr[i]}C in ${i + 1} days... `;
  }
  console.log('...' + forecast);
};

printForecast(testData1);
printForecast(testData2);
