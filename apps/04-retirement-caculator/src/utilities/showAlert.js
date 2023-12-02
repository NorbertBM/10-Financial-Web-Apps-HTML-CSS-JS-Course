export function showAlert(message) {
  const alertElement = document.createElement("div");
  alertElement.className = "alert alert-danger";
  alertElement.innerHTML = message;
  alertElement.style.opacity = 1;
  document.getElementById("result").appendChild(alertElement);

  setTimeout(function () {
    alertElement.style.opacity = 0;
    alertElement.remove();
  }, 3000);
}
