/* 
TODO:To use prompt you need to install prompt-sync
    ? ask user for input
*/
const prompt = require ("prompt-sync")()

const name = prompt("Enter your name: ")
console.log('Hello ' + name)
console.log('Datatype of name is: ' + typeof name)


let age = prompt("What is your age?")
if(age <9){
    console.log ("oops you are a kid")
}else if(age >=16 && age <=20){
    console.log ("you are eligible for SEE Examination")
}else{
    console.log ("You are a worker")
}
console.log("Done")