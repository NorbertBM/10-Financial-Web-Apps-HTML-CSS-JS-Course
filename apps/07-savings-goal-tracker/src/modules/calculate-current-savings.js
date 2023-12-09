export function calculateCurrentSavings(
  currentSavings,
  goalAmount,
  monthlyContribution,
  interestRateInput,
  calcInterestRate
) {
  let currentSavingsValue = currentSavings.value;

  const percentageSavings = (
    (currentSavingsValue / goalAmount.value) *
    100
  ).toFixed(2);

  const amountLeft = goalAmount.value - currentSavingsValue;

  const percentageRest = (
    ((goalAmount.value - currentSavingsValue) / goalAmount.value) *
    100
  ).toFixed(2);

  document.getElementById("currentSavingsRange").innerHTML = `
<div class="bar savings-amount-bar" style="grid-template-columns:${percentageSavings}% ${percentageRest}%">


<span> <b>$${currentSavingsValue}</b> <small>(${percentageSavings}%)</small></span>

<span> <b>$${amountLeft}</b> <small>(${percentageRest}%)</small></span>

</div>

`;

  monthlyContribution.disabled = false;

  //   Recalculate months left on initial goal change

  if (interestRateInput.value !== "") {
    calcInterestRate(
      interestRateInput,
      goalAmount,
      currentSavings,
      monthlyContribution
    );
  }
}
