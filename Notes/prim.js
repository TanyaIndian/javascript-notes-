// Primitive Data Types:
// Primitive data types are immutable and hold primitive values. In JavaScript, there are six primitive data types:
// actual value itself, not a reference to the value stored somewhere else in memory.
// Number: Represents numeric values, including integers and floating-point numbers.
// String: Represents sequences of characters, enclosed within single or double quotes.
// Boolean: Represents a logical value, either true or false.
// Undefined: Represents an uninitialized variable or a variable with no assigned value.
// Null: Represents the intentional absence of any object value.
// Symbol: Represents a unique identifier, introduced in ECMAScript 6 (ES6).

// Reference Data Types:
// Reference data types are mutable and hold references to objects. They are stored and accessed via reference. 
// In JavaScript, objects, arrays, functions, and dates are examples of reference data types.

// Object: Represents a collection of key-value pairs.
// Array: Represents a list-like collection of elements.
// Function: Represents a reusable block of code.
// Date: Represents a specific point in time.

// Data types in programming languages define the type of data that a variable can hold. They determine what operations can be performed on the data and how it is stored in memory. Different programming languages may have different sets of data types, but common data types include:

// Integer: Represents whole numbers without fractional components.
// Float/Double: Represents numbers with decimal points.
// Boolean: Represents true or false values.
// Character/Char: Represents a single character, such as 'a', 'b', 'c', etc.
// String: Represents a sequence of characters, such as "hello", "world", etc.
// Array: Represents a collection of elements, which can be of any data type.
// Object: Represents a collection of key-value pairs, where values can be of any data type.
// Function: Represents a block of reusable code.
// Pointer/Reference: Represents a memory address pointing to another value.
// Void: Represents the absence of any value.
// Null: Represents a deliberate absence of any value.
// Undefined: Represents a variable that has been declared but has not been assigned a value.
// Symbol: Represents a unique identifier, introduced in some languages like JavaScript (ES6).
// Date/Time: Represents a specific point in time or a duration.

let num1 = 5;
let num2 = num1;
num1++
console.log(num1,num2)

let arr1 = [1,2,3,4,5];
let arr2 = arr1;
arr1.push(6)
console.log(arr1,arr2)

