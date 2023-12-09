export function calcGoal(goalAmount, currentSavings) {
  console.log("Goal amount calculated");
  let goalAmountValue = goalAmount.value;

  document.getElementById("goalAmountRange").innerHTML = `
  
  <div class="bar goal-amount-bar">   
  
  <b>$${goalAmountValue}</b>
  
  </div>
  
  `;

  currentSavings.disabled = false;
}
