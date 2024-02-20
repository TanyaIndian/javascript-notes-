// In JavaScript, an iterable is an object that implements the iterable protocol, which means it has a defined way 
// to retrieve its elements sequentially, typically via an iterator.Iterables are objects that can be iterated over, also can use size or length
// ex- array,string,map,set,argument array
// meaning you can loop through their elements.

// / n JavaScript, the Map object is a built-in data structure that allows you to store key-value pairs where both the keys and the values
//  can be of any data type. Maps are similar to objects but provide some advantages, such as maintaining the insertion order of elements and 
// allowing any type of value as a key.

let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set([1,2,3,4],'abc')
console.log(map)

console.log(map.get("key1")); // Output: "value1"

// Checking Existence:
// You can check if a key exists in the Map using the has method.
console.log(map.has("key1")); // Output: true
map.delete("key1");


map.forEach((value, key) => {
    console.log(key, value);
  });
  
  // Alternatively, using a for...of loop
  for (let [key, value] of map) {
    console.log(key, value);
  }

  
  console.log(map.size); // Output: 1

  map.clear();


//   let map = new Map();

// Adding entries


// Updating value for an existing key
map.set("key1", "new value");

console.log(map.get("key1")); // Output: "new value"
