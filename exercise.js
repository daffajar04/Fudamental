// Latihan no 1
let c = 60 // Celcius
let f = 140 // Fahrenheit

f = (c * (9/5)) + 32; // Rumus
console.log("The value of temprature in Fahrenheit is " + f)

// Latihan no 2
const numberToCheck = 25

if(numberToCheck % 2 == 0) {
    console.log("The Number is Even")
} else {
    console.log("The Number is Odd")
}
// versi ternary no2
console.log(numberToCheck % 2 == 0 ? "Even Number " : "Odd Number")

// Latihan no 3
let number = "6"

if (number == 7) {
    console.log("Is a Prime Number")
} else if (number == 6) {
    console.log("Is not a Prime Number")
}
// Menggunakan cara looping
let nom = 7
let devider = 0

for (let i = 1; i <= nom; i++){
    if (nom % i == 0) devider++
}

console.log(devider == 2 ? '${i} is a prime number' : '${i} is not a prime number')
//Latihan no 4
function findSum(n) { 
    let sum = 0; 
    for (let i = 1; i <= n; i++) 
        sum = sum + i; 
    return sum; 
} 
  
const n = 5; 
console.log(findSum(n));

// LAtihan no 5
let a = 6; 

function factorial(a) { 
    let count = 1; 
    
    if(a === 0)
        return 1;
    for (let i = 2; i <= a; i++) 
        count = count * i; 
    return count; 
}
console.log(factorial(a));

//Latihan no 6



