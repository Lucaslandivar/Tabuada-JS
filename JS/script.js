// Selecting the elements
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

const squareRootForm = document.querySelector("#squareRoot-form");
const squareRootNumberInput = document.querySelector("#squareRoot-number");
const squareRootTable = document.querySelector("#squareRoot-operations");
const squareRootTitle = document.querySelector("#squareRoot-title span");

// Functions
const createMultiplicationTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `
      <div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
      </div>
    `;

    multiplicationTable.innerHTML += template;
  }

  multiplicationTitle.innerText = number;
};

const createSquareRootTable = (number) => {
  squareRootTable.innerHTML = "";

  for (let i = 1; i <= number; i++) {
    const squareRoot = Math.sqrt(i);

    const template = `
      <div class="row">
        <div class="operation">√${i} = </div>
        <div class="result">${squareRoot.toFixed(2)}</div>
      </div>
    `;

    squareRootTable.innerHTML += template;
  }

  squareRootTitle.innerText = number;
};

// Events
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createMultiplicationTable(multiplicationNumber, multiplicatorNumber);
});

squareRootForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const squareRootNumber = squareRootNumberInput.value;

  if (!squareRootNumber) return;

  createSquareRootTable(squareRootNumber);
});
