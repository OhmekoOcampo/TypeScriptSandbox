/*

Brainstorm:
Input: array of hours. 

We will return a variety of information:
* Total Hours worked: So probably will just use a for loop or a math function. 
* Average daily hours: Just need to divide by the amount of hours worked so arr.length. 
* The day with the most hours worked. We will need a max for loop or a math function. 
* The number of days worked, which is just the days in the array that don't equal 0, in the test data there are 2 days that are 0 hours so he didn't work then. 
* Whether the work week is full time which is 35 hours or more. So just need to take the Total Hours worked and see if it's greater than 35. 

*/

let testdata = [7.5, 8, 6.5, 0, 8.5, 5, 0];

let workWeekAnalyzer = function (arr) {
  let totalHours = 0;
  for (let i = 0; i < arr.length; i++) {
    totalHours += arr[i];
  }
  let averageHours = totalHours / arr.length;
  let max = testdata[0];
  let max_counter = 0;
  let numberOfDaysWorked = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      max_counter = i;
    }
    if (arr[i] > 0) {
      numberOfDaysWorked += 1;
    }
  }
  let day = '';
  switch (max_counter) {
    case 0:
      day = 'Monday';
      break;
    case 1:
      day = 'Tuesday';
      break;
    case 2:
      day = 'Wednesday';
      break;
    case 3:
      day = 'Thursday';
      break;
    case 4:
      day = 'Friday';
      break;
    case 5:
      day = 'Saturday';
      break;
    case 6:
      day = 'Sunday';
      break;
  }

  if (totalHours > 35) {
    return `Employee's Total Hours worked is: ${totalHours} hours, his average hours worked is ${Math.round(averageHours * 100) / 100} hours, his longest day worked is on ${day}, his total days worked this week is: ${numberOfDaysWorked}, Employee is a full time employee!`;
  } else {
    return `Employee's Total Hours worked is: ${totalHours} hours, his average hours worked is ${Math.round(averageHours * 100) / 100} hours, his longest day worked is on ${day}, his total days worked this week is: ${numberOfDaysWorked}, Employee is not a full time employee!`;
  }
};

console.log(workWeekAnalyzer(testdata));
