export function domElement() {
  const form = document.querySelector("form"),
    result = document.querySelector(".result"),
    creditScoreInput = document.querySelector("#credit-score-input");
  return { form, result, creditScoreInput };
}
