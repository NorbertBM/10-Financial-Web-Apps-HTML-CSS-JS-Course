export function deleteRow(event) {
  const buttonClicked = event.target;

  const rowToDelete = buttonClicked.parentElement.parentElement;

  const tableBody = rowToDelete.parentElement;

  if (confirm("Are your sure you want to delete this row?")) {
    tableBody.removeChild(rowToDelete);
    if (tableBody.children.length === 2) {
      tableBody.classList.add("d-none");
      document
        .querySelector("calculator-container")
        .classList.remove("display");
    }
  }
}
