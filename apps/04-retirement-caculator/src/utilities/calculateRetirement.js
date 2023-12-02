export function calculateRetirement(showAlert) {
  //   console.log("calc ret");

  const currentAge = document.getElementById("currentAge");
  const currentAgeValue = parseFloat(currentAge.value);

  const retirementAge = document.getElementById("retirementAge");
  const retirementAgeValue = parseFloat(retirementAge.value);

  const monthlySavings = document.getElementById("monthlySavings");
  const monthlySavingsValue = parseFloat(monthlySavings.value);

  const interestRate = document.getElementById("interestRate");
  const interestRateValue = parseFloat(interestRate.value);

  //   console.log(interestRateValue);

  //   Input Validation

  //   Current age

  if (currentAgeValue <= 0 || currentAgeValue > 100 || isNaN(currentAgeValue)) {
    // alert("Current Age must be between 0 and 100.");
    showAlert("Current Age must be between 0 and 100.");
    currentAge.focus();
    return;
  } else {
    console.log("success");
  }

  //   Retirement age

  if (
    retirementAgeValue <= 0 ||
    retirementAgeValue > 100 ||
    isNaN(retirementAgeValue) ||
    retirementAgeValue <= currentAgeValue
  ) {
    // alert(
    //   "Retirement Age must be between 0 and 100 and greater than current age."
    // );
    showAlert(
      "Retirement Age must be between 0 and 100 and greater than current age."
    );
    retirementAge.focus();
    return;
  } else {
    console.log("success");
  }

  //   Monthly Savings

  if (
    monthlySavingsValue <= 0 ||
    monthlySavingsValue > 10000 ||
    isNaN(monthlySavingsValue)
  ) {
    // alert("Monthly savings must be between 0 and 10000.");
    showAlert("Monthly savings must be between 0 and 10000.");
    monthlySavings.focus();
    return;
  } else {
    console.log("success");
  }

  //   Annual Interest Rate

  if (
    interestRateValue <= 0 ||
    interestRateValue > 100 ||
    isNaN(interestRateValue)
  ) {
    // alert("Interest rate must be between 0 and 100.");
    showAlert("Interest rate must be between 0 and 100.");
    interestRate.focus();
    return;
  } else {
    console.log("success");
  }

  const resultElement = document.getElementById("result");
  resultElement.classList.add("show-results");
}
