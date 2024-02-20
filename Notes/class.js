// a class primarily serves as a blueprint for creating objects. When you create a class, you're essentially defining the
//  structure and behavior of objects that will be created based on that class.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // Call the parent class constructor
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
  }
  

  // Creating instances of the Student class
let student1 = new Student('Eve', 20, 12);

// Accessing inherited methods and properties
student1.greet(); // Output: Hello, my name is Eve and I am 20 years old.
student1.study(); // Output: Eve is studying in grade 12.


// n JavaScript, the super keyword is used within subclasses (child classes) to call methods or access properties from the superclass
//  (parent class). It's commonly used in two scenarios:

// Calling the superclass constructor: When you define a subclass constructor, you often need to initialize the properties inherited from the 
// superclass. You can do this by calling the superclass constructor using super().

class Animal {
    constructor(sound,x) {
      this.sound = sound;
      this.age = 12
    }
    bark()
    {
        console.log(this.x,this.breed,this.sound)
    }
  }
  
  class Dog extends Animal {
    constructor(name, sound,breed) {
      super(sound,name); // Call the superclass constructor to initialize 'name'
      this.breed = breed
    }
    
  }
  
  let myDog = new Dog("Buddy", "bhaoo",'golden');
  myDog.bark()
//   the super keyword is used within subclass methods or constructors to access or call members of the superclass, while 
//   the extends keyword is used in class declarations to establish an inheritance relationship between classes. They work
//    together to facilitate inheritance and code reuse in object-oriented JavaScript programming.



// Encapsulation:
// Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit, i.e., a
//  class. This concept helps in data hiding and prevents direct access to the data from outside the class.

// Inheritance:
// Inheritance is a mechanism where a new class inherits properties and methods from an existing class. The existing class 
// is called the superclass or parent class, and the new class is called the subclass or child class.

// olymorphism:
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables methods to behave
//  differently based on the object that invokes them.

// Abstraction:
// Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. 
// It allows you to focus on what an object does rather than how it does it.