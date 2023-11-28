import { alertMessage } from "./alert.js";

export function inputValidation(creditScoreInput, isValid) {
  //   console.log(creditScoreInput.value, isValid);
  //   Validate input value
  if (creditScoreInput.value === "") {
    // alert("Please enter a credit score.");
    alertMessage("Please enter a credit score.", "warning");
    isValid.value = false;
    // console.log(isValid);
  } else {
    isValid.value = true;
  }
  //   Validate input type
  if (isNaN(creditScoreInput.value)) {
    // alert("Please enter only number.");
    alertMessage("Please enter only number.", "warning");
    isValid.type = false;
    // console.log(isValid);
  } else {
    isValid.type = true;
  }
}
