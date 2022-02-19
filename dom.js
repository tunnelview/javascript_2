// const h1ELM = document.querySelector("h1");
// console.log(Elmh1);

// const nameElm = document.getElementById("name");
// console.log(nameElm);

// const clsElm = document.getElementsByClassName("info");
// const clsElm = document.querySelectorAll(".info"); this will return all the instances of that class
// console.log(clsElm);

// const clsElm = document.querySelector(".info");
// const val = clsElm.innerText;

// const val = clsElm.innerHTML;

// const val = clsElm.innerHTML;
// console.log(val);
// clsElm.innerText = "hello";

// after = means reading from browser
// const val = clsElm.innerHTML
// console.log(val)

// before = means writing to browser
// clsELM.innerText  = "Hello";
// clsElm.innerHTML = <h1>Hello</h1>

// clsELM.setAttribute("style", "color = red");
// const anchor = document.querySelector("a");
// anchor.setAttribute("target", "_black");
// anchor.style.color = "red";
// anchor.style.fontSize = "30px";
// anchor.style.textDecoration = "none";

const clsELM = document.querySelector("#name");
clsELM.addEventListener("click", () => {
  anchor.style.color = "red";
  anchor.style.fontSize = "30px";
  anchor.style.textDecoration = "none";
  clsELM.innerText = "Gary";
});

const firMe = () => {
  alert("you just fired me");
};
const btnElm = document.querySelector("#me");
btnElm.addEventListener("click", firMe); // click will invoke the function here
