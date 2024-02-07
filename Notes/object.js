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