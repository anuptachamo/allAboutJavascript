console.log("Operators in Js")

// Arithematic Operators
let a = 10
let b = 2
console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a / b = ", a/b)
console.log("a * b = ", a*b)

// Modulus
console.log("a % b = ", a%b)   //output =show remainder

console.log("a ** b = ", a**b) // Exponentiation operators --yo ni bujena 

// Increment
let c =3
console.log("++c = ", ++c)
console.log("c++ = ", c++)
console.log("c = ", c)

// Decrement
d = 5
console.log("d-- = ", d--)
console.log("--d = ", --d)
console.log("d = ", d)



//Assignment Operators
let assignment = 1;
assignment  += 5  //same as assignment + 5 , x= x+y =1 + 5 =6
console.log(assignment)

assignment  -= 5  //same as assignment - 5 , x= x-y = 6-5 = 1
console.log(assignment)

assignment  *= 5  //same as assignment * 5 ,x= x*y = 1*5 = 5
console.log(assignment)

assignment  /= 5  //same as assignment / 5 ,x= x/y = 5/5 = 1
console.log(assignment)

assignment  %= 5  //same as assignment % 5 ,x= x%y = 5%5 = 1
console.log(assignment)

assignment  **= 5  //same as assignment ** 5 ,x= x**y = 1*1*1*1 = 1   --yo bujena 
console.log(assignment)


// Comparison operators
let comp1 = 4;
let comp2 = 7;

let comp3 = 2;
let comp4 = "2";
console.log("comp1 == comp2 is: ", comp1 == comp2)   //equal to
console.log("comp1 != comp2 is: ", comp1 != comp2)   //not equal to
console.log("comp3 === comp4 is: ", comp3 === comp4) //equal value and datatype
console.log("comp3 !== comp4 is: ", comp3 !== comp4) //not equal value or not equal datatype
console.log("comp1 > comp2 is: ", comp1 > comp2)
console.log("comp1 < comp2 is: ", comp1 < comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)  // true true = true   -- In AND condition,if both condition are true then only condition will be true.
console.log(x>y || x==5)  // true false = true  --in OR condition, if one condition is true the whole condition will be true. 
console.log(!false)       // In LOGICAL NOT, if condition is false, it RETURN TRUE. If TRUE then RETURN False. 
console.log(!true)



