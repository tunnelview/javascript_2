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
