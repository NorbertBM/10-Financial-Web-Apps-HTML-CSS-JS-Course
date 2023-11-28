// console.log("Boilerplate");
import { domElement } from "./dom-elements.js";

const { form, result, creditScoreInput } = domElement();

import { inputValidation } from "./input-validation.js";
// console.log(form, result, creditScoreInput);

import { checkCreditScore } from "./check-credit-score.js";

const isValid = {
  value: true,
  type: true,
};
form.onsubmit = (event) => {
  event.preventDefault();
  //   alert("Submit");

  //   Validation
  inputValidation(creditScoreInput, isValid);

  //   Show results
  if (isValid.value && isValid.type) {
    // console.log(result);
    checkCreditScore(creditScoreInput, result);
    result.classList.add("showResult");
  }
};
