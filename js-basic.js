// single line comment
/* double line comment*/

console.log("You are hacked");
// creating variables
// Rules to create the variables
// Any varable to be created or defined, we need to use these keywords
// var, let you change or override the data after it is created
// const, you can not change the data after it is created
/* In programming, we want to write the code from var or in other terms (ambiguity)
to surety(predictability). Both take the same memory.*/

var name = "John";
let phone = 41444445;
const dob = "12/12/20";
// after line 15, go to the browser, click console, type name - "John" should appear

console.log(name, phone, dob);
// line 18 shows multiple variables written in one line
// console.log(name);
// console.log(phone);
// console.log(name);
// console.log(dob);

// console is the object, and log is the method to print the item

/* if a variable is not defined, or type casted as 'var' then by default
it is var. var can be overridden, 'const' and 'let' cannot be overridden*/

//JS operators - Arithmetic + - * / % ** ++ --
let a = 5;
let b = 2;

const c = a + b;
// In Javascript the code runs from top to bottom and then right to left
//
console.log(c);
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

const hello = (a) => {
  // const a 4 + 6;
  console.log(a);
};

console.log(hello(45));
