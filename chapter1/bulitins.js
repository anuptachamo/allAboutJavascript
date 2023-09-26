/*
* Inbuilt object: console, window, document, location, navigator, etc.
* Inbuilt Wrapper object: String, Number, Boolean, Math, Date, JSON, etc.


? Math: The math namespace object contains static properties and methods for mathematical constants and functions. Math works with the Number type. It doesn't work with BigInt.

?Date: To work with Date and time in JavaScript.
 */

// Inbuilt wrapper object of Math   --Math le numbers haru sanga matra kaam garxa
console.log(Math.max(1,2,3,4))
console.log(Math.max(1,2,3,4))
console.log(Math.abs(900))
console.log(Math.pow(2,3))
console.log(Math.random())  //random number select garxa tara 0-1 bata matra
console.log(Math.random()*6) //random number select garxa tara 0 < 6 bata matra
console.log(Math.floor(2.9609)) //yesma round of gardaina
console.log(Math.ceil(2.9609)) //yesma roundof garxa



// Inbuilt wrapper object of Date
// Date
console.log(new Date())
console.log(new Date().getDate())
console.log(new Date().getMonth())
console.log(new Date().getFullYear())
console.log(new Date().toISOString())
console.log(new Date().toISOString().split("T")[0])
console.log(new Date().toISOString().split("T")[1])

let dt1 = new Date();
dt1.setFullYear(100)
console.log(dt1)

let dt2 = new Date();
dt2.setFullYear(200)
console.log(dt2)

let dt3 = dt1.getFullYear() + dt2.getFullYear()
console.log(dt3)


// next example:
let personDOB = new Date()
let personDate = new Date()
personDate.setFullYear(1999)

const age =  personDOB.getFullYear() - personDate.getFullYear()
console.log(age)