// console.log("Boilerplate");

import { calculateLoan } from "./calculate-loan.js";
import { pieChart } from "./pieChart.js";
const inputs = document.querySelectorAll("input[type='number']");
const range = document.querySelectorAll("input[type='range']");

console.log(inputs, range);

inputs.forEach((input) => input.addEventListener("input", updateRangeValue));

range.forEach((input) => input.addEventListener("input", updateInputValue));

function updateRangeValue() {
  const range = this.nextElementSibling;
  range.value = this.value;
  calculateLoan();
  pieChart();
}

function updateInputValue() {
  const input = this.previousElementSibling;
  input.value = this.value;
  calculateLoan();
  pieChart();
}
