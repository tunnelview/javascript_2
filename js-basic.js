// single line comment
/* double line comment*/

// console.log("You are hacked");
// creating variables
// Rules to create the variables
// Any varable to be created or defined, we need to use these keywords
// var, let you change or override the data after it is created
// const, you can not change the data after it is created
/* In programming, we want to write the code from var or in other terms (ambiguity)
to surety(predictability). Both take the same memory.*/

// var name = "John";
// let phone = 41444445;
// const dob = "12/12/20";
// after line 15, go to the browser, click console, type name - "John" should appear

// console.log(name, phone, dob);
// line 18 shows multiple variables written in one line
// console.log(name);
// console.log(phone);
// console.log(name);
// console.log(dob);

// console is the object, and log is the method to print the item

/* if a variable is not defined, or type casted as 'var' then by default
it is var. var can be overridden, 'const' and 'let' cannot be overridden*/

//JS operators - Arithmetic + - * / % ** ++ --
// let a = 5;
// let b = 2;

// const c = a + b;
// // In Javascript the code runs from top to bottom and then right to left
// //
// console.log(c);
// const c = a + b;
// const c = a - b;
// const c = a * b;
//const c = a / b;
// const c = a ** 2;
// const c = b % a;

// increment operator
// a = a + 1;// 5+1
// a = a + 1;// 6+1
// can also be written as
// a++;

// decrement
// a--; can also be written as a = a - 1;
// a--;

// primitive type data types -
// int,
// double,
// string, written in strings
// float,
// short,
// long,
// byte
// the reason why it is called primitive type is because it occupies a specific
// place in the momory. This is also one of the reason why Java is a very strongly
// typed language.

/* Undefined - knot defined in system memory
 Null - dined in system momory but no value */

// Referential data types
// link list
// array
// interface
// Function

// important note - ***** let, var, const are all pre-defined key words that lets you
// define the variable

// variable naming
// firstname- smallcase, FirstName- pascal, firstName - camelcasing, FIRSTNAME - uppercase

// const john = {
//   name: "John",
//   age: 30,
// };

// const john1 = john;

// john.age = 40;
// console.log(john, age);
// console.log(john1);

// // console.log(c);

// // console.log(a, b);
// console.log(person);

//Array- Array always have squared brackets
// Array is always referential
// Array always occupies consecutive space/blocks in the memory
// const john = { name: "john" };
// const arg = ["prem", 4566, [454, 45], true, john];
// // const arg = ["prem", 4566, [454, 45], true, { name: "john" }];
// arg[4] = "sam";
// console.log(arg);
// // In array  we don't have key and value, we only have values, seperated by a comma.
// console.log(arg[4]);

// function hello() {
//   const a = 4 + 6;
//   console.log(a);
// }

// console.log(hello);
// console.log(hello());
// console.log(hello()); - This is invoking the function. Code runs from
// top to bottom, and code only runs once.

// console.log(hello); this is only calling the function, not invoking, which
// basically means that it will not evaluate or run anything within the function.
// in order to run the code, we need to invoke the function by '()'.

// anonymous function
// ()=>{}  - here parenthesis is the function and curly braces is the code
// execution section

//es6 function

// const hello = (a) => {
//   // const a 4 + 6;
//   console.log(a);
// };
// // debugger; for debugging, we need to key in the word debugger
// console.log(hello(45));

//Addint Math function//
// const ans = 1;
// const ans = Math.PI;
// const ans = Math.round(4.1); will convert to the whole number on the lower front
// const ans = Math.floor(4.9); this is for the greedy seller, will convert to higher number //4
// const ans = Math.ceil(4.1);will convert that to the bigger number //5
// const ans = Math.pow(5, 2); //25
// const ans = Math.sqrt(25);
// const ans = Math.min(54, 54, 2, 3, -5, 6, 7, 8, 9, 10);
// const ans = Math.max(54, 54, 2, 3, -5, 6, 7, 8, 9, 10);
// const ans = Math.random();// 0 - 0.9999999999999999999999
// const ans = Math.random() * 100;
// console.log(ans);

// JS Operators - Comparison Operators//

// const a = 5;
// const b = 6;

// Comparison Operators> == === != !== < <= >=

// const ans = a === b;
// const ans = a !== b;
// const ans =  a > b;
// const ans = a < b;
// const ans = a <= b;
// const ans = a >=b;

//Logical operators - && || ! Ternary
// Conditional statement  - if, else, else if, switch

// const hungry = false;
// if (hungry) {
// }
// console.log("Eat Pizza");

// if (age >= 18) {
//   console.log("Welcome to the party");
// } else {
//   console.log("go home kiddo");
// }

