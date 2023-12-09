export function domElements() {
  const checkInterestRate = document.getElementById("interest-rate"),
    interestRateInput = document.getElementById("interest-rate-input"),
    goalAmount = document.getElementById("goal-amount"),
    currentSavings = document.getElementById("current-savings"),
    monthlyContribution = document.getElementById("monthly-contribution"),
    interestRateLabel = document.querySelector(`label[for="interest-rate"]`);

  return {
    checkInterestRate,
    interestRateInput,
    goalAmount,
    currentSavings,
    monthlyContribution,
    interestRateLabel,
  };
}
