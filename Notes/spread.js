//clone an array
let arr1 = [1,2,3,[3,4]];
let arr2 = [...arr1]; // shallow copy -rwhile the top-level properties or elements of the object/array are copied, any nested objects/arrays within the 
// original object/array are not duplicated. Instead, references to those nested objects/arrays are copied into the new object/array.
// the top-level elements of the original array when nested element are changed it shows in shallow copy
arr1.push(5);
arr1[3][0]=6
// console.log(arr1,arr2)
console.log(arr1,arr2) // [ 1, 2, 3, [ 6, 4 ], 5 ] [ 1, 2, 3, [ 6, 4 ] ] arr2 is shallow copy of arr1 which nested array1 is changed then arr2 is changed


let originalObject = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  };
  
  // Create a deep copy using JSON methods
  let deepCopyObject = JSON.parse(JSON.stringify(originalObject));
  
  // Modify the originalObject
  originalObject.age = 35;
  originalObject.address.city = "Los Angeles";
  
  // Log both objects
  console.log(originalObject); // Output: { name: 'John', age: 35, address: { city: 'Los Angeles', country: 'USA' } }
  console.log(deepCopyObject); // Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } } // deepcopy nested object is not changed
  
// Spread operataor
// The spread operator (...) in JavaScript is a powerful feature introduced
//  in ECMAScript 6 (ES6) that allows an iterable (such as an array or string) to be expanded into individual elements or characters
// Copying Arrays:
// You can create a shallow copy of an array using the spread operator.


const originalArray1 = [1, 2, 3];
const copyArray = [...originalArray1];
// Concatenating Arrays:
// You can concatenate arrays easily using the spread operator.


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
// Passing Array Elements as Arguments:
// You can pass individual elements of an array as arguments to a function.


const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
const result = sum(...numbers); // Equivalent to sum(1, 2, 3)
// Spreading Object Literals:
// You can merge properties from multiple objects into a new object.


const obj1 = { foo: 'bar' };
const obj2 = { baz: 'qux' };
const mergedObj = { ...obj1, ...obj2 };
// Creating New Arrays with Additional Elements:
// You can create a new array by adding elements to an existing array.


const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];
// Converting String to Array of Characters:
// You can split a string into an array of characters.


const str = 'hello';
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']
//destructing 
let [a,b,...abc] = [1,2,3,4] // a= 1,b=2,abc = [3,4]

// object with spread
let newObj = {..."abc"}
console.log(newObj) //{ '0': 'a', '1': 'b', '2': 'c' }

// Destruturing array
// Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects and assign them to 
// variables in a single statement. It provides a concise syntax,
//  making code more readable and expressive.
const numbers1 = [1, 2, 3];

// Destructuring assignment
const [a1, b1, c1] = numbers1;

console.log(a1); // Output: 1
console.log(b1); // Output: 2
console.log(c1); // Output: 3

const numbers2 = [1, 2, 3, 4, 5];

// Destructuring with rest syntax
const [a2, b2, ...rest] = numbers2;

console.log(a2); // Output: 1
console.log(b2); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Object Destructuring:
// Object destructuring allows you to extract properties from objects and assign them to variables with the same names.

const person = { firstName: 'John', lastName: 'Doe', age: 30 };

// Destructuring assignment
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30

const person3 = { firstName: 'John', lastName: 'Doe', age: 30 };

// Destructuring assignment with variable aliasing
const { firstName: fName, lastName: lName, age: personAge } = person3;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
console.log(personAge); // Output: 30

const data = {
    user: 'John',
    details: {
      email: 'john@example.com',
      age3: 30
    }
  };
  
  // Mixed destructuring assignment
  const { user, details: { email, age3 } } = data;
  
  console.log(user); // Output: John
  console.log(email); // Output: john@example.com
  console.log(age3); // Output: 30
  

