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

const speak = (name, say) => {
  // return name + "says" + say;
  return `
    ${name} would like to say ${say}. slsfljjflkljflfj
    `;
};
console.log(speak("John", "Hello"));
// =========================================
// Loops
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 50; i < 0; i--) {
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
// =============================================================

// for (let i = 0; i < 50; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
    continue;
    //line #103 will optimize the loop, because code flow is top to bottom,
    // but because of the 'continue' it will only run the code till there.
  }
}
