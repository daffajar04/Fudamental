/*Problem:
Write a code to find area of rectangle

Hint:
1. Find out how to count area of rectangle
2. Length x width = area of rectangle

Solution in Pseudocode
1. define variable and assign value to variable
        const rectangleLength = 5
        const rectangleWidth = 3

2. define variable to keep the result
and implement the formula area of rectangle
        const rectangleArea = rectangleLength * retangleWidth
*/
// Function to Find the Area of Triangle
function areaRectangle(a, b) {
    let area = a * b;
    return area;
}

// Function to Find the Parameter of Triangle
function perimeterRectangle(a, b) {
    let perimeter = 2 * (a + b);
    return perimeter;
}

// Driver program 
let a = 5;
let b = 3;
console.log("Area = " + areaRectangle(a, b));
console.log("Perimeter = " + perimeterRectangle(a, b)); 

/*
Problem:
Write a code to convert days to years, months, and days

Hint:
Number of days = 1. 400 days
                 2. 366 days
Solution in Pseudocode
define variabele to find the result
*/

function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
    return yearsDisplay + monthsDisplay + daysDisplay; 
}

console.log(getFormatedStringFromDays(400))
console.log(getFormatedStringFromDays(366))

/*
Problem:
Write a code to get difference dates in days

Hint: date1= 2022-01-20, date2= 2022-01-22

Solution in Pseucode
define variable to find the result
*/
let date1 = new Date("01/20/2022");
let date2 = new Date("01/22/2022");

// Convert dates to UTC timestamps
let utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
let utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

// Calculate the time difference in milliseconds
let timeDiff = Math.abs(utc2 - utc1);

// Convert milliseconds to days
let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

// Display the result
console.log(`Total number of days between dates:
${date1.toDateString()} and ${date2.toDateString()} is: ${daysDiff} days`);

/*
Problem:
Write a code to find area of circle

Hint:
Radius : 5

Solution in Pseudocode
define variable to find result
*/
function findDiameter(radius) {
    return 2 * radius;
}

const radius = 5;
const diameter = findDiameter(radius);
console.log("Diameter of the circle is :", diameter);

let r = 5;
let res = 2 * 3.1416 * r;
console.log(`${res.toFixed(3)}`);

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new circle(5)
console.log('Area =', c.area().toFixed(2))

