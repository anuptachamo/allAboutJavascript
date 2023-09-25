// ?1. Use logical operators to find whether the age of a person lies between 10 and 20?
const prompt = require("prompt-sync")()  //to use prompt require is necessary

/* commenting this for que 2
let age = prompt("What is your age?")
age = Number.parseInt(age)

if(age>10 && age<=20){
    console.log("Age lies between 10 and 20 ");
}else{
    console.log("Age doesn't lies between 10 and 20");
}
*/

//?2 Demonstrate the use of switch case statements in javascript?
let age1 = prompt("What is your age?")
age1 = Number.parseInt(age1)
switch (age1){
    case 10:
        console.log("Your age is 10")
        break
    case 15:
        console.log("Your age is 15")
        break
    case 20:
        console.log("Your age is 20")
        break
    default:
        console.log("Your age is not found")
}       
