console.log(" Script File successfully loaded");

let count = 0;

//get HTMML element - querySelector
let plusBtn = document.querySelector("#plus-btn");
let minusBtn = document.querySelector("#minus-btn");
let resetBtn = document.querySelector("#reset-btn");
let counter = document.querySelector("#counter");

//create callback
let increment = () => {
  count++;
  counter.textContent = count;
};

let decrement = () => {
  count--;
  counter.textContent = count;
};

let reset = () => {
  count = 0;
  counter.textContent = count;
};

//Connect the HTML element and Callback with event listener
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
resetBtn.addEventListener('click', reset);
