/*1. What is JavaScript, and where is it commonly used?

Answer: JavaScript is a high-level, interpreted scripting language primarily used for web development. It's commonly used for adding interactivity and functionality to web pages but can also be used in other environments like server-side development (Node.js), mobile app development, and more.
*/

/**
 * 2. What is the difference between let, const, and var in variable declaration?

Answer:
    var is function-scoped and can be re-declared within the same function.
    let is block-scoped and allows variable reassignment.
    const is block-scoped and is used for constants that cannot be reassigned.
 */

/*
3. How do you define a function in JavaScript, and what is a function declaration vs. a function expression?
Answer: You can define a function in JavaScript using function declarations or function expressions:
Function Declaration
function greet(name) {
        return 'Hello, ' + name;
      }
    
    Function Expression
    const greet = function(name) {
        return 'Hello, ' + name;
    };
    console.log(greet)  
    */


/**
 * 6. How do you handle asynchronous operations in JavaScript?

Answer: JavaScript provides several mechanisms for handling asynchronous operations, including callbacks, Promises, and async/await.
 */

/**
 * 32. How do you clone or copy an object in JavaScript?

Answer: You can clone an object using various methods, including the spread operator ({...}), Object.assign(), or by creating a deep copy using JSON serialization and deserialization.
 */
// Non PRimitive Data Type - Objects in JS
const item ={ //item vaneko object ho
  name : "Anup Tachamo", // name is key and "Anup Tachamo is a value"
  address : "jagati",
  contact_no : 9876789878,
  Remark : function () { //object vitra function ni banauna milxa
      // let fullname = "Rati madhikarmi"
      // return this.fullname   //yo this.fullname le remark ko function ma vako variable laii define gareko xa
      return "I'm a good learner --" + this.name //this.name le mathii item vitra vayeko key(name) laii define gareko xa
  },
  other(){ //object vitra multiple function nii banauna milxa (other is a key and value both in function case)
      return this.Remark  //function vitra arko function laii call gareko 
  },

  //object vitra arko object banako
  myLocation : {
      city : {
       eg :   "Bhaktapur"
      },
      street : "Golmadhi"
  },
}
//yo case ma name vanne key mathii item ko object maii vako le name ma keii change hundaina tara testname item ko key ma define nagareko le copyed vanne object ma add hunxa
let copyed = { name: "test", testname: "testtest"}  

Object.assign(copyed, item) //item ma vako value haru sabaii copyed vanne object ma copy hunxa
console.log(copyed)


/**
 * 34. What is the purpose of the try...catch statement in JavaScript, and how does it work?

Answer: The try...catch statement is used to handle exceptions (errors) in JavaScript. Code within the try block is executed, and if an error occurs, it's caught by the catch block, allowing you to handle the error gracefully.
 */

/**
 * 36. What is a callback function, and how do you use it in JavaScript?

Answer: A callback function is a function that is passed as an argument to another function and is executed when a specific event occurs or when an asynchronous operation completes.
 */


/**
 * 38. What is the purpose of the JavaScript Set object, and how does it differ from an array?

Answer: A Set is a collection of unique values in JavaScript. It does not allow duplicate values, unlike arrays. It is often used when you need to maintain a unique list of items.
 */