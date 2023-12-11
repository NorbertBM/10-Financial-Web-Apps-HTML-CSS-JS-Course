export function calculateLoan() {
  const loanAmount = document.querySelector("#loan-amount-input").value;

  const interestRate =
    document.querySelector("#interest-rate-input").value / 100 / 12;

  const loanTerm = document.querySelector("#loan-term-input").value * 12;

  const result = document.querySelector("#result");

  const x = Math.pow(1 + interestRate, loanTerm);

  const monthlyPayment = (loanAmount * x * interestRate) / (x - 1);

  const totalPayment = monthlyPayment * loanTerm;

  const totalInterest = totalPayment - loanAmount;

  const difference = ((totalInterest / totalPayment) * 100).toFixed(2);

  result.innerHTML = `

<h2>Results:</h2>

<h3 class="monthly-payment">Monthly Payment: $${
    isNaN(monthlyPayment) ? 0.0 : numbersWithCommas(monthlyPayment.toFixed(2))
  } </h3>
<h3>Total Payment: $${
    isNaN(totalPayment) ? 0.0 : numbersWithCommas(totalPayment.toFixed(2))
  }</h3>
<h3 id="total-interest" class="interest">Total Interest Paid: $${
    isNaN(totalInterest) ? 0.0 : numbersWithCommas(totalInterest.toFixed(2))
  }</h3>
<h3 class="interest">Interest Paid:${
    isNaN(difference) ? 0.0 : difference
  }% </h3>

`;
}

function numbersWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
