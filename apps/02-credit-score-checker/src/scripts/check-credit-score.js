export function checkCreditScore(creditScoreInput, result) {
  const creditScore = parseInt(creditScoreInput.value);

  //   console.log(typeof creditScore);

  function creditHTML(commentText = "") {
    return `
          <div>
            Your credit score of: <b class="credit-score">${creditScore}</b>
          </div>

          <div class="credit-score-comment">${commentText}</div>

          <button type="button" class="btn btn-close">Close</button>
          
          `;
  }
  switch (true) {
    case creditScore >= 800:
      result.innerHTML = `${creditHTML("Excellent!")}`;
      break;
    case creditScore >= 700:
      result.innerHTML = `${creditHTML("Good job!")}`;
      break;
    case creditScore >= 600:
      result.innerHTML = `${creditHTML("Not bad!")}`;
      break;
    case creditScore >= 500:
      result.innerHTML = `${creditHTML("Not bad!")}`;
      break;
    default:
      result.innerHTML = `${creditHTML("Poor. Consider credit counseling!")}`;
  }
  result.querySelector(".btn-close").onclick = () =>
    removeResult(result, creditScoreInput);
}

function removeResult(result, creditScoreInput) {
  result.classList.remove("showResult");
  creditScoreInput.value = "";
  creditScoreInput.focus();
}
