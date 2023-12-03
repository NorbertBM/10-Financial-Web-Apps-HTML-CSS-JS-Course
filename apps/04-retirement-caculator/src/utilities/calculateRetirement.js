export function calculateRetirement(
  showAlert,
  handleErrorLabel,
  handleSuccessLabel
) {
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

    // Handle label
    handleErrorLabel(currentAge);

    return;
  } else {
    // console.log("success");
    handleSuccessLabel(currentAge);
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
    // Handle label
    handleErrorLabel(retirementAge);

    return;
  } else {
    // console.log("success");
    handleSuccessLabel(retirementAge);
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
    // Handle label
    handleErrorLabel(monthlySavings);

    return;
  } else {
    // console.log("success");
    handleSuccessLabel(monthlySavings);
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
    // Handle label
    handleErrorLabel(interestRate);

    return;
  } else {
    // console.log("success");
    handleSuccessLabel(interestRate);
  }

  // Calculate retirement savings

  const yearsUntilRetirement = retirementAgeValue - currentAgeValue;

  const monthlyInterestRate = interestRateValue / 12 / 100;

  const totalMonths = yearsUntilRetirement * 12;

  let futureValue = 0;
  for (let i = 0; i < totalMonths; i++) {
    futureValue =
      (futureValue + monthlySavingsValue) * (1 + monthlyInterestRate);
  }

  const resultElement = document.getElementById("result");
  resultElement.classList.add("show-results");

  const resultHTML = `<div class="alert alert-success">Estimates retirement savings: <span>$${addCommas(
    futureValue.toFixed(2)
  )}</span></div>`;

  resultElement.innerHTML = resultHTML;
}

function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
