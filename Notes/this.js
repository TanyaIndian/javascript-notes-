// In JavaScript, this refers to the current execution context, or the context in which a function is called. The value of this is 
// determined by how a function is called, rather than where it is defined. The behavior of this can vary depending on how the
//  function is invoked:


// Global context: When this is used in the global scope (outside of any function), it refers to the global object, which is window in 
// a web browser or global in Node.js.
//console.log(this === window); // true in a web browser

// Function context: Inside a function, the value of this depends on how the function is called:

// Regular function calls: When a function is called as a standalone function (not as a method of an object), 
// this refers to the global object (window in a web browser).

// Method calls: When a function is called as a method of an object, this refers to the object that owns the method.

// Constructor calls: When a function is called with the new keyword to create an instance of an object, this refers to the newly created object.

function print()
{
    console.log(this.name,this.age)
}


let demo1 = {
    name :'john1',
    address : {houseNumber : 1234},
    age:22,
    fn : print
}

let demo2 = {
    name :'john2',
    address : {houseNumber : 1234},
    age : 25,
    fn : print
    

}

let demo3 = {
    name :'john3',
    address : {houseNumber : 1234},
    age:24,
    fn : print

}
demo1.fn()
demo2.fn()
demo3.fn()


function myFun()
{
    // 'use strict'
    console.log(this) // undefined without strict will give  window object
}
myFun()


// call():

// The call() method calls a function with a given this value and arguments provided individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)
// The thisArg parameter is the value of this that will be used when the function is executed.
// Arguments to the function are passed individually as subsequent arguments to call().

function greet(name,location) {
    console.log(`Hello, ${name}! I am ${this.job}.`,location);
  }
  
  const person1 = {
    job: 'developer'
  };
  const person2 = {
    job : 'manager'
  }
  greet.call(person1, 'Alice','bangalore');
  greet.call(person2,'Ravi','delhi')
  // Output: Hello, Alice! I am developer. bangalore
// Hello, Ravi! I am manager. delhi

//   apply():

// The apply() method is similar to call(), but it accepts arguments as an array or an array-like object.
// Syntax: function.apply(thisArg, [argsArray])
// The thisArg parameter is the value of this that will be used when the function is executed.
// Arguments to the function are passed as an array or an array-like object to apply().
  greet.apply(person2,['neeta','surat']) //Hello, neeta! I am manager.surat

//   bind():

// The bind() method creates a new function with the same body and scope as the original function but with a specified this value.
// Syntax: function.bind(thisArg[, arg1[, arg2[, ...]]])
// The thisArg parameter is the value of this that will be permanently bound to the function.
// Additional arguments can be partially applied to the new function by passing them after thisArg.

let val = greet.bind(person1)
val('vineeta','mumbai')  // Hello, vineeta! I am developer. mumbai