// // age >= 18 ? console.log("welcome to the party") : console.log("go home kiddo")
// // Line 178 is the ternary way of writing if else using ternary

// //else if

// const animal = "bird";
// if (animal === "cat") {
//   console.log(meow);
// } else if (animal === "dog") {
//   console.log("woof woof");
// } else if (animal === "bird") {
//   console.log("twit");
// }
// // else(animal = "")
// else {
//   console.log("sdfsdafs sd fs");
// }

//switch

// Error Handling

// try {
//   const a = 5;
//   const b = a + "5";
//   console.log(b);
// } catch (err) {
//   if (err.message === "erc555") {
//   }
//   console.log(err);
//   //console.log("Hey sorry, something went wrong");
// } finally {
//   console.log("finally executed");
// }
// ============================================================
// Scheduling
//  setTimeout - Clear Timeout - The below are two different ways of writing the same code

// const sayHello = () => {};
// console.log("hello there");
// const time = 1000;

// setTimeout(() => {
//   console.log("hello there");
// }, 1000);

// setInterval - clear interval

// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 3000);

// let i = 0;
// const clock = setInterval(() => {
//   console.log(i++);
// }, 1000);

// clock;
// const stopper = setTimeout(() => {
//   clearInterval(clock);
//   console.log("stopping the clock from settimeout");
// }, timeout);

// let i = 0;
// const clock = setInterval(() => {
//   console.log(i++);
// }, 1000);

// const stopper = () => {
//   clearInterval(clock);
// };

// const setter = setTimeout(stopper, 10000);
// // clearTimeout(setter);

// =========================================================

// const sayHello = () => {
//   console.log("hello there");
// };

// setTimeout(sayHello, 3000);
// console.log(sayHello);

// OBJECT METHODS
// obJEt, PROPERTY, METHOD

// const person = {
//   fName: "Prem",
//   lName: "Acharya",
// };

// //override the value
// person.fName = "Stranger";
// const name = person.fName;

// //add new property
// person.add = "Sydney";

// //delete property

// delete person.lName;
// console.log(person);

// // clone the object
// const newPerson = { ...person };
// newPerson.add = "Australia";
// console.log(person, newPerson);

// Date Object

// const val = new Date();
// // const val1 = val.getDate();
// const val1 = val.getFullYear();
// console.log(val.toLocaleDateString());

// Object Oriented Programming Paradigm

// const person = {
//   fName: "Shibin",
//   lName: "Abraham",
//   occ: "Developer",
//   bio: function () {
//     // console.log("Hello from " + this.fName);
//     return `Hi everyone, ${this.fName} ${this.lName} is a ${this.occ}`;
//   },
// };
// console.log(person.bio());

// const person = {
//     fName: "Shibin",
//     lName: "Abraham",
//     occ: "Developer",
//     bio: function () {
//       // console.log("Hello from " + this.fName);
//       return `Hi everyone, ${this.fName} ${this.lName} is a ${this.occ}`;
//     },
//   };
//   console.log(person.bio());

// Below is the Object Oriented Programming Paradigm in Java Script

// const userBio = (fn, ln, oc) => {
//   return {
//     fName: fn,
//     lName: ln,
//     occ: oc,

//     bio: function () {
//       return `Hi everyone, ${this.fName} ${this.lName} is a ${this.occ}`;
//     },
//   };
// };
// const premBio = userBio("Shibin", "Abraham", "Developer \n");
// const jessicaBio = userBio("Jessica", "James", "Developer\n");
// const angeloBio = userBio("Angelo", "Rodri", "Developer");

// console.log(premBio.bio(), jessicaBio.bio(), angeloBio.bio());

// Class based OOP paradigm in Java Script

// class PersonBio {
//   constructor(fn, ln, oc) {
//     this.fName = fn;
//     this.lName = ln;
//     this.occ = oc;
//   }

//   bio() {
//     return `Hi everyone, ${this.fName} ${this.lName} is a ${this.occ}`;
//   }
// }

// const shibinBio = new PersonBio("Shibin", "Abraham", "Developer");
// console.log(shibinBio.bio());

// const jessicaBio = new PersonBio("Jessica", "James", "Super Developer");
// console.log(jessicaBio.bio());

// =========================================
// Functional Programming
// Side effects // Function

// const add = (a, b) => {
//   return a + b;
// };
// const val = add(5, 6);
// console.log(val);

//Functional Programming - HIGH ORDER FUNCTION

const add = (a, b) => a + b;
const subt = (a, b) => a - b;

const calculator = (a, b, fn) => {
  return fn(a, b);
};
console.log(calculator(5, 6, add));
console.log(calculator(5, 6, subt));
