// Function Declaration
// Declaring a function using the function keyword.
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
//   Function Expression: Assigning a function to a variable.
// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
//   };
// An arrow function is a more concise syntax for writing functions.
// const greet = (name) => {
//     console.log(`Hello, ${name}!`);
//   };
  
// const greet = name => `Hello, ${name}!` 

// you cannot call a function before declaration only with function declaration not with expression or arrrow function


// lexical scope
// lexical scope means that the scope of a variable is determined by where it is declared in the code and nested functions inherit the scope of their containing function.

// Function scope refers to the concept in JavaScript where variables declared within a function are only accessible within that function and not outside of it

function outer() {
    const outerVariable = 'Outer variable';
  
    function inner() {
        let a = 10;
      console.log(outerVariable); // Access outerVariable from the outer function
    }
//   console.log(a)
    inner();
  }
//   One important aspect of lexical scope is that inner functions have access to variables declared in their outer scopes, but the reverse is not true. Variables declared within inner functions are not accessible from their outer functions due to lexical scoping rules.
  
  outer(); // Output: Outer variable
  

//   var:

//   Variables declared with var have function scope, meaning they are scoped to the nearest function block.
//   If var is declared outside any function block, it becomes a global variable.
//   Variables declared with var are hoisted to the top of their scope and can be accessed before they are declared (though their value will be undefined until assignment).

function example() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Output: 10
  }
//   let:
//   Variables declared with let have block scope, meaning they are scoped to the nearest enclosing block, which could be a for loop, if statement, or a function.

// Variables declared with let are not hoisted to the top of their block scope, and trying to access them before the declaration results in a ReferenceError.
// function example() {
//     if (true) {
//       let y = 20;
//     }
//     console.log(y); // Error: y is not defined
//   }
  
// const:

// Variables declared with const also have block scope like let.
// const variables must be initialized with a value at the time of declaration, and their value cannot be changed or reassigned.
// However, for objects and arrays, the const declaration only prevents the variable from being reassigned, not from being mutated (i.e., its properties or elements can still be modified).

// function example() {
//     const z = 30;
//     z = 40; // Error: Assignment to constant variable
//   }
  

// default parameter
// Default parameters in JavaScript allow you to specify default values for function parameters in case they are not provided or are undefined when the function is called. Default parameters provide a convenient way to handle missing arguments and make functions more flexible.
function abc(a,b=0)
{
    console.log(a,b)
}
abc(10)
//callback function
// A callback function, also known simply as a "callback," is a function that is passed as an argument to another function and is executed after a specific event or operation has occurred.

function one(callback)
{   callback("callback")
    console.log("function one")
}
one((name)=>
{
    console.log("annonymousr arrow function",name)
})



// Higher-Order Functions:

// Functions that take other functions as arguments or return functions.

// forEach he forEach() method is commonly used for iterating over arrays and performing operations on each element
// the forEach() method does not return a new array. Instead, it iterates over each element in the array and applies a provided callback function to each element, but it does not create a new array based on the return values of the callback function.
let numbers = [1,2,3,4];
let ans = numbers.forEach((ele,ind)=>
{
  console.log(ele,ind)
})
//map
// filter The filter() method is another higher-order function available for arrays in JavaScript. It creates a new array containing all elements of the original array that pass a provided test function.
// sort((a,b)=> a-b) --> low to high  if(a-b is -ve that means a < b a will be placed first)
// sort() --> sort according to ASCI value

// find
// The find()1 method is another higher-order function available for arrays in JavaScript. It returns the first element in the array that satisfies a provided testing function. Otherwise, it returns undefined.
const numbers1 = [1, 2, 3, 4, 5];

const result = numbers1.find(function(number) {
  return number > 2;
});

console.log(result); // Output: 3

// he every() method returns true if the provided callback function returns true for every element in the array. If any element fails the test (i.e., the callback function returns false for any element), the every() method returns false

const numbers2 = [2, 4, 6, 8, 10];

const allEven = numbers2.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // Output: true

// An IIFE, which stands for Immediately Invoked Function Expression, is a JavaScript function that is defined and invoked immediately after its declaration. This pattern is used to create a new scope for variables, avoiding conflicts with other parts of the code and preventing pollution of the global scope. IIFEs are commonly used in JavaScript to encapsulate code and execute it immediately without the need for a separate function call.
(function(num5) {
    var message = 'Hello, World!';
    console.log(message,num5);
  })(2);
// he variable message is scoped within the IIFE and is not accessible from outside, preventing potential conflicts with other variables in the global scope.

// Currying is the process of converting a function that takes multiple arguments into a series of functions, each taking a single argument. The result is a chain of functions, where each function takes one argument and returns another function that takes the next argument until all arguments have been provided, and the final function returns the result.

// function add(x, y) {
//     return x + y;
//   }
  
// Currying transforms this function into a series of unary functions

function add(x) {
    return function(y) {
      return x + y;
    };
  }

  const add2 = add(2)(3); // Returns a function that adds 2 to its argument
const result1 = add2(3); // Returns 5 (2 + 3)
console.log(result1)
//in short
// const add2 = add(2)(3)
// Curried functions can be reused with different arguments, reducing code duplication.

  