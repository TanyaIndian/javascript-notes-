// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();


function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();


const user3 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user3.about();
const myFunc = user3.about.bind(user1);
myFunc();



// arrow functions 

const user4 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user4.about(user1);



// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



user1.about();




// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}

const user5 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user5);
const is18 = user5.is18();
const about = user5.about();
console.log(about);