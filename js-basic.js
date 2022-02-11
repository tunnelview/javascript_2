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

console.log(c);
