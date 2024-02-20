// The new keyword is used with constructor functions to create instances of objects. 

// A constructor function in JavaScript is a regular function that is used with the new keyword to create objects.
// Constructor functions are typically named with PascalCase (capitalizing the first letter of each word) to distinguish them from regular functions.
// Inside a constructor function, you define the properties and methods that will be available to instances created with that constructor.


// When you want to create an instance of an object using a constructor function, you use the new keyword followed by the constructor 
// function's name and any arguments it requires.
// This creates a new object and sets the this keyword inside the constructor function to refer to that new object.
// The constructor function is then executed in the context of the new object, allowing you to set its properties and perform any 
// initialization tasks.

// new --> create empty object , no need to write return, prortype is aslo added


function CreateUser(FN,LN,)
{
    // const user = Object.create(UserMethod);
    // const user = Object.create(createUser.prototype) // empty object 
    this.FirstN = FN
    this.LastN = LN
    // return user
}



CreateUser.prototype.fullName = function () // this add fullname as --prorto of -- user1
{
    console.log(this.FirstN + " " + this.LastN)
}

CreateUser.prototype.song = function()
{
    console.log('lalala')
}

const user1 = new CreateUser('ritu','raj')
user1.fullName()  //ritu raj

for(let key in user1)
{
    console.log(key)
}

// FirstN
// LastN
// fullName
// song


for(let key in user1)
{
   if(user1.hasOwnProperty(key)) 
   {
    console.log(key)
   }
}
// FirstN
// LastN

let num = new Array(1,2,3)
console.log(num) //[ 1, 2, 3 ]

function hello()
{
    console.log('hello')
}

hello.prototype = []
console.log(hello.prototype) //[]
hello.prototype.push('1')
console.log(hello.prototype) //['1']


