// console.log(" Sequence init ...");

// setTimeout(() => {
//   console.log("1. running ...");
// }, 0);
// debugger;
// const multi2 = (a) => {
//   const total = a * 2;
//   return total;
// };

// const add5 = (a) => {
//   const total = a + 5;
//   const total2 = multi2(total);
//   return total2;
// };

// const hey = () => {
//   console.log("2. running ...");
//   const total3 = add5(2);
//   console.log(total3);
// };
// console.log("3. running ...");

// hey();
// console.log("4. running ...");

// recursive function
// debugger;

// let i = 0;
// const parent = () => {
//   console.log(i++);
//   parent();
// };
// parent();

// =================

// let a = 5;

// const myFun = () => {
//   a = 6;

//   console.log(a, b);
// };

// myFun();
// console.log(b);

// ==========================
// Template literals -
// it allows you to write js code and html code and turn that into
// a string. Here, instead of using line 56, we use the tilde and dollar sign($) to
// pass the variable and full stop. What ever needs to be printed, needs to be written
// within the tilde

// const speak = (name, say) => {
//   // return name + "says" + say;
//   return `
//     ${name} would like to say ${say}. slsfljjflkljflfj
//     `;
// };
// console.log(speak("John", "Hello"));
// =========================================
// Loops
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 50; i < 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);
// =============================================================

// for (let i = 0; i < 50; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// for (let i = 0; i < 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     continue;
//     //line #103 will optimize the loop, because code flow is top to bottom,
//     // but because of the 'continue' it will only run the code till there.
//   }
// }

// NUMBER
// let a = "5.5";
// a = parseInt(a);
// a = parseFloat(a);
// a = Number(a);
// a = +a;
// a = 35_456_456_898_432_463;
//safe number
//-2^53-1 to 2^53-1 - safe number in Java Script

// let a = "5.5";
// let a = "eeerrr";
// // const b = a + 5;
// console.log(isNaN(a));

// STRING
// const str = "Lorem SJLKSF dolor sit ametc.";
// let val = str.length;
// let val = str.toUpperCase();
// let val = str.toLowerCase();

// let val = str.lastIndexOf("d");
// let val = str.replace("sam", "will");
// let val = str.replaceAll ("sam", "will");

// let val = str.substring(2,10);
// let val = str.slice(2, 5); // this can also include the space
// let val = str.slice(0, -2);
// let val = str.charAt(11); // used to check what letter is at a particular index/position
// let val = str.split("s") // this command will split the str into an array items, by using S, including the S

// console.log(val);
// =================================================

// ARRAY
//
// const fruits = ["apple", "banana", "aorange", "pineapple"]; // adding item at the front and back
// fruits.unshift("strawberry"); // adding item in the front
// fruits.push("strawberry"); // adding item in back

// fruits.shift(); // it removes the first item or take the item from the front
// const val = fruits.pop(); // command used to remove the last item from array
// fruits.pop();

// fruits[2] = "strawberry"; // this portion tells us index of the item and also add the item on to that index position in the array
// val = fruits[2]; // tell us the index of the item.

// const val = fruits.splice(2, 2);
// fruits.splice(2, 0, "strawberry");

// val = fruits.slice(1, 3);

// fruits.sort();

// const num1 = [1, 20, 5, 68, 9, 10];
// please don't use sorting for numbers as it takes ASCII code into consideration

// nums.sort(); // sort function is good to be used for "strings and dates"

// const newArg = [...num1]; // this is new style of overriding or creating a new array with the new value.
// newArg[0] = 100;
// console.log(num1, newArg);

// ============================================
// ARRAY LOOPS - Line 175 to 178 is traditional way running loop
// const fruits = ["apple", "banana", "aorange", "pineapple"];
// for (let i = 0; i < Array.length; i++) {
//   console.log(fruits[i]);
// }
// ========================================

//forEach

//map
// const newArg = fruits.map((a, i) => {
//   console.log(a, i);
//   return a.toUpperCase();
// });

//filter
// const fruits = ["apple", "banana", "aorange", "pineapple"];
// const newArg = fruits.filter((a) => {
//   if (a.includes("e")) { // line 191 to 193 is written shortened
//     return true;
//   }
// const newArg = fruits.filter((a) => a.includes("e")); // this is the shortned version

//   if (a.length >= 6) {
//     return a;
//   }
// });
// ====================================================================
// FIND - SOME - EVERY
// const fruits = ["apple", "banana", "aorange", "pineapple"];
// const val = fruits.find(item => item.includes("e"));
// const val = fruits.some((item) => item.includes("1e"));
// const val = fruits.every((item) => item.includes("1e"));

// console.log(val);
// =======================================================

// Reduce
const money = [100, 200, 300, 400, 500];
const val = money.reduce((subt1, item) => {
  return subt1 + item;
}, 0);

console.log(val);
