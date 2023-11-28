export function alertMessage(message, type, parent = document.body) {
  const alert = document.createElement("div");
  alert.classList.add("alert", `alert-${type}`);
  alert.innerText = message;
  parent.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}
