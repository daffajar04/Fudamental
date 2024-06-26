let age = 10

if (age >= 17) {
    console.log('Segera bikin KTP')
} else {
    console.log('Kamu belum mencukupi umur')
}

let grade = "70"

if(grade == "95") {
    console.log("Excellent Result")
} else if (grade == "85") {
    console.log("Great Result")
} else if (grade == "70") {
    console.log("Average Result")
} else {
    console.log("Invalid Grade")
} 

switch (grade) {
    case "95":
        console.log("Excellent Result")
        break;
    case "85":
        console.log("Great Result")
        break;
    case "70":
        console.log("Average Result")
        break;
    default:
        console.log("Invalid Grade")
        break;
}


let car = "BMW"

if (car === "BMW" || car === "Mercedes") {
    console.log("This car is awesome")
}


const str = "Javascript"
// ternary
console.log(str == "Javascript" ? "Javascript" : str == "PHP" ? "PHP" : "NotJavascript")

