// console.log("module");

import { domElements } from "./dom-elements.js";

const {
  checkInterestRate,
  interestRateInput,
  goalAmount,
  currentSavings,
  monthlyContribution,
  interestRateLabel,
} = domElements();

// console.log(
//   checkInterestRate,
//   interestRateInput,
//   goalAmount,
//   currentSavings,
//   monthlyContribution,
//   interestRateLabel
// );

import { calcGoal } from "./calc-goal.js";

goalAmount.onchange = () => {
  calcGoal(goalAmount, currentSavings);
  currentSavings.focus();

  //   Recalculate current savings on initial goal change
  if (currentSavings.value !== "") {
    calculateCurrentSavings(
      currentSavings,
      goalAmount,
      monthlyContribution,
      interestRateInput,
      calcInterestRate
    );
  }

  //   Recalculate monthly contribution on initial goal change

  if (monthlyContribution.value !== "") {
    calcMonthlyContribution(
      monthlyContribution,
      goalAmount,
      currentSavings,
      interestRateLabel,
      interestRateInput,
      calcInterestRate
    );
  }
  //   Recalculate months left on initial goal change

  if (interestRateInput.value !== "") {
    calcInterestRate(
      interestRateInput,
      goalAmount,
      currentSavings,
      monthlyContribution
    );
  }
};

import { calculateCurrentSavings } from "./calculate-current-savings.js";

currentSavings.onchange = () => {
  calculateCurrentSavings(
    currentSavings,
    goalAmount,
    monthlyContribution,
    interestRateInput,
    calcInterestRate
  );

  monthlyContribution.focus();

  //   Recalculate monthly contribution on initial goal change

  if (monthlyContribution.value !== "") {
    calcMonthlyContribution(
      monthlyContribution,
      goalAmount,
      currentSavings,
      interestRateLabel,
      interestRateInput,
      calcInterestRate
    );
  }
};

import { calcMonthlyContribution } from "./calc-monthly-contribution.js";

monthlyContribution.onchange = () => {
  calcMonthlyContribution(
    monthlyContribution,
    goalAmount,
    currentSavings,
    interestRateLabel,
    interestRateInput,
    calcInterestRate
  );
};

// Toggle interest rate input
checkInterestRate.onclick = () => toggleInterestRate();
function toggleInterestRate() {
  if (checkInterestRate.checked) {
    interestRateInput.disabled = false;
    interestRateInput.focus();
  } else {
    interestRateInput.disabled = true;
  }
}
// Calcu interest

import { calcInterestRate } from "./calc-interest-rate.js";

interestRateInput.onchange = () =>
  calcInterestRate(
    interestRateInput,
    goalAmount,
    currentSavings,
    monthlyContribution
  );

import { validation } from "./validation.js";

validation();
