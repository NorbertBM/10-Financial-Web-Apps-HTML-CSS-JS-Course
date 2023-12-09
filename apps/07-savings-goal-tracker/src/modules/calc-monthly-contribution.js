export function calcMonthlyContribution(
  monthlyContribution,
  goalAmount,
  currentSavings,
  interestRateLabel,
  interestRateInput,
  calcInterestRate
) {
  let monthlyContributionValue = monthlyContribution.value;

  const monthsToGoal = Math.ceil(
    (goalAmount.value - currentSavings.value) / monthlyContributionValue
  );

  let percentage = (
    (monthlyContributionValue / goalAmount.value) *
    100
  ).toFixed(2);

  document.querySelector("#monthlyContributionRange").innerHTML = `
  <div class="bar monthly-contribution-bar" style="grid-template-columns:max(${percentage}%,25%) auto">


<span> <b>$${monthlyContributionValue}</b> <small>(${percentage}%)</small></span>

<span>  <small>You will reach your goal in ${monthsToGoal} months!</small></span>

</div>
  
  `;
  if (monthlyContributionValue !== "") {
    interestRateLabel.style.pointerEvents = "auto";
    interestRateLabel.classList.add("active");
  } else {
    interestRateLabel.style.pointerEvents = "none";
    interestRateLabel.classList.remove("active");
    interestRateInput.disabled = true;
    interestRateInput.value = "";
  }

  //   Recalc moths to save

  if (interestRateInput.value !== "") {
    calcInterestRate(
      interestRateInput,
      goalAmount,
      currentSavings,
      monthlyContribution
    );
  }
}
