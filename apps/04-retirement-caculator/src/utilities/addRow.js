export function addRow(showAlert, deleteRow) {
  console.log("add row");

  const currentAgeValue = parseFloat(
    document.getElementById("currentAge").value
  );

  const retirementAgeValue = parseFloat(
    document.getElementById("retirementAge").value
  );

  const monthlySavingsValue = parseFloat(
    document.getElementById("monthlySavings").value
  );

  const interestRateValue = parseFloat(
    document.getElementById("interestRate").value
  );

  let resultElement = document.getElementById("result");

  const tableBody = document.getElementById("tableBody");

  // Validation
  if (!resultElement.classList.contains("show-results")) {
    showAlert("Please fill in all the fields!");
    return;
  }

  // Display table

  if (tableBody.classList.contains("d-none")) {
    tableBody.classList.remove("d-none");
    document.querySelector(".calculator-container").classList.add("display");
  }
  // Create and Add New Row

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  
  <td>${currentAgeValue}</td>
  <td>${retirementAgeValue}</td>
  <td>${monthlySavingsValue}</td>
  <td>${interestRateValue}</td>
  <td>${resultElement.querySelector("span").innerText}</td>

  <td><button class="btn btn-delete">X</button></td>
  
  `;

  //   Add newRow to the table

  tableBody.appendChild(newRow);
  // General reset
  //   Clear all fields and results
  document.querySelector("#currentAge").value = "";
  document.querySelector("#retirementAge").value = "";
  document.querySelector("#monthlySavings").value = "";
  document.querySelector("#interestRate").value = "";

  //   Clear result

  resultElement.classList.remove("show-results");
  resultElement.innerHTML = "";
  //   Remove all label alerts

  document
    .querySelectorAll("label")
    .forEach((element) => element.classList.remove("error", "success"));

  // Delete a row

  const deleteBtn = newRow.querySelector("button");
  deleteBtn.onclick = deleteRow;

  console.log(resultElement);
}
