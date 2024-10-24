// import { apiKey } from "./util.js" 

//import  default variable
// import apiKey from "./util.js"

// import multiple variables
// import { apiKey, abc as content } from "./util.js";

// import all variables in file
// import * as utilFile from "./util.js";



// console.log(content);


//variables


// let userMessage = "Hello Mukesh";
   
//     userMessage = "Hello Nilesh";
  
// console.log(userMessage);


// for const variable
// const userMessage = "Hello Mukesh";
   
    // userMessage = "Hello Nilesh";
  
// console.log(userMessage);
// console.log(userMessage);


// operators

// console.log("hello" + "world");

// triple equal to used for checking equality
// console.log(10 === 10);

// Functions

// function greet(){
//     // console.log("Hello!! Mukesh");
//     console.log("Hello World!!")
// }

// greet();
// greet();
// greet();

// functions with input parameters

// function greetMessage(userName, message){
//     // console.log(userName);
//     // console.log(message);
//     return "Hi I am " + userName + ". " + message;
// }

// console.log(greetMessage("Mukesh","I am React Developer"));
// console.log(greetMessage("Nilesh", "I am Full Stack Developer"));



// function greetMessage(userName, message= "I am a Developer"){
//     // console.log(userName);
//     // console.log(message);
//     return "Hi I am " + userName + ". " + message;
// }
 
// const greetMessage1 = greetMessage("Mukesh")
// console.log(greetMessage1);
// console.log(greetMessage("Nilesh", "I am Full Stack Developer"));


// arrowv Function

// export default (userName, message) => {
//     return userName+ "." + message;
// }

// const UserId = console.log("Mukesh", "hello everyone");

// console.log(UserId) // This creates the tuple and is unrelated to your function

// const result = (userName, message) => {
//     return userName + "." + message;
// }

// console.log(result("Mukesh", " hello everyone")); 


// passing an object in arrow functiion 

// const displayUser = (user) => {
//     return `User: ${user.name}, Age: ${user.age}`;
// };

// const userObject = {
//     name: "Mukesh",
//     age: 30
// };

// console.log(displayUser(userObject)); 


// passing if statment in arrow function

// const checkAge = (age) => {
//     if (age >= 18) {
//         return "You are an adult.";
//     } else {
//         return "You are a minor.";
//     }
// };

// console.log(checkAge(20));
// console.log(checkAge(15));  


//  Objects in JS 

// const user ={
//     name: "Max",
//     age: "25",
//     greet(){
//         console.log("Happy Coding");
//         console.log("My age is: "+this.age);
//     }
// } 

// // console.log(user.name);
//  user.greet();


// classes in js

// class User{

//     constructor(name, age="25"){
//         this.name = name;
//         this.age = age; 
//     }

//     greet(){
//         console.log(this.name + "!"+"Your Data is submitted Sucessfully");
//     }
// }


// const user1 = new User("Max");
// console.log(user1);

// const user2 = new User("Millen",30);
// console.log(user2)
// // if form is sucesfully submittes the show greet message
// user1.greet();
// user2.greet();


// Arrays

const hobbies =["Sports", "Swimming", "Riding"];

console.log(hobbies);
console.log(hobbies[2]);

// used array push mehod
hobbies.push('Reading');
console.log(hobbies);

// findindex method
// find index is a function inside that we have created another function and pass the parameter.
// const index = hobbies.findIndex((item) =>{
//  return item === "Reading";
// } );

// console.log(index);

//another way of writing findindex method (Shorten version)

const index = hobbies.findIndex((item) => item === "Reading");
   
   console.log("The Index: "+index);


// map method 

const editedHobbyies = hobbies.map((item) => item + "!" );

console.log(editedHobbyies);

