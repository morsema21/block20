// TODO: this file! :)
const nums = [];

const addNumberForm = document.querySelector("form");

addNumberForm.addEventListener("submit", addNumber);

function addNumber(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const number = data.get("number");
  const inputValue = parseInt(number);
  if (inputValue) {
    nums.push(number);
    rendernumberBank();
  }
}

function rendernumberBank() {
  const numberBankOutput = document.querySelector("#numberBank");
  const output = numberBankOutput.querySelector("output");
  output.textContent = nums.join(" , ");
}

const sortOneButton = document.querySelector("#sortOne");

sortOneButton.addEventListener("click", sortOne);

function renderSorted() {
  const evenOutput = document.querySelector("#evenBox");
  evenBox.textContent = even.join(" , ");

  const oddOutput = document.querySelector("#odds");
  const oddBox = odds.querySelector("output");
  oddBox.textContent = odd.join(" , ");
}
let even = [];
let odd = [];
function moveNumber(numsSort) {
  if (numsSort % 2 === 0) {
    even.push(numsSort);
  } else odd.push(numsSort);
}

function sortOne(event) {
  event.preventDefault();
  if (nums.length > 0) {
    const numsSort = nums.shift();
    moveNumber(numsSort);
    return renderSorted();
  } else {
    alert("Number bank is empty");
  }
}

const sortAllButton = document.querySelector("#sortAll");

sortAllButton.addEventListener("click", sortAll);

function sortAll(event) {
  event.preventDefault();
  while (nums.length > 0) {
    const numsSort = nums.shift();
    moveNumber(numsSort);
  }
  return renderSorted();
}
