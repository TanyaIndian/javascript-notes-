// In JavaScript, a Set is a built-in object that allows you to store unique values of any type. 
// Sets maintain the insertion order of elements, which means the order of elements in the Set corresponds 
// to the order in which they were added.
let set = new Set();
set.add(1);
set.add("Hello");
set.add({ name: "John" })
console.log((set));
// Set(4) { 1, 'Hello', { name: 'John' }, { name: 'John' } }

console.log(set.size); // Output: 3

set.delete(1);

set.clear();

console.log(set.has(1)); // Output: true
console.log(set.has(5)); // Output: false

set.forEach(function(value) {
    console.log(value);
  });
  
  // Alternatively, using for...of loop
  for (let value of set) {
    console.log(value);
  }
//   Converting Set to Array:
let array = Array.from(set);

// Using Sets for Unique Values:
let numbers = [1, 2, 3, 4, 4, 5, 5];
let uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }

