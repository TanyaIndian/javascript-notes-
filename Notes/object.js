let obj = {
    name : "john",
    age : 22
}
// Bracket notation allows you to use variables or expressions to dynamically access properties:
let key1 = 'name';
obj[key1] = 'doe';
obj.key1 ='rose'
// console.log(obj)  //{ name: 'doe', age: 22, key1: 'rose' }
// Dot notation is the most common and straightforward way to access properties of an object. 
// It involves using a dot (.) followed by the property name.

// for in loop
// console.log(Object.keys(obj))  // [ 'name', 'age', 'key1' ] metthod return keys in array
//Array.isArray(obj) // check if array or not

// for of loop -> for array only

for(let key of Object.keys(obj))
{
    console.log(obj[key])
}
//cloning obect.assign(target,source)
// Object.assign() copies properties from the source objects to the target object. 
// If multiple source objects contain properties with the same key, the later source's 
// property will overwrite the earlier ones. However, properties on the prototype chain of the source objects are not copied.

let obj1 = {name : 'John', age : 25}

let obj2 = Object.assign({},obj1)
console.log(obj2)

// optional chaining
// Optional chaining is a feature introduced in ECMAScript 2020 (ES11) that allows you to access properties of an object without 
// the need to explicitly check if each property exists along the path.

// The optional chaining operator ?. can be used to safely access nested properties. If any of the properties in the chain are null or 
// undefined, the expression short-circuits and evaluates to undefined, instead of throwing an error.


let demo = {
    name :'john',
    // address : {houseNumber : 1234}
}

console.log(demo?.address?.houseNumber) // undefined otherwise will give error

// In JavaScript, methods in objects are functions that are associated with an object as one of its properties. These methods can perform 
// actions or computations involving the object's data and behavior. Here's an example of how you can define methods in objects:

let demo1 = {
    name :'john',
    address : {houseNumber : 1234},
    age()
    {
        console.log(22)
    }

}
demo1.age()

