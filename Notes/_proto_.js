// Object.create() is a method in JavaScript that creates a new object, using an existing object as the prototype of the newly created object.
// This method allows you to create a new object and optionally specify properties for that object.

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    age : 25
  };
  
  const john = Object.create(person);
  john.firstName = "John";
  john.lastName = "Doe";
  
  console.log(john.fullName(),john.age); // Output: John Doe

//   Every object in JavaScript has a prototype (proto) property, which points to another object. This other object is the object's prototype.
// When you access a property on an object, JavaScript first checks if the property exists on the object itself. If it doesn't find the property, 
// it looks at the object's prototype (proto) and continues up the prototype chain until it finds the property or reaches the end of the chain.
// This allows for property inheritance, where objects can inherit properties and methods from their prototype.
  
// __proto__ (double underscore proto double underscore) is a property in JavaScript that allows objects to access their prototype. It is a non-standard
//  way to access an object's prototype and is often considered deprecated in favor of using Object.getPrototypeOf() and Object.setPrototypeOf().

console.log(john.__proto__) //{ fullName: [Function: fullName], age: 25 }
console.log(Object.getPrototypeOf(john)) // { fullName: [Function: fullName], age: 25 }

// prototype is a property of constructor functions in JavaScript.
// It is used to add properties and methods that will be shared by all instances created with that constructor function.
// UserMethod = {
//     fullname : function()
//     {
//         console.log(this.FirstN + " " + this.LastN)
//     },
//     song : function()
//     {
//         console.log("ha la ha")
//     }
// }
function createUser(FN,LN,)
{
    // const user = Object.create(UserMethod);
    const user = Object.create(createUser.prototype) // empty object 
    user.FirstN = FN
    user.LastN = LN
    return user
}


// console.log(user1)
// user1.fullname() //ritu raj
// console.log(createUser.prototype) // {}

createUser.prototype.fullName = function () // this add fullname as --prorto of -- user1
{
    console.log(this.FirstN + " " + this.LastN)
}

createUser.prototype.song = function()
{
    console.log('lalala')
}

const user1 = createUser('ritu','raj')
user1.fullName()  //ritu raj