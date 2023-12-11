export function pieChart() {
  const totalInterest = document
    .getElementById("total-interest")
    .innerText.split("$")[1]
    .replace(/,/g, "");

  const loanAmount = document.getElementById("loan-amount-input").value;

  const ctx = document.getElementById("myChart");

  if (Chart.getChart(ctx)) {
    Chart.getChart(ctx).destroy();
  }

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Loan Amount", "Total Interest"],
      datasets: [
        {
          label: "",
          data: [loanAmount, totalInterest],
          borderWidth: 2,
        },
      ],
    },
  });
}
