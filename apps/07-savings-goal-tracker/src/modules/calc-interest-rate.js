export function calcInterestRate(
  interestRateInput,
  goalAmount,
  currentSavings,
  monthlyContribution
) {
  let interestRateValue = interestRateInput.value;

  //? FV = (PMT * [(1 + r) ^ (n - 1)]) / r;

  //? r = Monthly Interest Rate = 0.00333
  //? n = Number of Months (what we want to find)

  //? Where:
  //? FV = Future Value (goal amount) = $50,000
  //? PMT = Monthly Payment = $500
  //? N is the number of months needed to reach your financial goal.
  //? G is the financial goal you want to achieve.
  //? is the monthly savings amount.

  //? r is the monthly interest rate (annual interest rate divided by 12 and then divided by 100).

  let savings = currentSavings.value !== "" ? currentSavings.value : 0;

  let FV = goalAmount.value - savings;

  let PMT = monthlyContribution.value;
  let r = interestRateValue / 100 / 12;
  let N = 0;

  N = Math.log((FV * r) / PMT + 1) / Math.log(1 + r);

  const monthsToGoal = Math.ceil(N);

  document.getElementById("interestRateRange").innerHTML = `
  With <b>${interestRateValue}% interest</b>, you will reach your goal in <b>${monthsToGoal} months!</b>
  `;
}
