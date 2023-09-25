//*converting the string to a number

let num1 = "1";
let num2 = "2";    //num1 and num2 is a string not a number
let sum = num1 +num2;
console.log("sum: " + sum);  //output= 12

//There are three way to change string into number
    //Step1
    let sum1 = parseInt (num1) +  parseInt (num2);  //this is called typecasting 
    console.log("num1 + num2: " + sum1);   //parseInt --convert string to a number

    //step2
    let n1 = "10";
    let n2 = "20";
    let s1 = +(n1) + +(n2);   //+(variable) --convert string to number
    console.log("n1 + n2: " + s1);

    //step3
    let n3 = new Number("123");  //new Number("String") --convert String to Number
    console.log(n3);


    let a = "Coder"
    console.log(a)
    a = Number.parseInt(a)   // converting the string to a number (we can write + or parseInt both)
    console.log(a)
    console.log('Datatype of a is: ' + typeof a)

let e = "hello2"
console.log(parseInt(e));   //output: NaN (NaN meaning not a number)

let n = "1hello";
console.log(parseInt(n));   //output: 1


let f = "1.2hello";
console.log(parseFloat(f));  //output: 1.2



// *converting the number to a string
let b = 23
console.log(b)
console.log( 'Datatype of b is: ' +typeof b)

b = b.toString()  // converting the number to a string  
console.log( 'Datatype of a is: ' + typeof b)
console.log(b)