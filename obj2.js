// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);


// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);

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


const user3= {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
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

user1.about(user4);